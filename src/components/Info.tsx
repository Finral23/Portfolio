import { useState } from "react";
import ButtonExpand from "./ButtonExpand";

const accordionData = [
  {
    number: "01",
    title: "Discovery & Strategy",
    content:
      "Every great website starts with a strong foundation. We take the time to understand your business, your audience, and your goals...",
  },
  {
    number: "02",
    title: "UI/UX Design",
    content:
      "We focus on crafting intuitive and visually appealing experiences that enhance user engagement and satisfaction.",
  },
  {
    number: "03",
    title: "Development & Implementation",
    content:
      "From front-end to back-end development, we ensure a seamless and scalable implementation of your project.",
  },
  {
    number: "04",
    title: "Testing, Launch & Support",
    content:
      "We conduct rigorous testing to ensure quality, followed by a smooth launch and ongoing support for success.",
  },
];

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-white py-16 px-4 mx-auto min-h-screen">
      <p className="text-l font-light text-blue-500">Our Agency</p>
      <h2 className="text-5xl font-bold border-b border-blue-500 pb-4">
        WHY CHOOSE US?
      </h2>
      <div className="">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-blue-500 overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="text-6xl font-bold text-white/20">
                  {item.number}
                </span>
                <div className="text-start">
                  <span className="text-3xl font-light">{item.title}</span>
                  {openIndex === index && (
                    <div className="py-2 text-gray-300">{item.content}</div>
                  )}
                </div>
              </div>
              <span className="text-2xl">
                {openIndex === index ? (
                  <ButtonExpand>-</ButtonExpand>
                ) : (
                  <ButtonExpand>+</ButtonExpand>
                )}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
