import { useEffect, useState } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  TrendingUp,
  TrendingDown,
  Check,
  Star,
  Gift,
  Coins,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CryptoCarousel from "@/components/CryptoCarousel";
import MobileApp from "@/components/MobileApp";

import bitcoinLogo from "@/assets/btc-logo.png";
import ethereumLogo from "@/assets/eeth.png";
import tetherLogo from "@/assets/tether-usdt-logo.png";
import tronLogo from "@/assets/tron.png";
import bnbLogo from "@/assets/bnb-logo.png";
import solanLogo from "@/assets/solana-logo.png";
import usdcLogo from "@/assets/usdc-logo.png";
import mobileAppImage from "@/assets/pho.png";

const testimonials = [
  {
    name: "Adebayo Ogundimu",
    location: "Lagos",
    text: "Kuditime has revolutionized how I trade crypto. The rates are always competitive and withdrawals are instant!",
    rating: 5,
    product: "Crypto Trading",
  },
  {
    name: "Fatima Mohammed",
    location: "Abuja",
    text: "I pay all my bills through Kuditime now. From DSTV to electricity bills, everything is so convenient.",
    rating: 5,
    product: "Bill Payment",
  },
  {
    name: "Chisom Okeke",
    location: "Port Harcourt",
    text: "Sold my Amazon gift card in less than 5 minutes. The process was smooth and rates were excellent!",
    rating: 5,
    product: "Gift Cards",
  },
  {
    name: "Ibrahim Suleiman",
    location: "Kano",
    text: "The mobile app is incredible. I can trade Bitcoin while commuting to work. Super fast and secure!",
    rating: 5,
    product: "Mobile App",
  },
  {
    name: "Blessing Eze",
    location: "Enugu",
    text: "Customer support is top-notch. They resolved my query within minutes. Highly recommend Kuditime!",
    rating: 5,
    product: "Customer Support",
  },
  {
    name: "Yusuf Aliyu",
    location: "Kaduna",
    text: "Been using Kuditime for 2 years. Best crypto exchange in Nigeria. Transparent and reliable!",
    rating: 5,
    product: "Crypto Trading",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Regulated",
    description:
      "Fully licensed and regulated by Nigerian authorities, ensuring your funds are always secure.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Execute trades and complete transactions in seconds with our advanced trading infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description:
      "We offer the most competitive rates in the market, maximizing your trading profits.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description:
      "Our expert support team is available round the clock to assist you with any queries.",
  },
];

const milestones = [
  { number: "10,000+", label: "App Downloads" },
  { number: "₦500M+", label: "Crypto Processed" },
  { number: "8,000+", label: "Happy Customers" },
  { number: "99.9%", label: "Uptime" },
];

const formatNaira = (value: number) =>
  "₦" + value.toLocaleString("en-NG", { maximumFractionDigits: 0 });

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Trade your Crypto to Naira and Pay Bills Instantly
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The fastest, most secure way to trade Bitcoin, Ethereum, USDT and
            more — plus pay your bills all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://linktr.ee/kuditime_">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {milestones.map((m, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-gray-900">{m.number}</h3>
              <p className="text-gray-600">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Why Choose Kuditime?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <Card key={i} className="p-6 text-center">
                <reason.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
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
                      {prices ? formatNaira(prices[coin.id].usd * 1600) : "₦..."}
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
      <CryptoCarousel />

      {/* Mobile App */}
      <MobileApp />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">All-in-One Crypto Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Coins className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crypto Trading</h3>
              <p className="text-gray-600">
                Buy and sell Bitcoin, Ethereum, and other top cryptocurrencies at the best rates.
              </p>
            </Card>
            <Card className="p-6">
              <Gift className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gift Cards</h3>
              <p className="text-gray-600">
                Instantly trade your gift cards for cash with top rates and quick payouts.
              </p>
            </Card>
            <Card className="p-6">
              <Check className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bill Payments</h3>
              <p className="text-gray-600">
                Pay for utilities, airtime, and internet bills instantly — all from one platform.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
