"use client";
import { useAppSelector } from "@/redux/hook";
import { createContext, use, useEffect, useState } from "react";
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
  partiActive: boolean;
  setPartiActive: React.Dispatch<SetStateAction<boolean>>;
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
    // {
    //   name: "Bookings",
    //   href: "/dashboard/bookings",
    //   menu: [
    {
      name: "Send Request",
      href: "/dashboard/bookings/pending",
      menu: [],
    },
    {
      name: "Booked Services",
      href: "/dashboard/bookings",
      menu: [],
    },
    //   ],
    // },
    { name: "Messages", href: "/dashboard/messages", menu: [] },
    { name: "Notifications", href: "/dashboard/notification", menu: [] },
  ],
  beautician: [
    { name: "Profile", href: "/dashboard/profile", menu: [] },
    // {
    //   name: "Bookings",
    //   href: "/dashboard/bookings",
    //   menu: [
    {
      name: "Confirmed Service",
      href: "/dashboard/bookings",
      menu: [],
    },
    {
      name: "Requested service",
      href: "/dashboard/bookings/pending",
      menu: [],
    },
    //   ],
    // },
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

const myLocation = new Map<string, { latitude: number; longitude: number }>();
export const context = createContext<ContextProps | null>(null);

export function Context({ children }: { children: React.ReactNode }) {
  const { user, token } = useAppSelector((state) => state.auth);
  const [socketData, setSocketData] = useState<null | Socket>(null);
  const [partiActive, setPartiActive] = useState(false);
  const [modal, setModal] = useState<null | ReactNode>(null);
  function dashboardRoutes(role: "customer" | "beautician" | "admin") {
    return dashboardLinks[role];
  }
  const getLocation = (pSocket: Socket) => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const payload: { latitude: number; longitude: number } = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            if (!myLocation.get(user?.id as string)) {
              myLocation.set(user?.id as string, payload);
              pSocket?.emit("update-location", payload);
            }
            if (
              myLocation.get(user?.id as string)?.latitude === payload.latitude
            ) {
              return;
            } else {
              pSocket?.emit("update-location", payload);
            }
          },
          (err) => {
            console.log(`Error: ${err.message}`);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
  useEffect(() => {
    if (user?.type === "beautician" && socketData) {
      const intervalId = setInterval(() => getLocation(socketData), 5000);
      return () => clearInterval(intervalId);
    }
  }, [user]);

  return (
    <context.Provider
      value={{
        partiActive,
        setPartiActive,
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
