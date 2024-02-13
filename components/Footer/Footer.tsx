"use client";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { contacts } from "@/constants/Contacts";
import { fadeIn } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";
import { SectionWrapper } from "@/hoc";

interface ImageCardProps {
  src: StaticImageData;
  alt: string;
  index: number;
  link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, index, link }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      <a className="overflow-hidden" target="_blank" href={link}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <Image className="h-9" src={src} alt={alt} />
        </Tilt>
      </a>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto h-[80px] rounded-2xl bg-[#5ce1e6]  w-full flex flex-wrap items-center justify-center gap-5">
      <span className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        Contact:{" "}
      </span>
      {contacts.map((contact, index) => (
        <ImageCard
          key={index}
          src={contact.src}
          alt={contact.src}
          index={index}
          link={contact.link}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Footer, "");
