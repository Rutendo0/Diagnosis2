
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/images/logo.png" 
      alt="Diagnosis & Sensors Logo" 
      className={`${className} object-contain max-h-full w-auto`}
      style={{ maxWidth: "10%", height: "auto" }}
    />
  );
};

export default Logo;
