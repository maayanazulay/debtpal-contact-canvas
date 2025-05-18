
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

interface ContactCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  matchPercentage: number;
  profileImage: string;
  reasoningText: string;
  delay: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  email,
  phone,
  matchPercentage,
  profileImage,
  reasoningText,
  delay
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 card-hover opacity-0 animate-fade-in ${delay}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src={profileImage} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-darkText">{name}</h3>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
        <div className="bg-success/10 text-success font-medium text-sm py-1 px-3 rounded-full">
          {matchPercentage}% Match
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Mail size={16} className="text-primary" />
          <span className="text-sm">{email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Phone size={16} className="text-primary" />
          <span className="text-sm">{phone}</span>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-gray-700 font-medium mb-2"
        >
          <span>Why I get this contact</span>
          <svg 
            className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40' : 'max-h-0'}`}>
          <p className="text-gray-600 text-sm">
            {reasoningText}
          </p>
          <a href="#" className="text-primary text-sm font-medium mt-2 inline-block hover:underline">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
