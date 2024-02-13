import { IconType } from "react-icons";
import { FaPaintbrush, FaCode } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
interface Service {
  icon: IconType;
  title: string;
  description: string;
}

// Storing Social Links inside Array
export const services: Service[] = [
  {
    icon: FaPaintbrush,
    title: "UI-UX Design",
    description:
      "Crafting Exceptional UI/UX Designs to Elevate User Experiences: Transforming Vision into Seamless Interaction. Specializing in Intuitive Design Solutions Tailored to Your Audience's Needs.",
  },
  {
    icon: FaCode,
    title: "Fullstack Development",
    description:
      "Unleashing the Full Potential of Your Projects with Fullstack Development Excellence: Seamlessly Transforming Your Innovative Ideas into Dynamic, Scalable, and Future-Ready Digital Solutions.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Mentorship",
    description:
      "Unlock Your Full Potential: Elevate Your Skills and Achieve Success with Personalized Expert Mentoring Services Tailored Just for You.",
  },
];
