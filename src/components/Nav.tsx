"use client";
import { createElement, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Register from "./Register";
import Login from "./Login";
import { context } from "@/app/Context";
import { redirect, usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/redux/features/auth/authSlice";
import { sweetAlertConfirmation } from "@/lib/alert";
import { IoNotifications } from "react-icons/io5";
import { cn, timeAgo } from "@/lib/utils";
import { LanguageSwitcher } from "./LangSwitcher/lang-switcher";

export default function Nav() {
  const path = usePathname();
  const notificationRef = useRef<HTMLDivElement>(null);
  const { user } = useAppSelector((state) => state.auth);
  const [notificationPopup, setNotificationPopup] = useState(false);
  // const { data } = useUnreadNoticeQuery([]);
  // useEffect(() => {
  //   // notification popup
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       notificationRef.current &&
  //       !notificationRef.current.contains(event.target as Node)
  //     ) {
  //       setNotificationPopup(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  const links = [
    { name: "Home", href: "/" },
    { name: "Beauticians", href: "/beauticians" },
    { name: "Contact Us", href: "/contact" },
  ];

  const appContext = useContext(context);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);

  useEffect(() => {
    links.forEach(({ name, href }) => {
      if (path === href) {
        setActive(name);
      }
    });
  }, []);
  useEffect(() => {
    setOpen(false);
    setNotificationPopup(false);
  }, [path]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  const dispath = useAppDispatch();
  const handleLogout = () => {
    dispath(logout());
    // dispath(.util.invalidateTags(["Profile"]));
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
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
        <LanguageSwitcher />
        <button
          onClick={() => setOpen((c) => !c)}
          className="lg:hidden outline-none"
        >
          {createElement(open ? MdOutlineClose : GiHamburgerMenu, { size: 22 })}
          {/* {open ?  <MdOutlineClose size={22} /> : <GiHamburgerMenu size={22} />} */}
        </button>
        <div
          className={`flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-24 text-lg fixed lg:static bg-white lg:bg-none px-3 lg:px-0 pt-28 lg:pt-0 w-4/5 lg:w-auto h-screen lg:h-auto top-0 -z-10 ${
            open ? "right-0" : "-right-full"
          } transition-all duration-500`}
        >
          {links.map(({ href, name }, index) => (
            <Link
              key={index}
              href={href}
              onClick={() => {
                setOpen(false);
                setActive(name);
              }}
              className={`p-3 bg-white w-full rounded-lg lg:w-auto lg:bg-transparent lg:p-0 lg:hover:text-yellow-300 lg:transition-all ${
                active === name ? "text-yellow-500" : "text-blue-500"
              }`}
            >
              {name}
            </Link>
          ))}
          {user?.email ? (
            <div
              className="flex items-center gap-2.5 relative cursor-pointer"
              onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
            >
              {/* <div
                onClick={() => setNotificationPopup(true)}
                className="relative"
              >
                <IoNotifications className="size-[22px] lg:size-7  text-heading overflow-hidden text-slate-500" />
                <div
                  className={cn(
                    "bg-green-500 absolute -top-0.5 right-0 size-2 rounded-full"
                  )}
                />
              </div> */}
              <Image
                src={
                  user?.image
                    ? `${process.env.NEXT_PUBLIC_API_URL}${user.image}`
                    : "/profile-demo.png"
                }
                alt={user?.name}
                width={50}
                height={50}
                className="rounded-full overflow-hidden min-w-[50px] w-[50px] h-[50px] object-cover"
              />
              <p className="font-semibold">{user?.name}</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={dashboardMenuOpen ? "rotate-180" : ""}
              >
                <path
                  d="M5.83366 8.33333L10.0003 12.5L14.167 8.33333"
                  stroke="#142F62"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`absolute w-full bg-white shadow-md top-16 text-base font-normal overflow-hidden transition-all ${
                  dashboardMenuOpen ? "h-auto" : "h-0"
                }`}
              >
                {appContext
                  ?.dashboardRoutes(user?.type)
                  .map(({ name, href }, index) => (
                    <Link key={index} href={href}>
                      <p className="p-2 hover:bg-slate-200">{name}</p>
                    </Link>
                  ))}
                <div
                  className="p-2 hover:bg-slate-200 cursor-pointer"
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
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Button
                className="px-3 rounded"
                paddingY={2}
                gradientBorder
                openModalOnClick={<Login />}
              >
                Login
              </Button>
              <Button
                className="px-3 rounded"
                paddingY={2}
                openModalOnClick={<Register />}
              >
                Signup
              </Button>
            </div>
          )}
        </div>
      </nav>
      {!!notificationPopup && (
        <div
          ref={notificationRef}
          className={
            "absolute top-24 right-0 bg-white shadow-lg border border-gray-50 rounded-md px-3 py-4 max-w-[400px] w-fit"
          }
        >
          <div>
            {/* {data?.data?.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 px-[14px] py-2 cursor-pointer hover:bg-gray-100 transition-all"
              >
                <IoIosNotificationsOutline
                  // style={{ cursor: "pointer" }}
                  className={`border border-white min-w-[40px] min-h-[40px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
                />
                <div className="">
                  <h6 className="line-clamp-1">{item.msg}</h6>
                  <small className="text-[11px] text-gray-500">
                    {timeAgo(item.createdAt)}
                  </small>
                </div>
              </div>
            ))} */}
            fdsfsdf sdjlkfj sklda s 
             fdaklfjdskalfj <aside> fskl'dj </aside>
          </div>
          {/* <div className="w-fit mx-auto mt-4">
            <Button
              onClick={(e) => navigate("notifications")}
              style={{ background: "#FFD05E", color: "white" }}
              size="middle"
              type="primary"
              className="w-40"
            >
              See More
            </Button>
          </div> */}
        </div>
      )}
    </>
  );
}
