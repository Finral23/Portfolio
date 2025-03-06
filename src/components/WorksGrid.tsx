import { motion } from "framer-motion";
import GlowButton from "./GlowButton";

const projects = [
  {
    title: "Site of Luxury hotel",
    image: "/hotel.png",
    link: "#",
    size: "half",
  },
  {
    title: "Movie Ticket Booking",
    image: "/cinema.png",
    link: "#",
    size: "full",
  },
  {
    title: "WebStore",
    image: "/pants.png",
    link: "#",
    size: "half",
  },
];

function WorksGrid() {
  return (
    <div className="">
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-3 h-[700px] my-5">
        <div className="flex flex-col gap-6">
          {projects
            .filter((p) => p.size === "half")
            .map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                className="relative block overflow-hidden rounded-2xl border-2 border-blue-500 flex-1"
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="absolute flex justify-between bottom-4 left-4 right-4 text-light  bg-neutral-900/30 backdrop-blur-lg rounded-3xl p-5">
                  <p className="text-lg font-extralight">{project.title}</p>
                  <p className="text-2xl">→</p>
                </div>
              </motion.a>
            ))}
        </div>

        <div className="h-full">
          {projects
            .filter((p) => p.size === "full")
            .map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                className="relative block overflow-hidden rounded-2xl border-2 border-blue-500 h-full"
              >
                <div className="relative w-full h-full overflow-hidden ">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="absolute flex justify-between bottom-4 left-4 right-4 text-light rounded-3xl bg-neutral-900/30 backdrop-blur-lg p-5">
                  <p className="text-lg font-extralight ">{project.title}</p>
                  <p className="text-2xl relative z-10">→</p>
                </div>
              </motion.a>
            ))}
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <GlowButton>View More →</GlowButton>
      </div>
    </div>
  );
}

export default WorksGrid;
