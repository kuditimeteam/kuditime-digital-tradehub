
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cryptoData = [
  { name: 'Bitcoin', symbol: 'BTC', price: '₦45,000,000', change: '+2.5%', trending: 'up' },
  { name: 'Ethereum', symbol: 'ETH', price: '₦2,800,000', change: '+1.8%', trending: 'up' },
  { name: 'Tether', symbol: 'USDT', price: '�N1,650', change: '+0.1%', trending: 'up' },
  { name: 'BNB', symbol: 'BNB', price: '₦420,000', change: '-0.5%', trending: 'down' },
  { name: 'Solana', symbol: 'SOL', price: '₦180,000', change: '+3.2%', trending: 'up' },
  { name: 'USDC', symbol: 'USDC', price: '₦1,645', change: '+0.2%', trending: 'up' },
];

const CryptoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === cryptoData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? cryptoData.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === cryptoData.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Traded Cryptocurrencies</h2>
          <p className="text-gray-600">Live rates updated every minute</p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cryptoData.map((crypto, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="crypto-card mx-4 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{crypto.symbol.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{crypto.name}</h3>
                  <p className="text-gray-600 mb-2">{crypto.symbol}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{crypto.price}</p>
                  <div className={`flex items-center justify-center space-x-1 ${
                    crypto.trending === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {crypto.trending === 'up' ? 
                      <TrendingUp className="w-4 h-4" /> : 
                      <TrendingDown className="w-4 h-4" />
                    }
                    <span className="font-medium">{crypto.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
            onClick={goToNext}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {cryptoData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoCarousel;
