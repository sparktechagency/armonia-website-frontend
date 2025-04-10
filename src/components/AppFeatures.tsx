import Image from "next/image";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "/icons/Time.svg", // Make sure these icons exist in the public/icons folder
    title: "Flexible Hours",
    description:
      "Beauty on your time. Enjoy early mornings, evenings, or weekend appointments—no rushing, no rescheduling.",
  },
  {
    icon: "/icons/Convenience.svg",
    title: "Stress-Free Convenience",
    description:
      "No traffic, no parking, no childcare juggling. We come to you, so you can fully relax in the comfort of your villa or home.",
  },
  {
    icon: "/icons/Frame.svg",
    title: "Top-Tier Professionals",
    description:
      "Our therapists and beauty experts are hand-selected for skill, discretion, and excellence—so every treatment feels five-star.",
  },
];

 const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h4 className="text-sm tracking-widest uppercase text-gray-500 mb-2">
        Benefits
      </h4>
      <h2 className="text-3xl font-serif font-semibold mb-12">
        What you'll love
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
