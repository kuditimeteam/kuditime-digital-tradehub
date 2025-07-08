
import { ArrowRight, Shield, Zap, Users, TrendingUp, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CryptoCarousel from '@/components/CryptoCarousel';
import MobileApp from '@/components/MobileApp';

const testimonials = [
  {
    name: "Adebayo Ogundimu",
    location: "Lagos",
    text: "KudiTime has revolutionized how I trade crypto. The rates are always competitive and withdrawals are instant!",
    rating: 5,
    product: "Crypto Trading"
  },
  {
    name: "Fatima Mohammed",
    location: "Abuja",
    text: "I pay all my bills through KudiTime now. From DSTV to electricity bills, everything is so convenient.",
    rating: 5,
    product: "Bill Payment"
  },
  {
    name: "Chisom Okeke",
    location: "Port Harcourt",
    text: "Sold my Amazon gift card in less than 5 minutes. The process was smooth and rates were excellent!",
    rating: 5,
    product: "Gift Cards"
  },
  {
    name: "Ibrahim Suleiman",
    location: "Kano",
    text: "The mobile app is incredible. I can trade Bitcoin while commuting to work. Super fast and secure!",
    rating: 5,
    product: "Mobile App"
  },
  {
    name: "Blessing Eze",
    location: "Enugu",
    text: "Customer support is top-notch. They resolved my query within minutes. Highly recommend KudiTime!",
    rating: 5,
    product: "Customer Support"
  },
  {
    name: "Yusuf Aliyu",
    location: "Kaduna",
    text: "Been using KudiTime for 2 years. Best crypto exchange in Nigeria. Transparent and reliable!",
    rating: 5,
    product: "Crypto Trading"
  }
];

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Regulated",
    description: "Fully licensed and regulated by Nigerian authorities, ensuring your funds are always secure."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades and complete transactions in seconds with our advanced trading infrastructure."
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description: "We offer the most competitive rates in the market, maximizing your trading profits."
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Our expert support team is available round the clock to assist you with any queries."
  }
];

const milestones = [
  { number: "10,000+", label: "App Downloads" },
  { number: "₦1B+", label: "Crypto Processed" },
  { number: "50,000+", label: "Happy Customers" },
  { number: "99.9%", label: "Uptime" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nigeria's Premier Crypto Exchange & Bill Payment Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Trade cryptocurrency, pay bills, and sell gift cards with the best rates in Nigeria. 
              Join over 50,000 satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Trade Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {milestone.number}
                </div>
                <div className="text-gray-600">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why People Choose KudiTime</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best crypto trading and bill payment experience in Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Carousel */}
      <CryptoCarousel />

      {/* Mobile App Section */}
      <MobileApp />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Hear from satisfied customers across Nigeria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                      {testimonial.product}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need in One Platform</h2>
            <p className="text-gray-600">Comprehensive financial services at your fingertips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">₿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Crypto Trading</h3>
                <p className="text-gray-600 mb-4">Trade Bitcoin, Ethereum, USDT and other major cryptocurrencies with the best rates.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Instant transactions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Competitive rates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Secure wallet
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bill Payment</h3>
                <p className="text-gray-600 mb-4">Pay for airtime, data, electricity, TV subscriptions and more with ease.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    All major providers
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Instant processing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    No hidden fees
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🎁</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gift Cards</h3>
                <p className="text-gray-600 mb-4">Sell your gift cards from Amazon, iTunes, Google Play and more for instant cash.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Multiple brands
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Fast verification
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Best rates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
