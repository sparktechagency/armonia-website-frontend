"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { context } from "../Context";

export default function Sidebar() {
  const appContext = useContext(context);
  const pathname = usePathname();

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname);
  }, []);

  if (!appContext?.user) return null;

  return (
    <aside className="w-1/4 flex flex-col justify-between py-16 text-3xl">
      <div className="flex flex-col gap-3">
        {appContext
          ?.dashboardRoutes(appContext?.user?.role)
          .map(({ name, href, menu }, index) => (
            <div key={index} className="border-r border-blue-500">
              <Link
                href={href}
                onClick={() =>
                  menu.length > 0 ? setActive(menu[0].href) : setActive(href)
                }
              >
                <p
                  className={`transition-all bg-yellow-50 py-4 px-2 ${
                    active === href || menu.some((m) => m.href === active)
                      ? "border-l-[64px] border-blue-500 text-black"
                      : "border-l-[20px] border-yellow-200 hover:border-l-[64px] hover:border-blue-500"
                  }`}
                >
                  {name}
                </p>
              </Link>
              {menu.some((m) => m.href === active) && (
                <ul className="pl-16 flex flex-col gap-1">
                  {menu.map(({ name, href }, index) => (
                    <li
                      key={index}
                      className={`py-2 px-4 transition-all ${
                        active === href
                          ? "bg-blue-500 text-white"
                          : "hover:bg-blue-200 bg-yellow-50"
                      }`}
                    >
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
      <button
        className="w-full pl-5 hover:pl-16 hover:bg-blue-500 transition-all bg-yellow-200"
        onClick={appContext.logout}
      >
        <p className="bg-yellow-50 border-r border-blue-500 p-2 w-full py-4">
          Logout
        </p>
      </button>
    </aside>
  );
}
