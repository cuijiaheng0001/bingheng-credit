import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Users, Zap } from "lucide-react";

export const PerformanceSection: React.FC = () => {
  const { count: contactRate, ref: contactRef } = useCountUp({ end: 70, suffix: '%' });
  const { count: recoveryRate, ref: recoveryRef } = useCountUp({ end: 25, suffix: '%' });
  const { count: legalDays, ref: legalRef } = useCountUp({ end: 5, suffix: ' Days' });

  return (
    <section id="performance" className="container max-w-6xl mx-auto px-6 py-12 md:py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        How We Perform
      </h2>
      
      <div className="grid md:grid-cols-3 gap-y-4 md:gap-8 max-w-4xl mx-auto">
        <Card className="text-center feature-card bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:border-blue-200">
          <CardHeader className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <CardTitle ref={contactRef} className="text-4xl font-bold text-blue-600 mb-2 mt-6">
              {contactRate}
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">
              Contact Rate
            </CardDescription>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </CardHeader>
        </Card>

        <Card className="text-center feature-card bg-gradient-to-br from-green-50 to-white border-green-100 hover:border-green-200">
          <CardHeader className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <CardTitle ref={recoveryRef} className="text-4xl font-bold text-green-600 mb-2 mt-6">
              {recoveryRate}
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">
              Average Recovery
            </CardDescription>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </CardHeader>
        </Card>

        <Card className="text-center feature-card bg-gradient-to-br from-orange-50 to-white border-orange-100 hover:border-orange-200">
          <CardHeader className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <CardTitle ref={legalRef} className="text-4xl font-bold text-orange-600 mb-2 mt-6">
              {legalDays}
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">
              Legal Action Initiated
            </CardDescription>
            <div className="mt-3 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((day) => (
                <div 
                  key={day} 
                  className={`w-8 h-2 rounded ${day <= 5 ? 'bg-orange-500' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
      
      <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-md text-center text-gray-600 text-sm mt-6">
        <p className="font-semibold text-gray-700">Industry-Leading Results</p>
        <p>12.6% average recovery • Premium portfolios exceed 20%</p>
      </div>
    </section>
  );
};