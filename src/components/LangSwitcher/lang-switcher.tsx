"use client";
import Cookies from "js-cookie";
// Extend the global object to include __GOOGLE_TRANSLATION_CONFIG__
declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__?: {
      defaultLanguage: string;
    };
  }
}

import { useEffect, useRef, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { supportedLanguages } from "@/constants/language.contants";
import { IoLanguage } from "react-icons/io5";

// Google Translation Cookie Name
const COOKIE_NAME = "googtrans";

const LanguageSwitcher: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  const [languageConfig, setLanguageConfig] = useState<Record<
    string,
    any
  > | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookie = cookies[COOKIE_NAME];
    let languageValue: string | undefined;
    if (window.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      if (existingLanguageCookie) {
        const sp = existingLanguageCookie.split("/");
        if (sp.length > 2) {
          languageValue = sp[2];
        }
      }
    }

    if (window.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    // Cookies.remove("googtrans");
    // console.log(lang)
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    window.location.reload();
  };

  return (
    <div className="relative text-center notranslate">
      {/* Toggle Dropdown */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-0.5 lg:p-1.5 lg:border"
      >
        <IoLanguage className="size-4 lg:size-5" />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-2 min-w-44 bg-white rounded-sm shadow-md z-10"
        >
          {supportedLanguages.map((ld) => (
            <button
              key={ld.name}
              onClick={() => switchLanguage(ld.name)}
              className="flex items-center gap-x-2 py-2 px-4 w-full text-left hover:bg-gray-200 transition"
            >
              {/* <Image src={ld.icon} alt={ld.title} height={22} width={22} className="rounded-lg" /> */}
              {ld.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
