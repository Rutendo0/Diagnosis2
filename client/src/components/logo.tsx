export default function Logo({ className = "h-auto w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo matching the provided brand image */}
      <svg width="880" height="120" viewBox="0 0 880 120" className="h-16 w-auto">
        {/* Gear Icon */}
        <g transform="translate(15, 15)">
          {/* Blue gear with teeth */}
          <g fill="#2B4F97">
            {/* Main gear circle */}
            <circle cx="45" cy="45" r="42" fill="#2B4F97"/>
            {/* Gear teeth around the perimeter */}
            <rect x="43" y="0" width="4" height="12"/>
            <rect x="43" y="78" width="4" height="12"/>
            <rect x="0" y="43" width="12" height="4"/>
            <rect x="78" y="43" width="12" height="4"/>
            <rect x="67" y="12" width="8" height="4" transform="rotate(45 71 14)"/>
            <rect x="67" y="74" width="8" height="4" transform="rotate(-45 71 76)"/>
            <rect x="15" y="12" width="8" height="4" transform="rotate(-45 19 14)"/>
            <rect x="15" y="74" width="8" height="4" transform="rotate(45 19 76)"/>
            <rect x="73" y="27" width="4" height="8" transform="rotate(22.5 75 31)"/>
            <rect x="73" y="55" width="4" height="8" transform="rotate(-22.5 75 59)"/>
            <rect x="13" y="27" width="4" height="8" transform="rotate(-22.5 15 31)"/>
            <rect x="13" y="55" width="4" height="8" transform="rotate(22.5 15 59)"/>
          </g>
          
          {/* Orange center with white text */}
          <circle cx="45" cy="45" r="32" fill="#F97316"/>
          <text x="45" y="36" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">Is Your</text>
          <text x="45" y="48" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">Check Engine</text>
          <text x="45" y="60" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">Light On?</text>
        </g>
        
        {/* Main Title - Diagnosis & Sensors */}
        <text x="140" y="55" fill="#2B4F97" fontSize="48" fontWeight="900" fontFamily="Arial, sans-serif">
          Diagnosis &amp; Sensors
        </text>
        
        {/* Orange tagline background */}
        <rect x="140" y="70" width="580" height="32" fill="#F97316" rx="4"/>
        <text x="150" y="92" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">
          The best solution to your automotive.
        </text>
      </svg>
    </div>
  );
}