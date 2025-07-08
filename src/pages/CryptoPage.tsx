
import { TrendingUp, Shield, Zap, Globe, Bitcoin, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blockchains = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    price: '₦45,000,000',
    change: '+2.5%',
    description: 'The original cryptocurrency and digital gold standard',
    features: ['Peer-to-peer transactions', 'Store of value', 'Global acceptance']
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    price: '₦2,800,000',
    change: '+1.8%',
    description: 'Smart contract platform powering DeFi and NFTs',
    features: ['Smart contracts', 'DeFi ecosystem', 'NFT marketplace']
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    icon: '₮',
    price: '₦1,650',
    change: '+0.1%',
    description: 'Stable digital currency pegged to the US Dollar',
    features: ['Price stability', 'USD-backed', 'High liquidity']
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    icon: 'B',
    price: '₦420,000',
    change: '-0.5%',
    description: 'Binance ecosystem token with multiple utilities',
    features: ['Trading fee discounts', 'Launchpad access', 'DeFi integration']
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    icon: 'S',
    price: '₦180,000',
    change: '+3.2%',
    description: 'High-performance blockchain for decentralized applications',
    features: ['Fast transactions', 'Low fees', 'Scalable architecture']
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    icon: '$',
    price: '₦1,645',
    change: '+0.2%',
    description: 'Regulated stablecoin backed by US Dollar reserves',
    features: ['Regulatory compliance', 'Transparency', 'Institutional grade']
  }
];

const tradingFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast Trades',
    description: 'Execute trades in seconds with our advanced matching engine'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security with cold storage and insurance protection'
  },
  {
    icon: TrendingUp,
    title: 'Best Market Rates',
    description: 'Competitive pricing with real-time market data integration'
  },
  {
    icon: Globe,
    title: '24/7 Trading',
    description: 'Trade anytime, anywhere with our always-on platform'
  }
];

const CryptoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Bitcoin className="w-16 h-16 mr-4" />
              <Coins className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trade Crypto with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Access major blockchains and cryptocurrencies with the most competitive rates in Nigeria. 
              Start trading with as little as ₦1,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Trading Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                View Live Rates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trade Crypto on KudiTime?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the most advanced and secure crypto trading platform in Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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

      {/* Supported Cryptocurrencies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Blockchains We Support</h2>
            <p className="text-gray-600">Trade the most popular cryptocurrencies with competitive rates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchains.map((crypto, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{crypto.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{crypto.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{crypto.price}</span>
                    <span className={`text-sm font-medium ${
                      crypto.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {crypto.change}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{crypto.description}</p>
                  <div className="space-y-2">
                    {crypto.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Trade {crypto.symbol}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Crypto Trading Works</h2>
            <p className="text-gray-600">Simple steps to start your crypto journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Account</h3>
              <p className="text-gray-600">Sign up and verify your identity in minutes with our streamlined KYC process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fund Your Wallet</h3>
              <p className="text-gray-600">Deposit Naira via bank transfer or send crypto from your external wallet.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Trading</h3>
              <p className="text-gray-600">Buy or sell cryptocurrencies instantly and withdraw to your bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Nigerians who trust KudiTime for their crypto trading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Create Free Account
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

export default CryptoPage;
