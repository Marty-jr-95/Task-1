import { SectionWrapper } from "@/hoc";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { projects } from "@/constants/Projects";
import Image from "next/image";

import { LuExternalLink } from "react-icons/lu";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  iconExternalLinkClassName: any;
}

const PortfolioSection: React.FC = () => {
  const [hoveredProjects, setHoveredProjects] = useState<number[]>([]);

  const handleMouseEnter = (projectId: number) => {
    setHoveredProjects((prevHoveredProjects) => [
      ...prevHoveredProjects,
      projectId,
    ]);
  };

  const handleMouseLeave = (projectId: number) => {
    setHoveredProjects((prevHoveredProjects) =>
      prevHoveredProjects.filter((id) => id !== projectId)
    );
  };

  const isProjectHovered = (projectId: number) => {
    return hoveredProjects.includes(projectId);
  };

  return (
    <section className="bg-secondary mt-40 flex flex-col gap-10 p-8">
      <div className="text-[36px] font-extrabold text-center">
        <p>
          My&nbsp;
          <span className="text-tertiary">Projects</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", "spring", idx * 0.5, 0.75)}
            className="flex flex-col gap-4 md:p-3 rounded-xl"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div className="w-full overflow-hidden rounded-[15px]">
              <div className="relative">
                <Image
                  className="object-contain w-full "
                  alt={project.title}
                  src={project.src}
                />
                {isProjectHovered(idx) && (
                  <div className="absolute inset-0 indigo-gradient rounded-[15px]rounded-[15px] p-8 transition-opacity duration-500">
                    <div className="flex flex-col gap-12">
                      <div className="absolute inset-0 p-3 flex flex-col md:gap-2 text-center">
                        <h3 className="text-xl font-extrabold">
                          {project.title}
                        </h3>
                        <p className="md:text-[18px] font-normal">
                          {project.description}
                        </p>
                      </div>
                      <div className="w-[40px] left-[147px] md:left-[167px] top-[115px] md:top-[135px] h-[40px] rounded-[20px] bg-white absolute flex justify-center items-center">
                        <a
                          target="_blank"
                          href={project.link}
                          className="flex flex-col justify-center items-center text-tertiary font-extrabold"
                        >
                          <LuExternalLink size={22} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(PortfolioSection, "portfolio");
