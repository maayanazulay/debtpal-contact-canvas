
import React, { useEffect, useRef } from "react";

const ConnectionDiagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = svgRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        const lines = element.querySelectorAll('.connection-line');
        lines.forEach(line => {
          line.classList.add('animate-draw-line');
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="py-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10 text-darkText">How DebtPal Connects You</h2>
      
      <div className="relative h-[300px] w-full">
        <svg ref={svgRef} className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection lines */}
          <path 
            d="M200 150 L80 80" 
            stroke="#2563eb" 
            strokeWidth="3" 
            strokeLinecap="round" 
            className="connection-line"
          />
          <path 
            d="M200 150 L320 80" 
            stroke="#2563eb" 
            strokeWidth="3" 
            strokeLinecap="round"
            className="connection-line"
          />
          <path 
            d="M200 150 L80 220" 
            stroke="#2563eb" 
            strokeWidth="3" 
            strokeLinecap="round"
            className="connection-line"
          />
          <path 
            d="M200 150 L320 220" 
            stroke="#2563eb" 
            strokeWidth="3" 
            strokeLinecap="round"
            className="connection-line"
          />
          
          {/* Central node - replaced circle with image */}
          <circle cx="200" cy="150" r="30" fill="white" stroke="#2563eb" strokeWidth="2" />
          <image
            href="/lovable-uploads/994fff0d-614c-4167-ba8b-ed4321977530.png"
            x="170"
            y="120"
            height="60"
            width="60"
          />
          
          {/* User nodes */}
          <circle cx="80" cy="80" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" />
          <text x="80" y="85" textAnchor="middle" fill="#1f2937" fontSize="10">James</text>
          
          <circle cx="320" cy="80" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" style={{ animationDelay: '0.5s' }} />
          <text x="320" y="85" textAnchor="middle" fill="#1f2937" fontSize="10">Lisa</text>
          
          <circle cx="80" cy="220" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" style={{ animationDelay: '1s' }} />
          <text x="80" y="225" textAnchor="middle" fill="#1f2937" fontSize="10">Mark</text>
          
          <circle cx="320" cy="220" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" style={{ animationDelay: '1.5s' }} />
          <text x="320" y="225" textAnchor="middle" fill="#1f2937" fontSize="10">Sarah</text>
        </svg>
      </div>
    </div>
  );
};

export default ConnectionDiagram;
