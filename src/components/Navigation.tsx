
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Why Us', href: '#whyus-section' },
    { label: 'What We Collect', href: '#eligibility-section' },
    { label: 'Performance', href: '#performance-section' },
    { label: 'Compliance', href: '#compliance-section' },
    { label: 'FAQ', href: '#faq-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Navigation Container */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[#2A3470] h-16 shadow-md">
        <div className="container mx-auto h-full flex items-center justify-between px-6">
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

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-white hover:text-blue-200 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Us Button - Right */}
          <div className="hidden lg:block">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-[#2A3470] hover:bg-blue-50 font-semibold px-6 py-2"
            >
              Start Recovery
            </Button>
          </div>

          {/* Mobile Navigation - Right */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 p-3"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <div className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-xl py-4 px-6 min-w-[200px]">
                <div className="flex flex-col space-y-3">
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
                  <hr className="my-2" />
                   <Button 
                     onClick={scrollToContact}
                     className="bg-[#2A3470] text-white hover:bg-[#1A2450] font-semibold px-4 py-2 w-full"
                   >
                     Start Recovery
                   </Button>
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
