import { socialLinks } from "@/constants/SocialLinks";
import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-10 md:gap-32 mt-6">
      {/* Map over all Social Links */}
      {socialLinks.map((link, idx) => (
        <a
          className=" hover:border-tertiary hover:border-2 p-2 rounded-full"
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Render Link as JSX Element to avoid errors */}
          {<link.icon className="h-8 w-8" />}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
