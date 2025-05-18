
import React, { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const ConnectionDiagram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        const elements = element.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
          el.classList.add('visible');
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
      
      <div 
        ref={containerRef}
        className="relative h-[500px] w-full flex items-center justify-center overflow-hidden"
      >
        {/* Main diagram container with the robot in center */}
        <div className="relative w-[300px] h-[300px] animate-on-scroll opacity-0 transition-all duration-1000 delay-300">
          {/* Central Robot Avatar */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-[120px] h-[120px] rounded-full bg-sky-400 flex items-center justify-center animate-pulse">
              <img 
                src="/lovable-uploads/994fff0d-614c-4167-ba8b-ed4321977530.png"
                alt="DebtPal Bot" 
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          </div>
          
          {/* Circular path */}
          <div className="absolute left-0 top-0 w-full h-full rounded-full border-4 border-white/30 animate-on-scroll opacity-0 transition-all duration-1000"></div>
          
          {/* Top profile */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-500">
            <div className="relative">
              <Avatar className="w-16 h-16 border-2 border-orange-500 animate-float">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3" alt="James" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
              <span className="font-medium text-sm">James</span>
            </div>
            <svg className="absolute top-[60px] left-4 w-8 h-16 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" className="animate-draw-line"></path>
            </svg>
          </div>
          
          {/* Bottom profile */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-700">
            <div className="relative">
              <Avatar className="w-16 h-16 border-2 border-orange-500 animate-float" style={{ animationDelay: '1s' }}>
                <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Sarah" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-2 whitespace-nowrap">
              <span className="font-medium text-sm">Sarah</span>
            </div>
            <svg className="absolute bottom-[60px] left-4 w-8 h-16 text-white/70 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" className="animate-draw-line"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-on-scroll {
          transform: translateY(20px);
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw 1.5s ease-in-out forwards;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ConnectionDiagram;
