import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Bingheng Credit</h3>
            <p className="text-sm text-blue-100">
              Professional debt collection services specializing in recovering debts from Chinese nationals for U.S. creditors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#whyus-section" className="text-blue-100 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#performance-section" className="text-blue-100 hover:text-white transition-colors">
                  Our Performance
                </a>
              </li>
              <li>
                <a href="#faq-section" className="text-blue-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact-section" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal & Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/trust" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Trust Center
                </Link>
              </li>
              <li>
                <a href="mailto:contact@binghengcredit.com" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@binghengcredit.com
                </a>
              </li>
              <li>
                <span className="text-blue-100 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Operating: US & China
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 pt-6 text-center">
          <p className="text-sm text-blue-100">
            © {currentYear} Bingheng Credit Services LLC. All rights reserved.
          </p>
          <p className="text-xs text-blue-200 mt-2">
            Licensed debt collection services • No cure, no pay
          </p>
        </div>
      </div>
    </footer>
  );
};