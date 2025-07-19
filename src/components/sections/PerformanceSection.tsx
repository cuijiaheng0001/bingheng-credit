import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="container max-w-6xl mx-auto px-6 py-12 md:py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        How We Perform
      </h2>
      
      <div className="grid md:grid-cols-3 gap-y-4 md:gap-8 max-w-4xl mx-auto">
        <Card className="text-center feature-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary mb-2">
              70%
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">
              Contact Rate
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center feature-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary mb-2">
              25%
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">
              Average Recovery
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center feature-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-orange-600 mb-2">
              5 Days
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">
              Legal Action Initiated
            </CardDescription>
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