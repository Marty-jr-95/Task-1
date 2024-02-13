import { SocialLinks, ThemedButton } from "@/components";
import { SectionWrapper } from "@/hoc";
import React from "react";
import Typewriter from "typewriter-effect";

import heroImage from "@/public/assets/images/hero-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
const HeroSection: React.FC = () => {
  return (
    <section className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col px-8 md:px-0">
          <div>
            <p className="text-[36px] font-extrabold">Hello It&apos;s Me</p>
            <h1 className="text-[56px] font-extrabold">Marty Muhanga</h1>
            <div className="flex items-center text-[36px] font-extrabold flex-wrap">
              <p>And I&apos;m a</p>&nbsp;
              <span className="type-writer-text">
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack Developer",
                      "UI-UX Designer",
                      "Mentor",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
          <div>
            <p className="text-[20px] font-normal mt-8">
              Exceptionally skilled, driven and seasoned Fullstack Developer
              with a proven track record of delivering high-quality solutions, I
              stand prepared to leverage my expertise to elevate your projects
              to new heights of success!
            </p>
          </div>
          <SocialLinks />

          <ThemedButton
            href="tel:+260975787694"
            title="Get In Touch"
            className="w-[287px] mt-10"
          />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex justify-end mix-blend-multiply mt-10 md:mt-0"
      >
        <Image className="object-contain" src={heroImage} alt="hero-image" />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(HeroSection, "home");
