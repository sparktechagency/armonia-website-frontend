"use client";

// Extend the global object to include __GOOGLE_TRANSLATION_CONFIG__
declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__?: {
      defaultLanguage: string;
    };
  }
}

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { supportedLanguages } from "@/constants/language.contants";

// Google Translation Cookie Name
const COOKIE_NAME = "googtrans";




const LanguageSwitcher: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  const [languageConfig, setLanguageConfig] = useState<Record<string, any> | null>(null);
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

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    window.location.reload();
  };

  return (
    <div className="relative text-center notranslate">
      {/* Toggle Dropdown */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-x-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      >
        {/* <Image
          src={flags[currentLanguage]?.flag || usaFlag}
          alt={flags[currentLanguage]?.title || "Language"}
          height={32}
          width={32}
          className="rounded-lg"
        /> */}
        Dropdown
        {/* <Icon icon="icon-park-solid:down-one" width="18px" height="18px" /> */}
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          {supportedLanguages.map((ld) => (
            <button
              key={ld.name}
              onClick={() => switchLanguage(ld.name)}
              className="flex items-center gap-x-2 p-2 w-full text-left hover:bg-gray-200 transition"
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