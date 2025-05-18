
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
          transform: `translateY(${offset * 0.3}px)`,
          backgroundPosition: `center ${50 + (offset * 0.05)}%`
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            DebtPal Contact Suggestions
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Connect with financial professionals who can help you achieve your goals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
