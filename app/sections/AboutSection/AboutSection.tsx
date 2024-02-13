import Image from "next/image";
import React from "react";

import aboutImage from "@/public/assets/images/about-image.png";
import { ThemedButton } from "@/components";
import { SectionWrapper } from "@/hoc";

import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motion";

const AboutSection: React.FC = () => {
  return (
    <motion.section
      variants={fadeIn("", "spring", 0.5, 0.7)}
      className="bg-secondary mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-2 px-10 py-16 items-center overflow-hidden"
    >
      <div className="flex justify-start mb-10 md:mb-0">
        <Image className="object-contain" src={aboutImage} alt="about-image" />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[36px] font-extrabold">
            About <span className="text-tertiary">Me</span>
          </p>
          <div className="flex items-center text-[24px] font-extrabold">
            <p>Fullstack Developer</p>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-normal">
            Exceptionally skilled and driven, this seasoned Fullstack Developer,
            boasting over 2 years of hands-on experience, shines brightly in the
            realms of React, Angular, Next.js, Node.js, Express.js, and Tailwind
            CSS. With a proven track record of delivering high-quality
            solutions, I stand prepared to leverage my expertise to elevate your
            projects to new heights of success!
          </p>
        </div>
        <ThemedButton
          href="https://drive.google.com/file/d/1jznVAclsAPVTtdP-3Ah3XhTsSIQn28jS/view"
          target="_blank"
          title="Download CV"
          className="w-[287px] mt-8"
        />
      </div>
    </motion.section>
  );
};

export default SectionWrapper(AboutSection, "about");
