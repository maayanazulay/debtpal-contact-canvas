import React, { useState } from "react";
import { Mail, Phone, Info } from "lucide-react";

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
    <div
      className={`bg-white rounded-xl shadow-md p-6 card-hover opacity-0 animate-fade-in ${delay} flex flex-col w-[320px] min-h-[280px] max-w-full transition-all hover:shadow-lg focus-within:shadow-lg hover:-translate-y-1 focus-within:-translate-y-1`} 
      style={{ minWidth: 280, maxWidth: 340 }}
      tabIndex={0}
    >
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
              <img src={profileImage} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg md:text-xl text-darkText leading-tight">{name}</h3>
                <button
                  className="bg-success/10 text-success font-medium text-xs py-0.5 px-2 rounded-full focus:outline-none focus:ring-2 focus:ring-success/40 transition hover:bg-success/20 flex items-center gap-1 ml-1"
                  type="button"
                  // onClick for popover/tooltip to be added
                >
                  {matchPercentage}% Match
                  <Info size={14} className="ml-1" />
                </button>
              </div>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-tight">{title}</p>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="space-y-2 mb-2">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail size={16} className="text-primary" />
            <a href={`mailto:${email}`} className="text-sm md:text-base hover:underline focus:outline-none focus:underline">{email}</a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={16} className="text-primary" />
            <a href={`tel:${phone.replace(/[^\d]/g, "")}`} className="text-sm md:text-base hover:underline focus:outline-none focus:underline">{phone}</a>
          </div>
        </div>
      </div>
      {/* Reasoning Section */}
      <div className="border-t pt-4 mt-2 mt-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-gray-700 font-medium mb-2 focus:outline-none focus:underline"
          aria-expanded={isExpanded}
          aria-controls={`reasoning-${name.replace(/\s/g, "-")}`}
          type="button"
        >
          <span>Why I get this contact</span>
          <svg
            className={`ml-2 w-4 h-4 transition-transform duration-300 self-center ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          id={`reasoning-${name.replace(/\s/g, "-")}`}
          className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40' : 'max-h-0'} pl-1`}
        >
          <p className="text-gray-600 text-sm md:text-base">
            {reasoningText}
          </p>
          <button
            className="text-primary text-sm font-medium mt-2 inline-block hover:underline focus:outline-none focus:underline"
            onClick={() => setIsExpanded(true)}
            type="button"
            tabIndex={isExpanded ? -1 : 0}
            aria-hidden={isExpanded}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
