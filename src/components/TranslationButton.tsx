"use client";

import React from "react";
import { useTranslation } from "react-google-multi-lang";

const TranslationButton = () => {
  const { setLanguage } = useTranslation();

  return (
    <div>
      <button className="mx-4 py-2 active:bg-red-300" onClick={() => setLanguage("en")}>English</button>
      <button className="mx-4 py-2 active:bg-red-300" onClick={() => setLanguage("es")}>Spanish</button>
      <button className="mx-4 py-2 active:bg-red-300" onClick={() => setLanguage("fr")}>French</button>
    </div>
  );
};

export default TranslationButton;
