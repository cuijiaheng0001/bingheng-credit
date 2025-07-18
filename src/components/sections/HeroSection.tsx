import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative h-[85vh] sm:min-h-screen flex items-center justify-center bg-brand-gradient bg-opacity-90 text-white">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1,1 l1,0 l0,1 l-1,0 l0,-1 z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
      <div className="container max-w-4xl mx-auto px-6 text-center pt-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          China Debt Collection for U.S. Creditors
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-200">
          5-day legal action • 70% contact rate • 25% recovery
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onContactClick}
            size="lg" 
            className="text-lg px-8 py-4 bg-white text-[#2A3470] hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.03] active:scale-95"
          >
            Start Recovery
          </Button>
        </div>
      </div>
    </section>
  );
};