'use client'

import Image from 'next/image'

export default function FounderSection() {
  return (
    <section className="bg-yellow-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-center font-semibold text-gray-900 mb-12">
          Meet Isabela – Founder of Armonia Beauty Concierge
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/profile/izabella.png"
              alt="Founder"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Founder Message */}
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl italic font-serif text-gray-700 leading-relaxed mb-8">
              “Armonia was born from a dream—a dream to create more than just
              beauty appointments, but meaningful moments of care, elegance, and
              connection. My name is Isabela, and I started Armonia after spending
              over the past five years working in beauty salons in Portugal.
              Originally from Romania, I moved to Dublin in my very early
              twenties, where I studied, trained, worked, and built meaningful
              connections and expertise within the service industry. I learned
              early on what people truly crave—especially in a fast-paced world—is
              not just to look good, but to feel seen, valued, and genuinely cared
              for. When I moved to the Algarve, I was instantly captivated by its
              natural beauty and the effortless elegance of its lifestyle.
              Surrounded by luxury resorts, serene coastlines, and breathtaking
              villas, I saw a unique opportunity—to blend the convenience of
              mobile services with the quality of a five-star spa, and the privacy
              and calm of a truly personal experience. And so, Armonia was born.
              “Armonia” means harmony—and that’s exactly what I wanted to offer.
              Harmony between work and life. Between inner peace and outer beauty.
              Between high-end professionalism and the warmth of personal care.
              Today, I lead a growing team of exceptional freelance professionals
              who share the same values: passion, trust, kindness, and excellence.
              Together, we serve clients across the Golden Triangle and beyond,
              delivering beauty and wellness services that feel effortlessly
              personal. Armonia has changed my life—and I hope it brings something
              truly special to yours, too. With love.”
            </p>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
              Isabela
            </h3>
            <h4 className="text-xl font-serif text-gray-700">
              Founder of Armonia Concierge
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
