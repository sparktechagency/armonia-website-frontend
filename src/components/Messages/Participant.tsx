import { TUniObject } from "@/type/index.type";
import React from "react";

const Participant = () => {
    // console.log(user)
  return (
    <div className="flex items-center gap-4 px-4 pb-2 border-b">
      {/* User Image */}
      {/* <Image
          src={
            conversation.participants[0].image
              ? `${process.env.NEXT_PUBLIC_API_URL}${conversation.participants[0].image}`
              : "/profile-demo.png"
          }
          height={50}
          width={50}
          alt="User Profile Picture"
          className="rounded-full border border-gray-300"
        /> */}
      <div className="flex-1 font-sans">
        <h1 className="text-xl font-medium text-gray-800 mb-2">
          {"userm.name"}
        </h1>
        <p className="text-sm text-gray-500">Active 2 hours ago</p>
      </div>
    </div>
  );
};

export default Participant;
