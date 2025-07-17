
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
  { number: "5,000+", label: "App Downloads" },
  { number: "₦500M+", label: "Crypto Processed" },
  { number: "8,000+", label: "Happy Customers" },
  { number: "99.9%", label: "Uptime" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 space-x-4">
              <img src="/placeholder.svg" alt="Bitcoin" className="w-12 h-12 md:w-16 md:h-16" />
              <img src="/placeholder.svg" alt="Ethereum" className="w-10 h-10 md:w-12 md:h-12" />
              <img src="/placeholder.svg" alt="USDT" className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Nigeria's Premier Crypto Exchange & Bill Payment Platform
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto">
              Trade cryptocurrency, pay bills, and sell gift cards with the best rates in Nigeria. 
              Join over 8,000 satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 bg-white text-black hover:bg-gray-100">
                Trade Now <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 border-white text-white hover:bg-white hover:text-black">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {milestone.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Why People Choose KudiTime</h2>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
              We're committed to providing the best crypto trading and bill payment experience in Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center bg-white/10 border-white/20">
                <CardContent className="p-4 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{reason.title}</h3>
                  <p className="text-sm text-white/80">{reason.description}</p>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">What Our Customers Say</h2>
            <p className="text-sm md:text-base text-gray-600">Hear from satisfied customers across Nigeria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm md:text-base font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-gray-500">{testimonial.location}</p>
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
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Everything You Need in One Platform</h2>
            <p className="text-sm md:text-base text-white/80">Comprehensive financial services at your fingertips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white/10 border-white/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <img src="/placeholder.svg" alt="Bitcoin" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Crypto Trading</h3>
                <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">Trade Bitcoin, Ethereum, USDT and other major cryptocurrencies with the best rates.</p>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white/70">
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    Instant transactions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    Competitive rates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    Secure wallet
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/10 border-white/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <img src="/placeholder.svg" alt="Bills" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Bill Payment</h3>
                <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">Pay for airtime, data, electricity, TV subscriptions and more with ease.</p>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white/70">
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    All major providers
                  </li>
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    Instant processing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    No hidden fees
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/10 border-white/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <img src="/placeholder.svg" alt="Gift Cards" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Gift Cards</h3>
                <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">Sell your gift cards from Amazon, iTunes, Google Play and more for instant cash.</p>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white/70">
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    Multiple brands
                  </li>
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
                    Fast verification
                  </li>
                  <li className="flex items-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2" />
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
