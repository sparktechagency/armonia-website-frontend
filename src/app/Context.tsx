"use client";
import { useAppSelector } from "@/redux/hook";
import { createContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { io, Socket } from "socket.io-client";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
type ContextProps = {
  socket: null | Socket;
  modal: null | ReactNode;
  setModal: Dispatch<SetStateAction<null | ReactNode>>;
  dashboardRoutes: (role: "customer" | "beautician" | "admin") => {
    name: string;
    href: string;
    menu: { name: string; href: string }[];
  }[];
};

const dashboardLinks: {
  [key in "customer" | "beautician" | "admin"]: {
    name: string;
    href: string;
    menu: { name: string; href: string }[];
  }[];
} = {
  customer: [
    { name: "Profile", href: "/dashboard/profile", menu: [] },
    {
      name: "Bookings",
      href: "/dashboard/bookings",
      menu: [
        {
          name: "Send Request",
          href: "/dashboard/bookings/pending",
        },
        {
          name: "Booked Services",
          href: "/dashboard/bookings",
        },
      ],
    },
    { name: "Messages", href: "/dashboard/messages", menu: [] },
    { name: "Notifications", href: "/dashboard/notification", menu: [] },
  ],
  beautician: [
    { name: "Profile", href: "/dashboard/profile", menu: [] },
    {
      name: "Bookings",
      href: "/dashboard/bookings",
      menu: [
        {
          name: "Confirmed Service",
          href: "/dashboard/bookings",
        },
        {
          name: "Requested service",
          href: "/dashboard/bookings/pending",
        },
      ],
    },
    { name: "Messages", href: "/dashboard/messages", menu: [] },
    { name: "Reviews", href: "/dashboard/reviews", menu: [] },
    { name: "My Services", href: "/dashboard/services", menu: [] },
    { name: "Earning", href: "/dashboard/earning", menu: [] },
    { name: "Notifications", href: "/dashboard/notification", menu: [] },
  ],
  admin: [
    { name: "Dashboard", href: "/dashboard", menu: [] },
    { name: "Users", href: "/dashboard/users", menu: [] },
    { name: "Beauticians", href: "/dashboard/beauticians", menu: [] },
    { name: "Services", href: "/dashboard/services", menu: [] },
    { name: "Bookings", href: "/dashboard/bookings", menu: [] },
    { name: "Messages", href: "/dashboard/messages", menu: [] },
  ],
};

export const context = createContext<ContextProps | null>(null);

export function Context({ children }: { children: React.ReactNode }) {
  const { token } = useAppSelector((state) => state.auth);
  const [socketData, setSocketData] = useState<null | Socket>(null);
  const [modal, setModal] = useState<null | ReactNode>(null);
  function dashboardRoutes(role: "customer" | "beautician" | "admin") {
    return dashboardLinks[role];
  }
  useEffect(() => {
    if (token) {
      const connectedSocket = io(`${apiUrl}`, {
        transports: ["websocket"],
        // extraHeaders: {
        //   Authorization: `Bearer ${token}`,
        // },
        query: {
          token,
        },
      });
      if (connectedSocket) setSocketData(connectedSocket);
      return () => {
        connectedSocket.disconnect();
      };
    }
  }, [token]);
  return (
    <context.Provider
      value={{
        socket: socketData,
        modal,
        setModal,
        dashboardRoutes,
      }}
    >
      {children}
    </context.Provider>
  );
}
