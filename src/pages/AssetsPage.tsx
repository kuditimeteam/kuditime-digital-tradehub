import { Search, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AssetsPage = () => {
  const cryptoAssets = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '₦45,678,900',
      change: '+2.34%',
      isPositive: true,
      icon: '₿',
      bgColor: 'bg-orange-100',
      iconColor: 'bg-orange-500',
      slug: 'bitcoin'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '₦3,234,567',
      change: '+1.45%',
      isPositive: true,
      icon: '♦',
      bgColor: 'bg-blue-100',
      iconColor: 'bg-blue-500',
      slug: 'ethereum'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: '₦145,678',
      change: '-0.56%',
      isPositive: false,
      icon: 'Ł',
      bgColor: 'bg-gray-100',
      iconColor: 'bg-gray-500',
      slug: 'litecoin'
    },
    {
      name: 'USDT',
      symbol: 'USDT',
      price: '₦1,567',
      change: '+0.02%',
      isPositive: true,
      icon: '₮',
      bgColor: 'bg-green-100',
      iconColor: 'bg-green-500',
      slug: 'usdt'
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      price: '₦456,789',
      change: '+3.21%',
      isPositive: true,
      icon: 'B',
      bgColor: 'bg-yellow-100',
      iconColor: 'bg-yellow-600',
      slug: 'binance-coin'
    },
    {
      name: 'TRON',
      symbol: 'TRX',
      price: '₦178',
      change: '-1.23%',
      isPositive: false,
      icon: '▼',
      bgColor: 'bg-red-100',
      iconColor: 'bg-red-500',
      slug: 'tron'
    },
    {
      name: 'Dogecoin',
      symbol: 'DOGE',
      price: '₦234',
      change: '+5.67%',
      isPositive: true,
      icon: 'Ð',
      bgColor: 'bg-amber-100',
      iconColor: 'bg-amber-600',
      slug: 'dogecoin'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Crypto Assets
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Buy, sell, and trade the most popular cryptocurrencies on KudiTime
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search for assets..." 
                className="pl-10 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Cryptocurrencies</h2>
          <p className="text-gray-600 mb-6">
            KudiTime offers a wide selection of cryptocurrencies, with a diverse range of options to choose from.
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoAssets.map((asset) => (
            <Link key={asset.symbol} to={`/assets/${asset.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${asset.bgColor} rounded-full flex items-center justify-center`}>
                        <div className={`w-6 h-6 ${asset.iconColor} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{asset.icon}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{asset.name}</h3>
                        <p className="text-gray-500 text-sm">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{asset.price}</p>
                      <div className={`flex items-center text-sm ${
                        asset.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {asset.isPositive ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {asset.change}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Buy & Sell {asset.name}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                      Buy
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      Sell
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="bg-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Trading?
              </h3>
              <p className="text-white/90 mb-6">
                Join thousands of users who trust KudiTime for their crypto trading needs.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">
                Create Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AssetsPage;