import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ProfileHeader from "../components/ProfileHeader";
import ContactCard from "../components/ContactCard";
import ConnectionDiagram from "../components/ConnectionDiagram";
import InteractionFlow from "../components/InteractionFlow";
import StatusFooter from "../components/StatusFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-appear').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Contact card data
  const contacts = [
    {
      name: "Lisa Johnson",
      title: "Senior Financial Advisor",
      email: "lisa.johnson@example.com",
      phone: "(555) 123-4567",
      matchPercentage: 94,
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3",
      reasoningText: "Lisa offers below-market mortgage rates for tech professionals like you. She has pre-approved you for a jumbo loan based on your income profile.",
      delay: "card-animation-delay-1"
    },
    {
      name: "Mark Rodriguez",
      title: "Investment Strategist",
      email: "mark.r@example.com",
      phone: "(555) 234-5678",
      matchPercentage: 87,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3",
      reasoningText: "Mark specializes in technology sector investments which aligns with your portfolio interests. He's helped clients like you achieve 12% annual returns.",
      delay: "card-animation-delay-2"
    },
    {
      name: "Sarah Williams",
      title: "Debt Restructuring Specialist",
      email: "s.williams@example.com",
      phone: "(555) 345-6789",
      matchPercentage: 82,
      profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3",
      reasoningText: "Sarah has extensive experience helping professionals consolidate student loans with mortgage refinancing, similar to your current financial goals.",
      delay: "card-animation-delay-3"
    },
    {
      name: "Priya Patel",
      title: "Mortgage Lending Officer",
      email: "priya.patel@lendingfirst.com",
      phone: "(555) 456-7890",
      matchPercentage: 90,
      profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3",
      reasoningText: "Priya specializes in first-time homebuyer programs and has access to exclusive low-rate offers. She can help you navigate complex mortgage options and secure the best deal for your situation.",
      delay: "card-animation-delay-4"
    },
    {
      name: "David Kim",
      title: "Senior Loan Consultant",
      email: "david.kim@trustloans.com",
      phone: "(555) 567-8901",
      matchPercentage: 85,
      profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3",
      reasoningText: "David has a proven track record helping tech professionals refinance student and personal loans. He offers personalized strategies to lower your monthly payments and improve your credit profile.",
      delay: "card-animation-delay-5"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with NYC Skyline */}
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto pb-20">
        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Contact Cards */}
        <div className="px-4 md:px-8 py-8 overflow-x-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-darkText">Recommended Contacts</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 }
            }}
            navigation
            className="pb-8"
          >
            {contacts.map(contact => (
              <SwiperSlide key={contact.name} className="!flex !justify-center" style={{ minWidth: 320, maxWidth: 340 }}>
                <ContactCard {...contact} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Connection Diagram */}
        <div className="px-4 md:px-8">
          <ConnectionDiagram />
        </div>
        
        {/* Interaction Flow */}
        <div className="px-4 md:px-8">
          <InteractionFlow />
        </div>
      </div>
      
      {/* Status Footer */}
      <StatusFooter />
    </div>
  );
};

export default Index;
