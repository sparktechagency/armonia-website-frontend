"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Register from "./Register";
import Login from "./Login";
import { context } from "@/app/Context";
import { redirect } from "next/navigation";

export default function Nav() {
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
    const path = window.location.pathname;

    links.forEach(({ name, href }) => {
      if (path === href) {
        setActive(name);
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
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
      {open ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="w-7 h-7 cursor-pointer lg:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(false)}
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="#2B2A2A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="w-7 h-7 cursor-pointer lg:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(true)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
            fill="#2B2A2A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
            fill="#2B2A2A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z"
            fill="#2B2A2A"
          />
        </svg>
      )}
      <ul
        className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-24 text-lg fixed lg:static bg-white lg:bg-none px-3 lg:px-0 pt-28 lg:pt-0 w-4/5 lg:w-auto h-screen lg:h-auto top-0 -z-10 ${
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
        {appContext?.user ? (
          <div
            className="flex items-center gap-2 relative cursor-pointer"
            onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
          >
            <Image
              src={appContext.user.image}
              alt={appContext.user.name}
              width={50}
              height={50}
              className="rounded-full overflow-hidden min-w-[50px] w-[50px] h-[50px] object-cover"
            />
            <p className="font-semibold">{appContext.user.name}</p>
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
            <ul
              className={`absolute w-full bg-white top-16 text-base font-normal overflow-hidden transition-all ${
                dashboardMenuOpen ? "h-auto" : "h-0"
              }`}
            >
              {appContext
                .dashboardRoutes(appContext.user.role)
                .map(({ name, href }, index) => (
                  <Link key={index} href={href}>
                    <li className="p-2 hover:bg-slate-200">{name}</li>
                  </Link>
                ))}
              <li
                className="p-2 hover:bg-slate-200 cursor-pointer"
                onClick={appContext.logout}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Button
              className="px-3 rounded"
              paddingY={12}
              gradientBorder
              openModalOnClick={<Login />}
            >
              Login
            </Button>
            <Button
              className="px-3 rounded"
              paddingY={12}
              openModalOnClick={<Register />}
            >
              Signup
            </Button>
          </div>
        )}
      </ul>
    </nav>
  );
}
