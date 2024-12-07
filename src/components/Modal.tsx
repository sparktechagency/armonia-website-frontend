"use client";
import { useContext, useEffect } from "react";
import { context } from "@/app/Context";

export default function Modal() {
  const appContext = useContext(context);

  useEffect(() => {
    document.body.style.overflow = appContext?.modal ? "hidden" : "auto";
  }, [appContext?.modal]);

  if (!appContext?.modal || !appContext?.setModal) return null;

  return (
    <section
      className="w-screen h-screen bg-[#0000004d] fixed top-0 left-0 z-50 flex items-center justify-center"
      onClick={() => appContext.setModal(null)} // Close modal when clicking outside
    >
      <div
        className="max-h-[90%] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent event from bubbling to the parent
      >
        {appContext.modal}
      </div>
    </section>
  );
}
