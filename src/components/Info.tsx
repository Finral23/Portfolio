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
    <div className="text-gray-200 py-16 px-4 mx-auto">
      <Heading title="OUR AGENCY" heading="WHY CHOOSE US?" />
      <div className="border-b border-blue-500" />
      <div>
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ height: 300 }}
              animate={{ height: isOpen ? 380 : 230 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border-b border-blue-500 overflow-hidden relative"
            >
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

              <motion.div
                className="flex justify-between w-full items-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-6 items-center">
                  <motion.span
                    className="info-numeration text-[180px]"
                    initial={{ y: 40, opacity: 0.7 }}
                    animate={{ y: isOpen ? 0 : 40, opacity: isOpen ? 1 : 0.7 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.number}
                  </motion.span>

                  <motion.div
                    className="text-start"
                    initial={{ y: 80 }}
                    animate={{ y: isOpen ? -70 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-5xl font-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.title}
                    </motion.span>

                    <motion.div
                      className="overflow-hidden text-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? "auto" : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="py-2 max-w-[60%]">{item.content}</div>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.span
                  className="text-2xl"
                  initial={{ y: 0 }}
                  animate={{ y: isOpen ? -150 : 0 }}
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
    </div>
  );
};

export default Info;
