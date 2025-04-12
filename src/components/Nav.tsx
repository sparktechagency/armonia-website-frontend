/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { createElement, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Register from "./Register";
import Login from "./Login";
import { context } from "@/app/Context";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/redux/features/auth/authSlice";
import { sweetAlertConfirmation } from "@/lib/alert";
import { LanguageSwitcher } from "./LangSwitcher/lang-switcher";
import { FaChevronDown } from "react-icons/fa";
import { useUnreadNoticeQuery } from "@/redux/features/notification/notification.api";
import { cn } from "@/lib/utils";

export default function Nav() {
  const path = usePathname();
  const searchParams = useSearchParams();
  const appContext = useContext(context);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const { user } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const loginForword = searchParams.get("redirect");
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);
  const { data: unreadNotification } = useUnreadNoticeQuery([]);
  const links = [
    { name: "Home", href: "/" },
    { name: "Beauticians", href: "/beauticians" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];
  useEffect(() => {
    links.forEach(({ name, href }) => {
      if (path === href) {
        setActive(name);
      }
    });
    // profile menu popup
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setDashboardMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setOpen(false);
    setDashboardMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  useEffect(() => {
    if (loginForword) {
      return appContext?.setModal(
        <Login forword={loginForword?.split("_").join("/")} />
      );
    }
  }, []);
  const dispath = useAppDispatch();
  const handleLogout = () => {
    dispath(logout());
    redirect("/");
  };
  return (
    <>
      <nav
        className={`px-3 xl:px-36 py-4 flex items-center justify-between top-0 bg-white shadow-lg z-50 sticky`}
      >
        <Link href="/" onClick={() => setActive("Home")}>
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={32}
            // style={{
            //   maxWidth: "100%",
            //   height: "auto",
            // }}
            className="w-[98%] lg:w-[100%]"
          />
        </Link>
        <div className="flex items-center justify-end gap-2.5 lg:gap-0 relative">
          <div
            className={`fixed lg:static lg:h-auto top-0 -z-10 lg:z-0 bg-white lg:bg-none pt-20 md:pt-28 lg:pt-0 w-4/5 lg:w-auto h-screen  ${
              open ? "right-0" : "-right-full"
            } transition-all duration-500`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-2.5 lg:gap-8 2xl:gap-12 text-lg relative px-3">
              {links.map(({ href, name }, index) => (
                <Link
                  key={index}
                  href={href}
                  onClick={() => {
                    setOpen(false);
                    setActive(name);
                  }}
                  className={` bg-white text-base lg:text-lg w-full rounded-lg lg:w-auto lg:bg-transparent pl-4 lg:p-0 lg:hover:text-yellow-300 lg:transition-all ${
                    active === name ? "text-yellow-500" : "text-blue-500"
                  }`}
                >
                  {name}
                </Link>
              ))}
              {user?.email ? (
                <div
                  onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
                  className="flex items-center gap-2.5 relative cursor-pointer select-none order-first lg:order-none"
                >
                  <Image
                    src={
                      user?.image
                        ? `${process.env.NEXT_PUBLIC_API_URL}${user.image}`
                        : "/profile-demo.png"
                    }
                    alt={user?.name}
                    width={50}
                    height={50}
                    className="rounded-full overflow-hidden min-w-[50px] w-[50px] h-[50px] object-cover border"
                  />
                  <p className="font-semibold">{user?.name}</p>
                  <FaChevronDown
                    className={
                      dashboardMenuOpen
                        ? "rotate-180 size-3 lg:size-3.5 mt-1"
                        : "size-3 hidden lg:block lg:size-3.5 mt-1.5"
                    }
                  />
                  <div
                    className={cn(
                      "absolute bg-lime-500 h-3.5 w-3.5 rounded-full top-0 left-0 overflow-hidden flex items-center justify-center text-[8px] font-semibold text-white",
                      {
                        "h-0 w-0":
                          !unreadNotification?.data?.totalUnreadNotification,
                      }
                    )}
                  >
                    {unreadNotification?.data?.totalUnreadNotification}
                  </div>
                </div>
              ) : (
                <div className="w-fit h-fit flex flex-col lg:flex-row justify-center lg:items-center gap-3 lg:gap-5 px-3 lg:px-0">
                  <Button
                    className="px-3 rounded"
                    paddingY={0}
                    gradientBorder
                    openModalOnClick={<Login />}
                  >
                    Login
                  </Button>
                  <Button
                    className="px-3 rounded"
                    paddingY={0}
                    openModalOnClick={<Register />}
                  >
                    Signup
                  </Button>
                </div>
              )}
              {user?.email && (
                <div
                  ref={profileMenuRef}
                  className={`min-w-44 w-fit lg:absolute right-0 top-16 lg:shadow-md bg-white text-base font-normal overflow-hidden ${
                    dashboardMenuOpen
                      ? "h-auto lg:shadow-md lg:border lg:border-t-0 border-yellow-50"
                      : "h-auto lg:h-0"
                  }`}
                >
                  {appContext
                    ?.dashboardRoutes(user?.type)
                    .map(({ name, href }, index) => (
                      <Link key={index} href={href}>
                        <p className="p-2 pl-4 pr-4 lg:text-lg hover:bg-slate-200">
                          {name}
                        </p>
                      </Link>
                    ))}
                  <div
                    className="p-2 pl-4 lg:text-lg hover:bg-slate-200 cursor-pointer pb-4"
                    onClick={() =>
                      sweetAlertConfirmation({
                        func: handleLogout,
                        object: "Logout",
                        okay: "Logout",
                      })
                    }
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((c) => !c)}
            className="lg:hidden outline-none"
          >
            {createElement(open ? MdOutlineClose : GiHamburgerMenu, {
              size: 22,
            })}
          </button>
        </div>
      </nav>
    </>
  );
}
