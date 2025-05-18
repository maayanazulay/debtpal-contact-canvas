
import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-6 py-8 px-4 md:px-8 max-w-6xl mx-auto opacity-0 animate-fade-in">
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="James profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-darkText">James gets New Contact Suggestions</h2>
        <p className="text-gray-600 mt-1">DebtPal has found professionals who match your financial interests</p>
      </div>
      <div className="flex-shrink-0 w-16 h-16 hidden md:block">
        <img 
          src="/lovable-uploads/994fff0d-614c-4167-ba8b-ed4321977530.png"
          alt="DebtPal icon" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
