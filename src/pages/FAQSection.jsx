import { useState } from "react";

// Process Steps Data
const processSteps = [
  {
    phase: "Phase 1 / 3",
    title: "Design",
    description:
      "In the design conception phase, we present a tailored homepage design. Through Figma, you can collaborate with us and share your feedback.",
  },
  {
    phase: "Phase 2 / 3",
    title: "Site Design",
    description:
      "Once approved, the full site design phase begins in which the cohesive web pages are created in Figma, ensuring consistency and flow.",
  },
  {
    phase: "Phase 3 / 3",
    title: "Interactivity",
    description:
      "In the design interactivity phase, we present a tailored homepage design. Through Figma, you can collaborate with us and share your feedback.",
  },
];

// FAQ Data
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "On average, a website can take anywhere from 4–8 weeks depending on the size, functionality, and revisions required.",
  },
  {
    question: "What is the cost of a web design project?",
    answer:
      "The cost varies depending on the scope of work. After understanding your requirements, we’ll provide a transparent estimate.",
  },
  {
    question:
      "Will I retain full ownership of the design, development, and code?",
    answer:
      "Yes, upon project completion, you retain full ownership of all design, code, and assets.",
  },
  {
    question: "What is the process for feedback, revisions, and approvals?",
    answer:
      "We use collaborative tools like Figma and structured feedback rounds to ensure smooth revisions and approvals.",
  },
  {
    question: "What ongoing support or maintenance do you offer after launch?",
    answer:
      "We provide ongoing support plans that cover updates, security patches, and feature enhancements.",
  },
  {
    question: "Will the website be mobile-friendly and responsive?",
    answer: "Yes, all our websites are fully responsive across devices.",
  },
  {
    question: "Can I easily update the content myself?",
    answer:
      "Yes, we use CMS platforms like WordPress or headless CMS options, enabling you to update content easily.",
  },
  {
    question: "Will my website be optimised for search engines?",
    answer:
      "Yes, SEO best practices are implemented during development to help your website rank better.",
  },
];

// Accordion Component
function Accordion({ faq, isOpen, onClick }) {
  return (
    <div className="py-3">
      <button onClick={onClick} className="flex w-full text-left gap-3">
        {/* Fixed width for icon so layout doesn’t break */}
        <span className="w-5 text-2xl leading-none font-light">
          {isOpen ? "−" : "+"}
        </span>
        <span className="text-base flex-1">{faq.question}</span>
      </button>
      {isOpen && (
        <div className="mt-2 pl-8 text-gray-600 text-sm">{faq.answer}</div>
      )}
    </div>
  );
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      {/* Our Process */}
      <section>
        <h2 className="text-sm uppercase tracking-widest text-gray-500">
          What We Do Best
        </h2>
        <h1 className="text-3xl mt-2 mb-10">Our Process</h1>
        {/* grid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((step, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm text-gray-400">{step.phase}</h3>
              <h2 className="text-3xl">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col md:flex-row md:justify-between md:gap-44 gap-8">
        {/* left title */}
        <h2 className="text-2xl">Frequently Asked Questions</h2>

        {/* right questions */}
        <div className="flex-1">
          {faqs.map((faq, idx) => (
            <Accordion
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
