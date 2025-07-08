
import { Smartphone, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileApp = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup */}
          <div className="relative">
            <div className="mobile-mockup mx-auto w-64 h-[500px] relative">
              <div className="bg-white rounded-xl h-full p-4 overflow-hidden">
                {/* Phone Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">K</span>
                    </div>
                    <span className="font-semibold text-gray-900">KudiTime</span>
                  </div>
                  <div className="text-xs text-gray-500">9:41 AM</div>
                </div>

                {/* Balance Card */}
                <div className="bg-gradient-to-r from-primary to-green-600 rounded-lg p-4 mb-6">
                  <p className="text-white/80 text-sm">Total Balance</p>
                  <p className="text-white text-2xl font-bold">₦2,450,000</p>
                  <p className="text-white/80 text-sm">+12.5% this month</p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-100 rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xs">₿</span>
                    </div>
                    <p className="text-xs text-gray-700">Buy Crypto</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xs">💳</span>
                    </div>
                    <p className="text-xs text-gray-700">Pay Bills</p>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Recent Transactions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">₦</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-900">Bitcoin Sale</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                      <p className="text-xs font-semibold text-green-600">+₦450,000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">📱</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-900">Airtime Purchase</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                      <p className="text-xs font-semibold text-red-600">-₦2,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trade Crypto & Pay Bills On-the-Go
            </h2>
            <p className="text-gray-600 mb-8">
              Experience seamless cryptocurrency trading and bill payments with our mobile app. 
              Designed for speed, security, and convenience.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lightning Fast</h3>
                  <p className="text-gray-600 text-sm">Execute trades and payments in seconds with our optimized mobile experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bank-Grade Security</h3>
                  <p className="text-gray-600 text-sm">Your funds and data are protected with military-grade encryption.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">24/7 Availability</h3>
                  <p className="text-gray-600 text-sm">Trade and pay bills anytime, anywhere with our always-on platform.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Download for Android</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Download for iOS</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
