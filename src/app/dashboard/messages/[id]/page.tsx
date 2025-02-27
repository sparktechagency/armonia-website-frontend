"use client";
import { context } from "@/app/Context";
import Participant from "@/components/Messages/Participant";
import SendMessageIput from "@/components/Messages/SendMessageIput";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hook";
import { TMessage, TPageProps, TUniObject } from "@/type/index.type";
import dayjs from "dayjs";
import React, { use, useContext, useEffect, useRef, useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Page = (props: TPageProps) => {
  const { id } = use(props.params);
  const chatRef = useRef<HTMLDivElement>(null);
  const appContext = useContext(context);
  const [nextPage, setNextPage] = useState(1);
  const [addNew, setAddNew] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const { user, token } = useAppSelector((state) => state.auth);
  const groupedMessages = groupMessagesByDate(messages);

  const fetchMessages = async (page = 1) => {
    try {
      if (id && token) {
        const res = await fetch(`${apiUrl}conversations/${id}?page=${page}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (nextPage > 1) {
          setMessages((c) => [...[...data?.data?.messages].reverse(), ...c]);
        } else {
          setMessages((c) => [...data?.data?.messages].reverse());
        }
        setNextPage(data.pagination?.nextPage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    if (scrollTop === 0 && nextPage) {
      fetchMessages(nextPage);
    }
  };

  useEffect(() => {
    return () => {
      fetchMessages(nextPage);
    };
  }, []);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   fetchMessages(nextPage, controller.signal);
  //   return () => controller.abort(); // Cleanup when unmounting
  // }, []);
  useEffect(() => {
    if (appContext?.socket) {
      appContext.socket.on(`chat-${id}`, (message) => {
        setMessages((c) => [...c, message]);
        setFetchCount((c) => c + 1);
        setAddNew(true);
      });
      return () => {
        appContext?.socket?.off(`chat-${id}`);
      };
    } else return;
  }, [appContext?.socket]);
  useEffect(() => {
    if (
      chatRef.current &&
      (nextPage > 2 || nextPage === null) &&
      fetchCount < 1
    ) {
      chatRef.current.scrollTo({
        top: addNew ? 0 : 100,
        behavior: "smooth",
      });
    } else if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: fetchCount > 1 ? "smooth" : "instant",
      });
    }
  }, [messages]);

  return (
    <div className="w-full p-6 bg-[#fafafa] h-full">
      <Participant />
      <div
        ref={chatRef}
        onScroll={handleScroll}
        className="max-h-[63vh] overflow-y-auto mx-auto mt-8 px-4 space-y-4 custom-scrollbar"
      >
        {Object.keys(groupedMessages).map((date, index) => (
          <div key={index} className="my-1">
            <div className="text-center">
              {dayjs(date).format("MMMM D, YYYY")}
            </div>
            {groupedMessages[date].map(
              (message: TMessage, msgIndex: number) => (
                <div key={msgIndex} className="w-full">
                  {/* { console.log(message.senderId)} */}
                  {message.senderId === user?.id ? (
                    <div className={`w-fit ml-auto mb-2 text-right`}>
                      <div
                        className={
                          "mb-1 p-3 text-white bg-blue-400 rounded-md rounded-ee-none"
                        }
                      >
                        {message.message}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {dayjs(message.createdAt).format("h:mm A")}
                      </div>
                    </div>
                  ) : (
                    <div
                      className={cn(`w-fit mb-2`, {
                        "text-right": message.senderId === user?.id,
                      })}
                    >
                      <div
                        className={
                          "mb-1 p-3 text-white bg-yellow-400 rounded-md rounded-ss-none"
                        }
                      >
                        {message.message}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {dayjs(message.createdAt).format("h:mm A")}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        ))}
      </div>
      <SendMessageIput />
    </div>
  );
};

export default Page;

const groupMessagesByDate = (messages: TMessage[]) => {
  return messages.reduce((grouped: TUniObject, message) => {
    const date = dayjs(message.createdAt).format("YYYY-MM-DD");
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(message);
    return grouped;
  }, {});
};
