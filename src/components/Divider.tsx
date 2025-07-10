import React from 'react';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  const bgClass = className.includes('bg-gray-50') ? 'bg-gray-50' : 'bg-white';
  
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <span className={`px-4 ${bgClass} text-gray-500 animate-fade-in`}>•••</span>
      </div>
    </div>
  );
};