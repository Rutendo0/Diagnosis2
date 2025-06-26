
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/images/logo.png" 
      alt="Diagnosis & Sensors Logo" 
      className={`${className} object-contain`}
      style={{ height: "120px", width: "auto", maxWidth: "300px" }}
    />
  );
};

export default Logo;
