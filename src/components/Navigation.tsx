
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Eligibility', href: '#eligibility-section' },
    { label: 'Why Us', href: '#whyus-section' },
    { label: 'Performance', href: '#performance-section' },
    { label: 'Workflow', href: '#workflow-section' },
    { label: 'Pricing', href: '#pricing-section' },
    { label: 'Case Studies', href: '#case-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Horizontal */}
      <nav className="hidden md:block fixed top-4 right-4 z-50">
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
                className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
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
          <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-lg shadow-lg rounded-xl py-4 px-6 min-w-[200px]">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-lg font-medium text-blue-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
