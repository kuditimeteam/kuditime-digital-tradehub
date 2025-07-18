import { ArrowLeft, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BitcoinPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/assets" className="hover:text-primary">All Assets</Link>
            <span>/</span>
            <span className="text-gray-900">Bitcoin</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/assets" className="flex items-center text-gray-600 hover:text-primary">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Assets
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Asset Header */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">₿</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Bitcoin</h1>
                    <p className="text-gray-600">BTC • The original cryptocurrency</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Current Price</p>
                    <p className="text-lg font-semibold">₦45,678,900</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">24h Change</p>
                    <p className="text-lg font-semibold text-green-600 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +2.34%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Market Cap</p>
                    <p className="text-lg font-semibold">₦98.5T</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Volume (24h)</p>
                    <p className="text-lg font-semibold">₦2.3T</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Buy Bitcoin
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Sell Bitcoin
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* About Bitcoin */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About Bitcoin</h2>
                <p className="text-gray-600 mb-4">
                  Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network. 
                  Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed 
                  ledger called a blockchain.
                </p>
                <p className="text-gray-600">
                  The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. 
                  The currency began use in 2009 when its implementation was released as open-source software.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Trading
                  </Button>
                  <Button variant="outline" className="w-full">
                    Set Price Alert
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Watchlist
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Community Rating</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">4.8</span>
                </div>
                <p className="text-sm text-gray-600">Based on 12,000+ reviews</p>
              </CardContent>
            </Card>

            {/* Market Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Market Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Circulating Supply</span>
                    <span className="font-medium">19.7M BTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Supply</span>
                    <span className="font-medium">21M BTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">All Time High</span>
                    <span className="font-medium">₦69,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">All Time Low</span>
                    <span className="font-medium">₦65</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinPage;