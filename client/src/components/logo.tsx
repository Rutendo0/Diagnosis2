
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/images/logo.png" 
      alt="Logo" 
      className={className}
      style={{ height: "100px", width: "auto" }}
    />
  );
};

export default Logo;
