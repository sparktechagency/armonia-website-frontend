"use client";
import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type ContextProps = {
  modal: null | ReactNode;
  setModal: Dispatch<SetStateAction<null | ReactNode>>;
};

export const context = createContext<ContextProps | null>(null);

export function Context({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<null | ReactNode>(null);

  return (
    <context.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </context.Provider>
  );
}
