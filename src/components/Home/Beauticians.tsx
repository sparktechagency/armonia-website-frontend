import React from "react";
import BeauticianCart from "../BeauticianCart";

const Beauticians = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}profiles/beauticians?limit=3`,
    {
      next: {
        revalidate: 60,
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  // console.log(data);
  return (
    <section className="py-16 text-center">
      <p className="text-yellow-500">Popular Beautician</p>
      <h3 className="text-3xl lg:text-5xl  font-semibold text-blue-500 font-Playfair_Display">
        Recommended
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 lg:gap-9 px-2  sm:px-6 2xl:px-36 mt-8 md:mt-14">
        {data.data?.map((item: any) => {
          const profile = item.profile;
          let userinfo = { ...item };
          delete userinfo.profile;
          return (
            <BeauticianCart
              key={item.id}
              data={{ ...userinfo, ...profile, profileId: profile.id }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Beauticians;
