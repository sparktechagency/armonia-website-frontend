"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoaderWraperComp from "./LoaderWraperComp";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServiceGrid = () => {
  const router = useRouter();
  const [clickAble, setClickAble] = useState(true);
  const { data, isLoading, isError } = useCategoriesQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    Infinity: true,
    draggable: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleNavigate = () => {
    setTimeout(() => setClickAble(false), 90);
  };

  return (
    <div className="container mx-auto py-16 relative">
      <LoaderWraperComp
        isLoading={isLoading}
        isError={isError}
        dataEmpty={data?.data?.length < 1}
        className="h-[200px]"
      >
        <div className="px-6">
          <Slider {...settings}>
            {data?.data?.map((service: any) => (
              <div
                key={service.name}
                className="px-2 lg:px-4 cursor-pointer"
                onMouseDown={handleNavigate}
                onMouseUp={() => {
                  // console.log(clickAble);
                  if (clickAble) {
                    router.push(`/services/${service.name}`);
                  } else {
                    setClickAble(true);
                  }
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${service?.image}`}
                    alt={service.name}
                    height={1000}
                    width={1000}
                    className="object-cover w-full h-[250px] group-hover:opacity-80 transition duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h2 className="text-3xl font-bold text-white notranslate">
                      {service.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </LoaderWraperComp>
    </div>
  );
};

export default ServiceGrid;

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -left-4 xl:-left-7 transform -translate-y-1/2 text-black/70 drop-shadow-md cursor-pointer z-10"
    >
      <FaChevronLeft className="size-3 md:size-4 xl:size-5 bg-white/30 rounded-md" />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-5 xl:-right-7 transform -translate-y-1/2 text-black/70 drop-shadow-md cursor-pointer z-10"
    >
      <FaChevronRight className="size-3 md:size-4 xl:size-5 bg-white/30 rounded-md" />
    </div>
  );
}
