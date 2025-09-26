import { ArrowRight, Shield, Zap, Users, TrendingUp, Check, Star, Gift, Coins, TrendingDown} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CryptoCarousel from '@/components/CryptoCarousel';
import MobileApp from '@/components/MobileApp';
import bitcoinLogo from '@/assets/btc-logo.png';
import ethereumLogo from '@/assets/eeth.png';
import tetherLogo from '@/assets/tether-usdt-logo.png';
import tronLogo from '@/assets/tron.png';
import ltcLogo from '@/assets/bnb-logo.png';
import bnbLogo from '@/assets/bnb-logo.png';
import solanLogo from '@/assets/solana-logo.png';
import usdcLogo from '@/assets/usdc-logo.png';
import mobileAppImage from '@/assets/pho.png';
import { useEffect, useState } from 'react';

const testimonials = [{
  name: "Adebayo Ogundimu",
  location: "Lagos",
  text: "Kuditime has revolutionized how I trade crypto. The rates are always competitive and withdrawals are instant!",
  rating: 5,
  product: "Crypto Trading"
}, {
  name: "Fatima Mohammed",
  location: "Abuja",
  text: "I pay all my bills through Kuditime now. From DSTV to electricity bills, everything is so convenient.",
  rating: 5,
  product: "Bill Payment"
}, {
  name: "Chisom Okeke",
  location: "Port Harcourt",
  text: "Sold my Amazon gift card in less than 5 minutes. The process was smooth and rates were excellent!",
  rating: 5,
  product: "Gift Cards"
}, {
  name: "Ibrahim Suleiman",
  location: "Kano",
  text: "The mobile app is incredible. I can trade Bitcoin while commuting to work. Super fast and secure!",
  rating: 5,
  product: "Mobile App"
}, {
  name: "Blessing Eze",
  location: "Enugu",
  text: "Customer support is top-notch. They resolved my query within minutes. Highly recommend Kuditime!",
  rating: 5,
  product: "Customer Support"
}, {
  name: "Yusuf Aliyu",
  location: "Kaduna",
  text: "Been using Kuditime for 2 years. Best crypto exchange in Nigeria. Transparent and reliable!",
  rating: 5,
  product: "Crypto Trading"
}];
const reasons = [{
  icon: Shield,
  title: "Licensed & Regulated",
  description: "Fully licensed and regulated by Nigerian authorities, ensuring your funds are always secure."
}, {
  icon: Zap,
  title: "Lightning Fast",
  description: "Execute trades and complete transactions in seconds with our advanced trading infrastructure."
}, {
  icon: TrendingUp,
  title: "Best Rates",
  description: "We offer the most competitive rates in the market, maximizing your trading profits."
}, {
  icon: Users,
  title: "24/7 Support",
  description: "Our expert support team is available round the clock to assist you with any queries."
}];
const milestones = [{
  number: "10,000+",
  label: "App Downloads"
}, {
  number: "₦500M+",
  label: "Crypto Processed"
}, {
  number: "8,000+",
  label: "Happy Customers"
}, {
  number: "99.9%",
  label: "Uptime"
}];



