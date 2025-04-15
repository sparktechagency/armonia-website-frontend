// components/AccordionComponent.tsx
"use client";
import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-200"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className={`transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 5l7 7 7-7z" />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div
          className="p-4 bg-gray-100 text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
};

const AccordionComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 space-y-8 md:space-y-0">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/threpist.jpeg"
          alt="Your Image"
          className="w-full h-auto object-cover rounded-lg p-4 md:p-24"
          height={500}
          width={500}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-8">
          ✨ Our Therapists{" "}
        </h1>
        <h1 className="text-2xl font-bold  mb-8"> You’re in expert hands </h1>

        <p className="text-lg mb-6">
          At Armonia, we believe that true luxury begins with trust, discretion,
          and skill. Our beauty and wellness professionals are carefully
          hand-selected for their talent, professionalism, and experience in
          delivering five-star treatments. Many of our therapists have worked in
          world-class spas, luxury resorts, private villas, and on exclusive
          destination weddings across Europe{" "}
        </p>

        <AccordionItem
          title="🧪 A Vetting Process You Can Trust"
          content={`
         <h2 class="font-bold text-lg"> Each Armonia therapist goes through a rigorous multi-step selection process. We conduct:</h2>
          <ul class="list-disc list-inside">
            <li>In-person trials and technical assessments</li>
            <li>Professional reference and certification checks </li>
            <li>Ongoing performance reviews and client feedback evaluations </li>
          </ul>
            <p class="mt-4">Only the top 5% of applicants are invited to join our platform. </p>
        `}
        />
        <AccordionItem
          title="🌸 Working with Leading Brands "
          content={`Our therapists are trained in (and often work with) premium beauty and wellness brands — including Environ, OPI, Essie, Purple and Urban. This ensures that every service meets the high standards expected by our clientele.`}
        />

        <AccordionItem
          title=" 🛡️ Certified, Discreet, Safe "
          content="We only work with therapists who meet the highest standards of professional conduct and hygiene. Every team member provides a clear background check (equivalent to DBS) and is trained in luxury in-home etiquette, so you can feel completely comfortable welcoming them into your space. "
        />
        <AccordionItem
          title="💼 Empowering Independent Talent "
          content="At Armonia, we proudly collaborate with a growing collective of exceptional freelance beauty professionals. Many are talented women who have honed their craft in luxury spas, wellness retreats, and private settings. By choosing Armonia, you’re not only indulging in premium at-home services — you're supporting skilled artisans in building thriving, flexible careers on their own terms."
        />
      </div>
    </div>
  );
};

export default AccordionComponent;
