import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, DollarSign, IdCard } from "lucide-react";

export const WhatWeHandleSection: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          What We Handle
        </h2>
        
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-8">
          <Card className="border-2 border-primary/20 card-hover flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileCheck className="text-primary" />
                What You'll Need
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center">
              <ul className="space-y-2 text-gray-700">
                <li>• Debtor's full name + Chinese National ID</li>
                <li>• Proof of debt: invoice, contract, statement</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 card-hover">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <DollarSign className="text-primary" />
                China-Linked Debt Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• B2B: Invoices, service fees, contract disputes</li>
                <li>• B2C: Rent, medical bills, consumer payments</li>
                <li>• E-commerce: Seller balances, chargebacks</li>
                <li>• Services: Legal, consulting, accounting fees owed by Chinese nationals</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-primary/10 card-hover mt-8 bg-white">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <IdCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-left">Why Chinese ID Matters</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Chinese national ID allows licensed law firms to issue enforceable legal notices and conduct official debtor tracing in China — channels unavailable to foreign entities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};