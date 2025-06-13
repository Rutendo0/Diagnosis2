export default function Logo({ className = "h-auto w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Exact logo recreation from your brand image */}
      <svg width="240" height="60" viewBox="0 0 240 60" className="h-12 w-auto">
        {/* Gear Icon */}
        <g transform="translate(8, 8)">
          {/* Blue gear outer ring */}
          <circle cx="22" cy="22" r="20" fill="none" stroke="#2B4F97" strokeWidth="6"/>
          {/* Gear teeth - simplified representation */}
          <g fill="#2B4F97">
            <rect x="20" y="2" width="4" height="6"/>
            <rect x="20" y="36" width="4" height="6"/>
            <rect x="2" y="20" width="6" height="4"/>
            <rect x="36" y="20" width="6" height="4"/>
            <rect x="32" y="6" width="4" height="4" transform="rotate(45 34 8)"/>
            <rect x="32" y="34" width="4" height="4" transform="rotate(-45 34 36)"/>
            <rect x="8" y="6" width="4" height="4" transform="rotate(-45 10 8)"/>
            <rect x="8" y="34" width="4" height="4" transform="rotate(45 10 36)"/>
          </g>
          {/* Orange center with white text */}
          <circle cx="22" cy="22" r="15" fill="#F97316"/>
          <text x="22" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Is Your</text>
          <text x="22" y="26" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Check Engine</text>
          <text x="22" y="34" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Light On?</text>
        </g>
        
        {/* Main Title */}
        <text x="70" y="28" fill="#2B4F97" fontSize="28" fontWeight="900" fontFamily="Arial, sans-serif">
          Diagnosis &amp; Sensors
        </text>
        
        {/* Orange tagline background */}
        <rect x="70" y="35" width="160" height="18" fill="#F97316" rx="2"/>
        <text x="75" y="47" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">
          The best solution to your automotive.
        </text>
      </svg>
    </div>
  );
}