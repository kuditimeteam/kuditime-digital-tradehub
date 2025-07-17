
import { Gift, ShoppingBag, CreditCard, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const giftCards = [
  {
    name: 'Amazon',
    logo: 'A',
    rate: '₦850/$',
    description: 'Most popular e-commerce gift cards',
    color: 'bg-orange-500',
    countries: ['US', 'UK', 'CA', 'DE']
  },
  {
    name: 'iTunes',
    logo: '🍎',
    rate: '₦780/$',
    description: 'Apple App Store and media content',
    color: 'bg-gray-800',
    countries: ['US', 'UK', 'CA']
  },
  {
    name: 'Google Play',
    logo: 'G',
    rate: '₦750/$',
    description: 'Android apps, games, and media',
    color: 'bg-green-500',
    countries: ['US', 'UK', 'CA', 'AU']
  },
  {
    name: 'Steam',
    logo: 'S',
    rate: '₦720/$',
    description: 'Gaming platform gift cards',
    color: 'bg-blue-600',
    countries: ['US', 'UK', 'EU']
  },
  {
    name: 'Netflix',
    logo: 'N',
    rate: '₦680/$',
    description: 'Streaming service subscriptions',
    color: 'bg-red-600',
    countries: ['US', 'UK', 'CA']
  },
  {
    name: 'Spotify',
    logo: '♪',
    rate: '₦650/$',
    description: 'Music streaming gift cards',
    color: 'bg-green-600',
    countries: ['US', 'UK', 'CA']
  },
  {
    name: 'PlayStation',
    logo: 'P',
    rate: '₦700/$',
    description: 'Gaming console store credits',
    color: 'bg-blue-800',
    countries: ['US', 'UK', 'CA']
  },
  {
    name: 'Xbox',
    logo: 'X',
    rate: '₦710/$',
    description: 'Microsoft gaming platform',
    color: 'bg-green-700',
    countries: ['US', 'UK', 'CA']
  }
];

const features = [
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Our AI-powered system verifies gift cards in under 2 minutes'
  },
  {
    icon: TrendingUp,
    title: 'Best Rates',
    description: 'We offer the most competitive rates in the Nigerian market'
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Your transactions are protected with bank-grade security'
  },
  {
    icon: CreditCard,
    title: 'Instant Payout',
    description: 'Receive your money immediately after successful verification'
  }
];

const acceptedTypes = [
  'Physical Gift Cards',
  'E-code Gift Cards',
  'Receipt Gift Cards',
  'Bulk Gift Cards'
];

const GiftCardsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sell Your Gift Cards for Cash
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Convert your unused gift cards to Naira instantly. We accept all major brands 
            with the best rates in Nigeria and lightning-fast processing.
          </p>
        </div>
      </section>

      {/* Supported Gift Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Gift Cards</h2>
            <p className="text-gray-600">We accept gift cards from all major brands worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCards.map((card, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${card.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{card.logo}</span>
                  </div>
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{card.rate}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {card.countries.map((country, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {country}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Sell {card.name}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sell Gift Cards on KudiTime?</h2>
            <p className="text-gray-600">Experience the fastest and most secure gift card trading platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Gift Card Trading Works</h2>
            <p className="text-gray-600">Simple steps to convert your gift cards to cash</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Gift Card</h3>
              <p className="text-gray-600 text-sm">Select the gift card brand you want to sell from our supported list.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Details</h3>
              <p className="text-gray-600 text-sm">Upload clear photos of your gift card or enter the e-code details.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Verified</h3>
              <p className="text-gray-600 text-sm">Our system verifies your gift card authenticity and balance instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Payment</h3>
              <p className="text-gray-600 text-sm">Get paid instantly to your bank account once verification is complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Gift Cards We Accept</h2>
            <p className="text-gray-600">We accept various forms of gift cards for maximum convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {acceptedTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Better Rates */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Better Rates</h2>
            <p className="text-gray-600">Maximize your earnings with these helpful tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear Photos</h3>
                <p className="text-gray-600 text-sm">Take clear, well-lit photos of both front and back of physical cards.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Original Receipt</h3>
                <p className="text-gray-600 text-sm">Include purchase receipts when available for faster verification.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Denominations</h3>
                <p className="text-gray-600 text-sm">Larger denomination cards often receive better rates per dollar.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">US Cards Preferred</h3>
                <p className="text-gray-600 text-sm">US-based gift cards typically have the highest exchange rates.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bulk Trading</h3>
                <p className="text-gray-600 text-sm">Sell multiple cards together for potential rate bonuses.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timing Matters</h3>
                <p className="text-gray-600 text-sm">Monitor rate fluctuations to sell at optimal times.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Sell Your Gift Cards?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied customers who trust KudiTime for gift card trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-white text-black hover:bg-gray-100">
              Start Selling Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black">
              Check Current Rates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCardsPage;
