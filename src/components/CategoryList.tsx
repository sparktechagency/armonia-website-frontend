// components/ServiceGrid.tsx
'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import { useServicesQuery } from '@/redux/features/services/services.api'
import { useCategoriesQuery } from '@/redux/features/category/category.api'

const ServiceGrid = () => {
  const [page, setPage] = useState(1)
 const { data, isLoading ,error} = useCategoriesQuery(undefined,{
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading services</div>
  console.log(data.data)

  return (
    <div className="container mx-auto px-6 py-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.data?.map((service:any) => (
            <SwiperSlide key={service.name}>
              <Link href={`/services/${service.name}`} passHref>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${service?.image}`}
                    alt={service.name}
                    className="object-cover w-full h-[250px] group-hover:opacity-80 transition duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h2 className="text-3xl font-bold text-white">{service.name}</h2>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

    
    </div>
  )
}

export default ServiceGrid
