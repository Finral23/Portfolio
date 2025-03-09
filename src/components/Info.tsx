import { useState } from "react";
import ButtonExpand from "./ButtonExpand";
import { motion, AnimatePresence } from "motion/react";
import Heading from "./Heading";

const accordionData = [
  {
    number: "01",
    title: "Discovery & Strategy",
    content:
      "Every great website starts with a strong foundation. We take the time to understand your business, your audience, and your goals. Through in-depth consultations and market research, we identify opportunities that will set your project apart. This stage helps us create a clear roadmap, ensuring that every step aligns with your vision and delivers real results.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    content:
      "A website should be more than just visually appealing—it should provide a seamless user experience. Our designers craft intuitive and engaging interfaces that reflect your brand identity. Every detail is carefully considered, from the color palette to user interactions. Before moving to development, we share interactive prototypes so you can experience the design firsthand and provide feedback.",
  },
  {
    number: "03",
    title: "Development & Implementation",
    content:
      "Turning vision into reality, our developers build fast, secure, and scalable websites using the latest technologies like React and Node.js. We ensure smooth functionality, optimize for speed, and implement best SEO practices to help your website rank higher. Every line of code is written with performance and security in mind, creating a website that is both powerful and future-proof.",
  },
  {
    number: "04",
    title: "Testing, Launch & Support",
    content:
      "Before your website goes live, we run extensive tests to ensure it performs flawlessly across all devices and browsers. Our team carefully checks for speed, responsiveness, and overall user experience. Once everything is polished, we handle a smooth deployment process, ensuring no downtime. Even after launch, we offer ongoing support and updates, keeping your website running at its best.",
  },
];

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-200">
      <Heading title="Our Agency" heading="why choose us?" />
      <div className="border-b-2 border-blue-900" />
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            className="border-b-2 border-blue-900 overflow-hidden relative"
          >
            {/* Background image */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key={`glow-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-glow"
                />
              )}
            </AnimatePresence>
            {/* All info */}
            <motion.div
              className="flex h-[200px] lg:h-auto"
              initial={{ height: "auto" }}
              animate={{
                height: isOpen
                  ? window.innerWidth < 768
                    ? "auto"
                    : 300
                  : window.innerWidth < 768
                  ? "auto"
                  : 300,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Number */}
              <motion.span
                className="info-numeration text-[150px] md:text-[30rem] flex-none w-[70px] md:w-[220px] flex items-center md:items-start"
                transition={{ duration: 0.5 }}
              >
                {item.number}
              </motion.span>
              {/* Title and text */}
              <motion.div
                className="h-[100%] pl-4"
                initial={{
                  alignSelf:
                    window.innerWidth < 768 ? "flex-start" : "flex-end",
                  y: window.innerHeight < 768 ? "75%" : "75%",
                }}
                animate={{
                  alignSelf: isOpen
                    ? window.innerWidth < 768
                      ? "flex-start"
                      : "flex-start"
                    : window.innerWidth < 768
                    ? ""
                    : "flex-end",
                  y: isOpen
                    ? window.innerWidth < 768
                      ? 0
                      : 0
                    : window.innerWidth < 768
                    ? "0"
                    : "75%",
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Title */}
                <motion.span
                  className="text-2xl md:text-3xl lg:text-5xl font-light text-balance"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title}
                </motion.span>
                {/* Block with text */}
                <motion.div
                  className="overflow-hidden text-gray-200 text-xs md:text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Text */}
                  <div className="max-w-[90%] md:max-w-[60%] pt-2">
                    {item.content}
                  </div>
                </motion.div>
              </motion.div>
              {/* Button */}
              <motion.span
                className="text-2xl h-[100%] pt-2"
                initial={{
                  alignSelf: window.innerWidth < 768 ? "flex-end" : "flex-end",
                  y: window.innerWidth < 768 ? "75%" : "75%",
                  // alignSelf: "flex-end", y: "75%"
                }}
                animate={{
                  alignSelf: isOpen
                    ? window.innerWidth < 768
                      ? "flex-start"
                      : "flex-start"
                    : window.innerWidth < 768
                    ? ""
                    : "flex-end",
                  y: isOpen
                    ? window.innerWidth < 768
                      ? 1
                      : 1
                    : window.innerWidth < 768
                    ? 0
                    : "75%",

                  // alignSelf: isOpen ? "flex-start" : "flex-end",
                  // y: isOpen ? 1 : "75%",
                }}
                transition={{ duration: 0.5 }}
              >
                <ButtonExpand onExpandItem={() => toggleAccordion(index)}>
                  {isOpen ? "–" : "+"}
                </ButtonExpand>
              </motion.span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Info;
