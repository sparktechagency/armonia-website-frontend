"use client";
import SendMessageIput from "@/components/Messages/SendMessageIput";
import { cn } from "@/lib/utils";
import { useMessagesQuery } from "@/redux/features/messages/message.api";
import { useAppSelector } from "@/redux/hook";
import { TMessage, TPageProps, TUniObject } from "@/type/index.type";
import dayjs from "dayjs";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Page = (props: TPageProps) => {
  const { id } = use(props.params);
  const [messages, setMessages] = useState([]);
  const { user, token } = useAppSelector((state) => state.auth);
  const groupedMessages = groupMessagesByDate(messages);
  useEffect(() => {
    if (id && token) {
      fetch(`${apiUrl}conversations/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMessages(data?.data?.messages);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  console.log(groupedMessages);
  const userm = {
    name: "John Doe",
    img: "/beautician.jpg",
    message: "Hello there! How are you today?",
  };
  return (
    <div className="w-full p-6 bg-[#fafafa]">
      <div className="flex items-center gap-4 p-4 border-b-2 ">
        {/* User Image */}
        <Image
          src={userm.img}
          height={50}
          width={50}
          alt="User Profile Picture"
          className="rounded-full border border-gray-300"
        />
        <div className="flex-1 font-sans">
          <h1 className="text-xl font-medium text-gray-800 mb-2">
            {userm.name}
          </h1>
          <p className="text-sm text-gray-500">Active 2 hours ago</p>
        </div>
      </div>
      <div className="  mx-auto mt-8 p-4 space-y-4">
        <div>
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
                            "mb-1 p-3 text-white bg-blue-400 rounded-md"
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
                            "mb-1 p-3 text-white bg-yellow-400 rounded-md"
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
