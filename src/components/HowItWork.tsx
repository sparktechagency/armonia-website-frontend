import Image from "next/image";

interface Step {
  id: number;
  image: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    image: "/banners/banner1.png",
    title: "Explore Our Trusted Experts",
    description: "Browse our carefully curated network of elite freelance professionals, hand-vetted for their experience, professionalism, and client care.",
  },
  {
    id: 2,
    image: "/banners/banner2.png",
    title: "Book at Your Convenience",
    description: "Choose your preferred therapist and select a time that fits effortlessly into your schedule—directly through our website or booking platform.",
  },
  {
    id: 3,
    image: "/banners/banner3.png",
    title: "Relax in Your Own Space",
    description: "Your therapist will arrive fully equipped, bringing everything needed to transform your villa or home into a private wellness retreat. No travel. No stress. Just time for you.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 text-center bg-white">
      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        How It Works
      </h4>
      <h2 className="text-3xl font-serif font-semibold mb-14">
      Luxury treatments, on your time—seamless, personal, and delivered to you.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {steps.map((step) => (
          <div key={step.id} className="bg-yellow-50">
            <div className="relative w-full h-72 lg:h-80">
              <Image
                src={step.image}
                alt={step.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-3 left-4 text-5xl font-serif text-yellow-400 font-medium z-10">
                {step.id}
              </span>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold font-serif mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
