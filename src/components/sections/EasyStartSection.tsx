import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

export const EasyStartSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-green-50 border-y-2 border-green-100">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4 mr-2" />
          Low Barrier Entry
        </div>
        
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Getting Started Is Easy
        </h2>
        
        <p className="text-lg text-gray-600 mb-12">
          Not sure where to begin? Start small — we're built for flexibility.
        </p>

        <div className="grid md:grid-cols-2 gap-y-4 md:gap-8 max-w-3xl mx-auto">
          <Card className="border-2 border-green-200 card-hover">
            <CardContent className="p-6">
              <ul className="space-y-3 text-left text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Start with just 5 test cases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Single claims from $200 accepted
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 card-hover">
            <CardContent className="p-6">
              <ul className="space-y-3 text-left text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Volume discounts at 50+ accounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Custom solutions for any portfolio size
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};