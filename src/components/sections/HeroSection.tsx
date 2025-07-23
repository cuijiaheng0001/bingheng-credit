import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Award, Users } from "lucide-react";

interface HeroSectionProps {
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact }) => {
  return (
    <section className="relative h-[85vh] sm:min-h-screen flex items-center justify-center bg-brand-gradient bg-opacity-90 text-white">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1,1 l1,0 l0,1 l-1,0 l0,-1 z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
      <div className="container max-w-4xl mx-auto px-6 text-center pt-10 relative z-10">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          China Debt Collection for U.S. Creditors
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 text-blue-200">
          5-day legal action • 70% contact rate • 25% recovery
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={onScrollToContact}
            size="lg" 
            className="text-lg px-10 py-6 bg-white text-[#2A3470] hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.03] active:scale-95 shadow-xl font-bold"
          >
            Start Recovery Now
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-semibold">Licensed PRC Lawyers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold">500+ Successful Cases</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold">No Cure, No Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
};