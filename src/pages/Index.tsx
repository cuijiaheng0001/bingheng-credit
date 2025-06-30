
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Shield, Clock, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We bridge U.S. claims with China-ID-backed collection.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            48-hour first contact • 70% reach • 25% recovery
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-blue-50">
            Schedule Demo
          </Button>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Eligibility — What We Can Collect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-blue-600" />
                  Claim File Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must contain:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Debtor's full name + Chinese National ID number</li>
                      <li>• Outstanding amount and proof (invoice, contract, bill)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <DollarSign className="text-green-600" />
                  Supported Claim Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• E-commerce receivables (Amazon / eBay sellers)</li>
                  <li>• Student housing rent defaults</li>
                  <li>• B2B fees such as logistics, warehousing, agency charges</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-purple-200 mb-12">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="text-purple-600" />
                Minimum Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Single claim ≥ USD 200 <span className="font-semibold">OR</span> batch ≥ 50 accounts
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Why ID Matters</h3>
            <p className="text-lg text-blue-800">
              Chinese ID unlocks legal phone & credit data — if we can reach the debtor, we can recover the cash.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Bingheng Credit?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Phone className="text-blue-600" size={24} />
                  Real-time Phone Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ID linked to telecom APIs for fresh numbers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Clock className="text-green-600" size={24} />
                  48-hour First Call Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatic dispatch to Beijing call center
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Shield className="text-purple-600" size={24} />
                  SHA-256 Encrypted Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hosted in Hong Kong, compliant with PIPL & GDPR
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <DollarSign className="text-orange-600" size={24} />
                  Success-Fee Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No cure, no pay
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
