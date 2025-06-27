
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex items-center">
      <img 
        src="/images/logo.png" 
        alt="Diagnosis & Sensors Logo" 
        className={`${className} object-contain h-12 w-auto filter drop-shadow-md`}
        style={{ 
          maxHeight: "48px", 
          width: "auto",
          objectFit: "contain",
          objectPosition: "center"
        }}
      />
    </div>
  );
};

export default Logo;
