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
          <defs>
            <clipPath id="circle-james">
              <circle cx="80" cy="80" r="25" />
            </clipPath>
            <clipPath id="circle-lisa">
              <circle cx="320" cy="80" r="25" />
            </clipPath>
            <clipPath id="circle-mark">
              <circle cx="80" cy="220" r="25" />
            </clipPath>
            <clipPath id="circle-sarah">
              <circle cx="320" cy="220" r="25" />
            </clipPath>
          </defs>
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
          
          {/* User nodes with images */}
          {/* James */}
          <circle cx="80" cy="80" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" />
          <image
            href="https://placehold.co/50x50"
            x="55"
            y="55"
            height="50"
            width="50"
            clipPath="url(#circle-james)"
            style={{ pointerEvents: 'none' }}
          />
          <text x="80" y="85" textAnchor="middle" fill="#1f2937" fontSize="10">James</text>
          {/* Lisa */}
          <circle cx="320" cy="80" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" style={{ animationDelay: '0.5s' }} />
          <image
            href="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
            x="295"
            y="55"
            height="50"
            width="50"
            clipPath="url(#circle-lisa)"
            style={{ pointerEvents: 'none' }}
          />
          <text x="320" y="85" textAnchor="middle" fill="#1f2937" fontSize="10">Lisa</text>
          {/* Mark */}
          <circle cx="80" cy="220" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" style={{ animationDelay: '1s' }} />
          <image
            href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
            x="55"
            y="195"
            height="50"
            width="50"
            clipPath="url(#circle-mark)"
            style={{ pointerEvents: 'none' }}
          />
          <text x="80" y="225" textAnchor="middle" fill="#1f2937" fontSize="10">Mark</text>
          {/* Sarah */}
          <circle cx="320" cy="220" r="25" fill="white" stroke="#2563eb" strokeWidth="2" className="animate-float" style={{ animationDelay: '1.5s' }} />
          <image
            href="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3"
            x="295"
            y="195"
            height="50"
            width="50"
            clipPath="url(#circle-sarah)"
            style={{ pointerEvents: 'none' }}
          />
          <text x="320" y="225" textAnchor="middle" fill="#1f2937" fontSize="10">Sarah</text>
        </svg>
      </div>
    </div>
  );
};

export default ConnectionDiagram;
