"use client";

import { useEffect, useRef, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { supportedLanguages } from "@/constants/language.contants";
import { IoLanguage } from "react-icons/io5";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // When the component has initialized, we must activate the translation engine the following way.
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue, let's take a current language from the predefined defaultLanguage below.
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
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

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // The following function switches the current language
  const switchLanguage = (lang: string) => {
    // We just need to set the related cookie and reload the page
    // "/auto/" prefix is Google's definition as far as a cookie name
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
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
