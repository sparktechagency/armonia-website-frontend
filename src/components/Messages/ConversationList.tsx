"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useConversationsQuery } from "@/redux/features/messages/message.api";
import { debounce } from "@/lib/debounce";
import { TUniObject } from "@/type/index.type";
import { useParams, useRouter } from "next/navigation";
import LoaderWraperComp from "../LoaderWraperComp";
import { context } from "@/app/Context";
import { cn } from "@/lib/utils";

const ConversationList = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [query, setQuery] = useState({ search: "" });
  const [partiId, setPartiId] = useState("");
  // const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const { data, isLoading } = useConversationsQuery([
    { name: "term", value: query.search },
  ]);
  const [online, setOnline] = useState<{ userId?: string; isActive?: false }[]>(
    [
      {
        userId: "",
        isActive: false,
      },
    ]
  );
  const appContext = useContext(context);
  const debounceSearch = debounce((value: string) => {
    setQuery((c) => ({ ...c, search: value }));
  }, 700);

  useEffect(() => {
    if (appContext?.socket) {
      appContext.socket.on(`active-users`, (message) => {
        // console.log(message);
        setOnline((prevOnline) => {
          const existingUser = prevOnline.find(
            (item) => item.userId === message.userId
          );

          if (existingUser) {
            // Update the existing user's isActive status
            return prevOnline.map((user) =>
              user.userId === message.userId
                ? { ...user, isActive: message.isActive }
                : user
            );
          } else {
            // Add new active user
            return [...prevOnline, message];
          }
        });
      });
      return () => {
        appContext?.socket?.off(`active-users`);
      };
    } else return;
  }, [appContext?.socket]);
  useEffect(() => {
    const isParti = online.find((cuser) => cuser.userId === partiId);
    if (isParti) {
      console.log(isParti);
      appContext?.setPartiActive(isParti.isActive as boolean);
    }
  }, [partiId, online]);
  const myData = (data?.data || []).map((element: any) => {
    const activeUser = online.find((user) => user.userId === element.id);
    return { ...element, isActive: activeUser ? activeUser.isActive : false };
  });

  return (
    <div
      className={cn("w-full lg:w-1/3", {
        "hidden lg:block": !!params.id,
      })}
    >
      {/* Search Input */}
      <div className="relative w-full max-w-md mx-auto mt-8 mb-2 px-2">
        <input
          onChange={(e) => debounceSearch(e.target.value)}
          type="text"
          placeholder="Search Names"
          className="w-full py-3 pl-4 pr-12 rounded-3xl hover:border-yellow-500 border outline-none text-black"
        />
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <BiSearch size={22} />
        </div>
      </div>
      <LoaderWraperComp
        isError={false}
        isLoading={isLoading}
        loader={<LoadingContent />}
        dataEmpty={!data?.data?.length}
      >
        <>
          {myData.map((conversation: TUniObject, index: number) => (
            <div
              key={index}
              onLoad={() =>
                setTimeout(() => {
                  if (params?.id === conversation?.conversationId) {
                    // appContext?.setPartiActive(conversation.isActive);
                    setPartiId(conversation?.id);
                  }
                }, 3000)
              }
              className={`text-black px-4 py-2.5 border-b cursor-pointer ${
                params?.id === conversation?.conversationId ? "bg-gray-100" : ""
              }`}
              onClick={() =>
                router.push(
                  `/dashboard/messages/${conversation?.conversationId}`
                )
              }
            >
              <div className="flex items-center gap-4 w-full">
                <Image
                  src={
                    conversation.image
                      ? `${process.env.NEXT_PUBLIC_API_URL}${conversation.image}`
                      : "/profile-demo.png"
                  }
                  alt={conversation.name}
                  width={50}
                  height={50}
                  className="rounded-full overflow-hidden w-[50px] h-[50px] object-cover"
                />
                <div className="flex justify-between items-center w-full gap-3">
                  <div>
                    <h1 className="font-medium text-lg">{conversation.name}</h1>
                    <p className="text-sm text-gray-500">
                      {conversation.lastMsg || "No messages yet!"}
                    </p>
                  </div>
                  <input
                    id={`messageCheckbox-${index}`}
                    type="radio"
                    className=" size-4 accent-lime-400 "
                    checked={conversation.isActive}
                    readOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      </LoaderWraperComp>
    </div>
  );
};

export default ConversationList;

const LoadingContent = () => {
  return (
    <div className="w-full h-full space-y-4 px-2">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="mx-auto w-full max-w-sm p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-none"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
