"use client";
// import { useRouter } from "next/router";

export default function MapPage() {
  //   const router = useRouter();
  const lat = 39.013740;
  const lng = -95.688979;

  return (
    <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl h-96">
        <iframe
          title="Dynamic Google Map"
          className="w-full min-h-full h-full rounded-lg"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFi80uuJIWkkLCpodFa8oXmD8XD_h8LMc&q=${lat},${lng}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
