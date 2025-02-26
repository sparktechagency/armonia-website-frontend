"use client";
import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { redirect } from "next/navigation";

type User = {
  name: string;
  email: string;
  image: string;
  role: "user" | "beautician" | "admin";
};

type ContextProps = {
  modal: null | ReactNode;
  setModal: Dispatch<SetStateAction<null | ReactNode>>;
  user: null | User;
  setUser: Dispatch<SetStateAction<null | User>>;
  dashboardRoutes: (role: "customer" | "beautician" | "admin") => {
    name: string;
    href: string;
    menu: { name: string; href: string }[];
  }[];
  logout: () => void;
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
  const [modal, setModal] = useState<null | ReactNode>(null);
  const [user, setUser] = useState<null | User>({
    name: "Linda",
    email: "adsf@gmail.com",
    image: "/beautician.jpg",
    role: "beautician",
  });

  function dashboardRoutes(role: "customer" | "beautician" | "admin") {
    return dashboardLinks[role];
  }

  function logout() {
    setUser(null);
    redirect("/");
  }

  return (
    <context.Provider
      value={{
        modal,
        setModal,
        user,
        setUser,
        dashboardRoutes,
        logout,
      }}
    >
      {children}
    </context.Provider>
  );
}
