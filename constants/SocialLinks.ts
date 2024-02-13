import { IconType } from "react-icons";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


interface SocialLink {
  icon: IconType;
  href: string;
}

// Storing Social Links inside Array
export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    href: "https://github.com/Marty-jr-95",
  },
  {
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/marty-jr-muhanga-745a75205/",
  },
  {
    icon: FaFacebook,
    href: "https://web.facebook.com/marty.muhanga.16",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/hunky.bear95/?igsh=cTZ0bmpibXI4emZ4",
  },
];
