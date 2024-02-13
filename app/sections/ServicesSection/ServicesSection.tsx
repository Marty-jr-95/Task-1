import { services } from "@/constants/Services";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Tilt } from "react-tilt";

const ServicesSection: React.FC = () => {
  return (
    <section className="mt-40 flex flex-col gap-10">
      <div className="text-[36px] font-extrabold text-center">
        <p>
          Offered&nbsp;
          <span className="text-tertiary">Services</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <motion.div
            variants={fadeIn("right", "spring", idx * 0.5, 0.75)}
            key={idx}
            className="bg-secondary flex flex-col gap-4 p-8 rounded-xl hover:border-4 border-tertiary"
          >
            <div className="flex justify-center">
              {<service.icon size={42} className="text-tertiary" />}
            </div>
            <div className="flex justify-center">
              <p className="text-[24px] font-extrabold">{service.title}</p>
            </div>
            <div className="flex justify-center">
              <p className="text-[20px] font-normal text-center">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(ServicesSection, "services");
