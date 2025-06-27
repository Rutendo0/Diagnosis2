
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
      style={{ height: "130px", width: "auto", maxWidth: "200px" }}
    />
  );
};

export default Logo;
