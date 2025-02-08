"use client"
import { TranslationProvider } from "react-google-multi-lang";

export default function MultiLangProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <TranslationProvider
          apiKey={"AIzaSyBqEbe6am3CZPnsPCwGDXDrsSZ8N-Kxx18"}
          defaultLanguage="fr"
        >
            {children}
        </TranslationProvider>
      </>
    );
  }