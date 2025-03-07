import Heading from "./Heading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";

const reviews = [
  {
    text: "Working with this team was an absolute pleasure! They took our vision and turned it into a stunning, high-performance website that exceeded all expectations. From the sleek UI/UX design to the seamless functionality, every detail was meticulously crafted. Communication was always clear, deadlines were met without issues, and the final result truly speaks for itself. If you're looking for top-notch web development with a modern touch, this is the team to trust. Highly recommended!",
    author: "Dmytro Manov",
    role: "Publisher at Mars",
    image: "/Dima.png",
  },
  {
    text: "Our experience with this team was outstanding! From the very beginning, they listened carefully to our needs and delivered a website that perfectly matched our brand identity. The level of attention to detail, responsiveness, and dedication to excellence was beyond anything we expected. The site runs smoothly, loads fast, and looks absolutely stunning on all devices. If you're looking for a skilled and passionate team, look no further!",
    author: "Roman Jambo",
    role: "Founder of Big Tasty",
    image: "/Roman.png",
  },
  {
    text: "From start to finish, this was one of the best collaborations we've had. The team not only created an aesthetically pleasing and functional website but also provided invaluable strategic insights to improve our online presence. Their ability to combine technical expertise with creativity made all the difference. We’ve seen a noticeable boost in engagement and conversions since the launch. Simply top-tier professionals!",
    author: "Michael Chveckson",
    role: "CEO at MonoBank",
    image: "/Michael.png",
  },
];

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction * 100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: -direction * 100,
  }),
};

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [parent] = useAutoAnimate();

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="my-5">
      <Heading title="Reviews" heading="our clients say" />
      <div className="border-y-2 border-blue-900 p-10 relative bg-glow">
        <button
          className="absolute text-light opacity-50 left-0.5 top-1/2 -translate-y-1/2 w-50 h-[100%] flex items-center justify-start transition z-10"
          onClick={prevSlide}
        >
          <TbChevronCompactLeft size={70} />
        </button>
        <div className="max-w-2xl mx-auto text-center space-y-6 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={reviews[index].author}
              ref={parent}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-light">{reviews[index].text}</p>
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={reviews[index].image}
                  alt={reviews[index].author}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <p className="text-lg font-semibold text-light">
                  {reviews[index].author}
                </p>
                <p className="text-sm text-gray-400">{reviews[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className="absolute text-light opacity-50 right-0.5 top-1/2 -translate-y-1/2 w-50 h-[100%] flex items-center justify-end transition z-10"
          onClick={nextSlide}
        >
          <TbChevronCompactRight size={70} />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`rounded-full ${
              i === index ? "bg-slate-200 w-3 h-3" : "bg-gray-600 w-2 h-2"
            }`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
