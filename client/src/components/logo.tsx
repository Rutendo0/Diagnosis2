export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg 
        viewBox="0 0 200 60" 
        className="h-10 w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gear/Cog Icon */}
        <g transform="translate(10, 15)">
          <circle cx="15" cy="15" r="8" fill="#ff6b35" stroke="#1e3a8a" strokeWidth="2"/>
          <circle cx="15" cy="15" r="4" fill="#1e3a8a"/>
          <rect x="13" y="5" width="4" height="4" fill="#1e3a8a"/>
          <rect x="13" y="21" width="4" height="4" fill="#1e3a8a"/>
          <rect x="5" y="13" width="4" height="4" fill="#1e3a8a"/>
          <rect x="21" y="13" width="4" height="4" fill="#1e3a8a"/>
          <text x="35" y="12" fill="#1e3a8a" fontSize="8" fontWeight="bold">Check Engine</text>
          <text x="35" y="20" fill="#ff6b35" fontSize="6">Light On?</text>
        </g>
        
        {/* Company Name */}
        <text x="110" y="25" fill="#1e3a8a" fontSize="16" fontWeight="bold">Diagnosis & Sensors</text>
        <text x="110" y="40" fill="#ff6b35" fontSize="10">The best solution to your automotive.</text>
      </svg>
    </div>
  );
}