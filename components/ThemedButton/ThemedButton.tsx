import React from "react";

interface ThemedButtonProps {
  href: string;
  title: string;
  className: string;
  target?: string;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ href, title, className, target }) => {
  return (
    <a
      href={href}
    target={target}
      className={`bg-tertiary rounded-lg font-extrabold text-[24px] text-white py-2 text-center ${className}`}
    >
      {title}
    </a>
  );
};

export default ThemedButton;
