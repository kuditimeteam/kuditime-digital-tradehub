import { Smartphone, Zap, Tv, Home, Gamepad2, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const billCategories = [
  {
    icon: Smartphone,
    title: 'Airtime & Data',
    description: 'Buy airtime and data bundles for all networks',
    services: ['MTN', 'Airtel', 'Glo', '9mobile'],
    color: 'bg-blue-500'
  },
  {
    icon: Zap,
    title: 'Electricity Bills',
    description: 'Pay electricity bills for all distribution companies',
    services: ['PHCN', 'IKEDC', 'EKEDC', 'KEDCO'],
    color: 'bg-yellow-500'
  },
  {
    icon: Tv,
    title: 'TV Subscriptions',
    description: 'Renew your cable TV and streaming subscriptions',
    services: ['DSTV', 'GOtv', 'Startimes', 'Netflix'],
    color: 'bg-purple-500'
  },
  {
    icon: Home,
    title: 'Internet Bills',
    description: 'Pay for internet and broadband services',
    services: ['Spectranet', 'Smile', 'Swift', 'Tizeti'],
    color: 'bg-green-500'
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Betting',
    description: 'Fund gaming and betting platforms',
    services: ['Bet9ja', 'SportyBet', 'NairaBet', 'PlayStation'],
    color: 'bg-red-500'
  },
  {
    icon: CreditCard,
    title: 'Other Bills',
    description: 'Pay for various other services',
    services: ['Insurance', 'Loan Payments', 'School Fees', 'More'],
    color: 'bg-indigo-500'
  }
];

const features = [
  {
    title: 'Instant Processing',
    description: 'All bill payments are processed instantly with immediate confirmation'
  },
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise charges or hidden fees'
  },
  {
    title: 'Secure Payments',
    description: 'Bank-grade security ensures your payment information is always protected'
  },
  {
    title: '24/7 Availability',
    description: 'Pay your bills anytime, anywhere with our always-on platform'
  }
];

const BillsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CreditCard className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pay All Your Bills in One Place
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From airtime to electricity bills, TV subscriptions to internet payments - 
            handle all your essential services with ease and convenience.
          </p>
        </div>
      </section>

      {/* Bill Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Your Essential Services</h2>
            <p className="text-gray-600">Pay for all your daily needs in one convenient location</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {billCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border border-gray-200">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.services.map((service, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Pay Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Pay Bills on KudiTime?</h2>
            <p className="text-gray-600">Experience the most convenient bill payment platform in Nigeria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Bill Payment Works</h2>
            <p className="text-gray-600">Simple steps to pay any bill in seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Service</h3>
              <p className="text-gray-600">Choose the service you want to pay for from our extensive list of providers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Details</h3>
              <p className="text-gray-600">Input your account details, phone number, or meter number as required.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Make Payment</h3>
              <p className="text-gray-600">Complete your payment securely and receive instant confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Services</h2>
            <p className="text-gray-600">Quick access to frequently used bill payment services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'MTN Airtime', logo: 'M' },
              { name: 'DSTV', logo: 'D' },
              { name: 'PHCN', logo: 'P' },
              { name: 'Airtel Data', logo: 'A' },
              { name: 'GOtv', logo: 'G' },
              { name: 'Spectranet', logo: 'S' }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">{service.logo}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{service.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Paying Your Bills Today</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Nigerians who trust KudiTime for their bill payments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Pay Bills Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Download Mobile App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillsPage;
