
import { Smartphone, Download, Star, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const appFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades and payments in seconds'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your data and funds are always protected'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Get help whenever you need it'
  }
];

const screenshots = [
  {
    title: 'Dashboard',
    description: 'Clean and intuitive interface'
  },
  {
    title: 'Trading',
    description: 'Easy crypto trading experience'
  },
  {
    title: 'Bills',
    description: 'Pay all bills in one place'
  },
  {
    title: 'Cards',
    description: 'Sell gift cards instantly'
  }
];

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Download KudiTime Mobile App
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
                Take your crypto trading and bill payments on-the-go with our feature-rich mobile application. 
                Available for both Android and iOS devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 flex items-center space-x-2">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Download for Android</span>
                </Button>
                <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 border-white text-white hover:bg-white hover:text-primary flex items-center space-x-2">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Download for iOS</span>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                  <span className="text-sm md:text-base">4.8 Rating</span>
                </div>
                <div className="text-sm md:text-base">10,000+ Downloads</div>
                <div className="text-sm md:text-base">Free to Use</div>
              </div>
            </div>
            
            {/* Mobile Mockup */}
            <div className="relative">
              <div className="mobile-mockup mx-auto w-48 h-96 md:w-64 md:h-[500px]">
                <div className="bg-white rounded-xl h-full p-3 md:p-4 overflow-hidden">
                  {/* App Screenshot Mockup */}
                  <div className="h-full bg-gradient-to-b from-primary to-primary/80 rounded-lg p-3 md:p-4 text-white">
                    <div className="text-center mb-4 md:mb-6">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-primary font-bold text-sm md:text-base">K</span>
                      </div>
                      <h3 className="font-bold text-sm md:text-base">KudiTime</h3>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4">
                      <div className="bg-white/20 rounded-lg p-2 md:p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs md:text-sm">Total Balance</span>
                          <span className="text-sm md:text-lg font-bold">₦2,450,000</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <div className="bg-white/20 rounded-lg p-2 md:p-3 text-center">
                          <div className="text-lg md:text-2xl mb-1">₿</div>
                          <div className="text-xs">Trade Crypto</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-2 md:p-3 text-center">
                          <div className="text-lg md:text-2xl mb-1">💳</div>
                          <div className="text-xs">Pay Bills</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/20 rounded-lg p-2 md:p-3">
                        <div className="text-xs md:text-sm mb-2">Recent Activity</div>
                        <div className="space-y-1 md:space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Bitcoin Sale</span>
                            <span>+₦450,000</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Airtime Purchase</span>
                            <span>-₦2,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-12 md:py-16 green-gradient-reverse text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Why Choose Our Mobile App?</h2>
            <p className="text-sm md:text-base text-white/90">Experience the full power of KudiTime in your pocket</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/10 border-white/20">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">App Screenshots</h2>
            <p className="text-sm md:text-base text-gray-600">See the beautiful and intuitive interface of our mobile app</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-48 md:h-96 bg-gray-100 rounded-lg mb-3 md:mb-4 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 md:w-16 md:h-16 text-gray-400" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1">{screenshot.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 dark-gradient text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Everything You Need</h2>
            <p className="text-sm md:text-base text-white/90">All KudiTime features available on mobile</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">₿</span>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">Crypto Trading</h3>
                <p className="text-xs md:text-sm text-white/80">Buy and sell Bitcoin, Ethereum, USDT and other cryptocurrencies</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">💳</span>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">Bill Payments</h3>
                <p className="text-xs md:text-sm text-white/80">Pay for airtime, data, electricity, TV subscriptions and more</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">🎁</span>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">Gift Card Trading</h3>
                <p className="text-xs md:text-sm text-white/80">Sell gift cards from Amazon, iTunes, Google Play and more</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">📊</span>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">Rate Calculator</h3>
                <p className="text-xs md:text-sm text-white/80">Calculate crypto and gift card rates before trading</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">🔔</span>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">Push Notifications</h3>
                <p className="text-xs md:text-sm text-white/80">Get notified about rate changes and transaction updates</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">📱</span>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">Biometric Security</h3>
                <p className="text-xs md:text-sm text-white/80">Secure login with fingerprint and face recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">System Requirements</h2>
            <p className="text-sm md:text-base text-gray-600">Make sure your device is compatible</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">🤖</span>
                  Android Requirements
                </h3>
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                  <li>• Android 6.0 (API level 23) or higher</li>
                  <li>• 2GB RAM minimum (4GB recommended)</li>
                  <li>• 100MB free storage space</li>
                  <li>• Internet connection required</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">🍎</span>
                  iOS Requirements
                </h3>
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                  <li>• iOS 12.0 or later</li>
                  <li>• Compatible with iPhone, iPad, iPod touch</li>
                  <li>• 100MB free storage space</li>
                  <li>• Internet connection required</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 md:py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
            Download the KudiTime app today and start your crypto journey
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 flex items-center space-x-2">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download for Android</span>
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 border-white text-white hover:bg-white hover:text-primary flex items-center space-x-2">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download for iOS</span>
            </Button>
          </div>
          <p className="text-white/60 text-xs md:text-sm mt-3 md:mt-4">Free download • No subscription required</p>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
