
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Eligibility', href: '#eligibility-section' },
    { label: 'Why Us', href: '#whyus-section' },
    { label: 'Performance', href: '#performance-section' },
    { label: 'Compliance & Security', href: '#compliance-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Navigation Container */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[#2A3470] h-16 shadow-md">
        <div className="relative w-full h-full flex items-center justify-between px-4">
          {/* Logo Section - Left */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="cursor-pointer"
          >
            <img
              src="/lovable-uploads/a1f3c6e0-6384-44b0-9452-4265b6e94671.png"
              alt="Bingheng Credit"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:block">
            <div className="bg-white/95 backdrop-blur-lg shadow-lg rounded-xl px-6 py-3">
              <div className="flex items-center space-x-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-sm font-medium text-[#2A3470] hover:text-[#1A2450] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Navigation - Right */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/95 backdrop-blur-lg shadow-lg rounded-xl"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <div className="absolute top-full right-4 mt-2 bg-white/95 backdrop-blur-lg shadow-lg rounded-xl py-4 px-6 min-w-[200px]">
                <div className="flex flex-col space-y-3">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="text-lg font-medium text-[#2A3470] hover:text-[#1A2450] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
