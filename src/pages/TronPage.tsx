import { ArrowLeft, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TronPage = () => {
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
            <span className="text-gray-900">Tron</span>
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
            {/* Hero Section */}
            <Card className="mb-6">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">₿</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Best Site To Sell Tron In Nigeria</h1>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Kuditime allows you to exchange Tron for Naira within a minute automatically. You can sell BTC and receive payment to any bank account in Nigeria.
                </p>
                
                <Button className="bg-primary hover:bg-primary/90 px-8 py-3">
                  Start Selling Tron
                </Button>
              </CardContent>
            </Card>

            {/* Current Price Section */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              </CardContent>
            </Card>

            {/* How To Sell Section */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">How To Sell Tron In Nigeria</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold">Create an Account</h3>
                      <p className="text-gray-600">Sign up on Kuditime with your email address and verify your account.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold">Select Tron</h3>
                      <p className="text-gray-600">Choose Tron from our list of supported cryptocurrencies.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold">Enter Amount</h3>
                      <p className="text-gray-600">Input the amount of Tron you want to sell and see the Naira equivalent.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h3 className="font-semibold">Complete Transaction</h3>
                      <p className="text-gray-600">Send your Tron and receive Naira payment to your bank account within a minute.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions Concerning Selling Tron?</h2>
                <p className="text-gray-600 mb-6">
                  Our customer support team is always available to provide answers to any of your questions, but to begin with, here are some of our most asked questions.
                </p>
                
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">How Do I Register On Kuditime?</h3>
                    <p className="text-gray-600">
                      To register on Kuditime, visit our website and click on the "Sign Up" button. Fill in your email address, create a strong password, and verify your email to complete the registration process.
                    </p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">How long does it take to sell Tron?</h3>
                    <p className="text-gray-600">
                      Tron transactions on Kuditime are processed automatically within a minute once your Tron is confirmed on the blockchain.
                    </p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">What is the minimum amount of Tron I can sell?</h3>
                    <p className="text-gray-600">
                      The minimum amount of Tron you can sell on Kuditime is 0.001 BTC, which ensures accessibility for all users.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Is it safe to sell Tron on Kuditime?</h3>
                    <p className="text-gray-600">
                      Yes, Kuditime uses advanced security measures including SSL encryption and secure wallet systems to protect your transactions and personal information.
                    </p>
                  </div>
                </div>
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

export default TronPage;