const formatCurrency = (value: number) =>
  "$" + value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const Index = () => {

    const [prices, setPrices] = useState<any>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const cached = localStorage.getItem("cryptoData");
        const cacheTime = localStorage.getItem("cryptoDataTime");
  
        if (cached && cacheTime && Date.now() - Number(cacheTime) < 60 * 1000) {
          setPrices(JSON.parse(cached));
          return;
        }
  
        try {
          const res = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,tron,binancecoin,solana,usd-coin&vs_currencies=usd&include_24hr_change=true"
          );
          const data = await res.json();
          setPrices(data);
          localStorage.setItem("cryptoData", JSON.stringify(data));
          localStorage.setItem("cryptoDataTime", Date.now().toString());
        } catch (err) {
          console.error("Error fetching crypto prices:", err);
        }
      };
  
      fetchData();
    }, []);

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live Trading Badge */}
          <div className="absolute top-8 right-8 hidden lg:flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Live Trading</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Trade your <span className="text-green-600">Crypto</span><br />
                  to Naira and <span className="text-green-600">Pay Bills</span><br />
                  <span className="text-green-600">Instantly</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                  {/* Convert Bitcoin, Ethereum, USDT and other cryptocurrencies to Nigerian Naira at the best rates. Pay your bills seamlessly all in one platform. */}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://linktr.ee/kuditime_">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Start Trading <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </a>
                {/* <Button size="lg" variant="ghost" className="text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button> */}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <span className="text-gray-700 font-medium">4.9/5 from reviews</span>
              </div>
            </div>
            {/* Right Content - Mobile Mockup */}
            <div className="relative">
              <div className="rounded-[2.5rem] p-4 max-w-lg mx-auto shadow-2xl bg-slate-50">
                 <img 
                                  src={mobileAppImage} 
                                  alt="Kuditime Mobile App" 
                                  className="w-full h-auto rounded-2xl
                                  "
                                />
                {/* <div className="bg-green-600 rounded-t-2xl p-4 text-white text-center">
                  <h3 className="font-bold text-lg">CryptoNaira</h3>
                  <p className="text-sm opacity-90">Crypto Trading & Bills</p>
                </div> */}
                
                {/* <div className="bg-white rounded-b-2xl p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Bitcoin (BTC)</div>
                    <div className="text-2xl font-bold text-gray-900">₦45,500,000</div>
                  </div> */}
                  
                  {/* <div className="space-y-2">
                    <div className="text-sm text-gray-600">You'll receive</div>
                    <div className="text-xl font-semibold text-gray-900">₦910,000</div>
                  </div> */}
                  
                  {/* <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
                    Trade Now
                  </Button> */}
                
              </div>

              {/* Daily Volume Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-sm text-gray-600">Daily Volume</div>
                <div className="text-xl font-bold text-green-600">₦50M+</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {milestones.map((milestone, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {milestone.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">{milestone.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Why People Choose Kuditime</h2>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
              We're committed to providing the best crypto trading and bill payment experience in Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((reason, index) => <Card key={index} className="text-center bg-white/10 border-white/20">
                <CardContent className="p-4 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{reason.title}</h3>
                  <p className="text-sm text-white/80">{reason.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

       {/* Crypto Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Traded Cryptocurrencies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trade the most popular cryptocurrencies with the best rates in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "bitcoin", name: "Bitcoin", symbol: "BTC", logo: bitcoinLogo, color: "orange" },
              { id: "ethereum", name: "Ethereum", symbol: "ETH", logo: ethereumLogo, color: "blue" },
              { id: "tether", name: "Tether", symbol: "USDT", logo: tetherLogo, color: "green" },
              { id: "tron", name: "Tron", symbol: "TRX", logo: tronLogo, color: "gray" },
              { id: "binancecoin", name: "BNB", symbol: "BNB", logo: bnbLogo, color: "yellow" },
              { id: "solana", name: "Solana", symbol: "SOL", logo: solanLogo, color: "purple" },
              { id: "usd-coin", name: "USDC", symbol: "USDC", logo: usdcLogo, color: "indigo" },
            ].map((coin) => (
              <Card
                key={coin.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-${coin.color}-50 to-${coin.color}-100 border-${coin.color}-200`}
              >
                <CardContent className="p-6 text-center">
                  <img src={coin.logo} alt={coin.name} className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{coin.name}</h3>
                  <p className="text-gray-600 mb-3">{coin.symbol}</p>
                  <div className="space-y-2">
                    <p className={`text-2xl font-bold text-${coin.color}-600`}>
                      {prices ? formatCurrency(prices[coin.id].usd) : "₦..."}
                    </p>
                    <p
                      className={`text-sm flex items-center justify-center ${
                        prices?.[coin.id]?.usd_24h_change > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {prices?.[coin.id]?.usd_24h_change > 0 ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {prices ? prices[coin.id].usd_24h_change.toFixed(2) + "%" : "..."}
                    </p>
                  </div>
                  <a href="https://linktr.ee/kuditime_">
                    <Button className={`w-full mt-4 bg-${coin.color}-500 hover:bg-${coin.color}-600 text-white`}>
                      Trade {coin.symbol}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Crypto Carousel */}
      {/* <CryptoCarousel /> */}

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
            {testimonials.map((testimonial, index) => <Card key={index}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />)}
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
              </Card>)}
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
                {/* <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <img src="" alt="Bitcoin" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                </div> */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Coins className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                  <Gift className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
    </div>;
};
export default Index;