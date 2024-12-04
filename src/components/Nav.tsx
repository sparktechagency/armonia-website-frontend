"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Nav() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Beauticians", href: "/beauticians" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

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

  const isLogin = false;

  return (
    <nav className="px-6 lg:px-36 py-4 flex items-center justify-between sticky top-0 bg-white shadow-lg z-50">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={32} />
      </Link>
      {open ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 20"
          className="w-8 h-8 cursor-pointer lg:hidden"
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
          className="w-8 h-8 cursor-pointer lg:hidden"
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
        {isLogin ? (
          <Link href="/profile" onClick={() => setOpen(false)}>
            <Image
              src="/avatar.png"
              alt="avatar"
              width={50}
              height={50}
              className="rounded-full overflow-hidden"
            />
          </Link>
        ) : (
          <div className="flex items-center gap-5">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button className="px-6 rounded" paddingY={12} gradientBorder>
                Login
              </Button>
            </Link>
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button className="px-6 rounded" paddingY={12}>
                Signup
              </Button>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
