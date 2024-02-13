import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { services } from "@/constants/Services";
import { SectionWrapper } from "@/hoc";
import { fadeIn } from "@/utils/motion";
import { experiences } from "@/constants/Experiences";
import "react-vertical-timeline-component/style.min.css";

interface Experience {
  date: string;
  iconBg: string;
  icon: StaticImageData;
  company_name: string;
  title: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      
      contentStyle={{
        background: "#5ce1e6",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[18px] font-bold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section className="mt-20 md:mt-40 flex flex-col gap-10">
      <div className="text-[36px] font-extrabold text-center">
        <p>
          Work&nbsp;
          <span className="text-tertiary">Experience</span>
        </p>
      </div>

      <VerticalTimeline animate={true}>
        {experiences.map((experience, idx) => (
          <ExperienceCard key={`experience${idx}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default SectionWrapper(WorkSection, "work");
