
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-primary py-16 relative overflow-hidden rounded-3xl mx-4 mb-8">
        {/* Rating Badge */}
        <div className="absolute top-8 left-8 flex items-center gap-2 bg-yellow-400 text-black rounded-2xl px-4 py-2 rotate-12 transform">
          <span className="font-bold text-lg">Rated 4.9</span>
          <Star className="w-5 h-5 fill-current" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
                  Join KudiTime Today - <br />
                  It's Free
                </h2>
                <p className="text-xl text-white/80 max-w-lg">
                  Buy & sell gift cards, convert crypto, activate eSIMs, and pay bills — all from one powerful app.
                </p>
              </div>

              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  Register on website <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <div className="border-t border-white/30 border-dotted pt-6">
                  <p className="text-white/80 mb-4 text-lg">Get the app now:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-black text-white hover:bg-gray-800 px-6 py-3"
                    >
                      🍎 App Store
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-black text-white hover:bg-gray-800 px-6 py-3"
                    >
                      📱 Google Play
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Mobile Mockups */}
            <div className="relative">
              <div className="flex items-center justify-center gap-4">
                {/* Left Phone */}
                <div className="bg-black rounded-[2.5rem] p-3 shadow-2xl transform rotate-6">
                  <div className="bg-white rounded-2xl p-6 w-64 h-96 overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Hello Kingsley 👋</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-100 rounded-xl p-4">
                        <p className="text-2xl font-bold text-gray-900">₦ 100,369.00</p>
                        <Button size="sm" className="bg-primary text-white mt-2 hover:bg-primary/90">
                          Withdraw
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-primary rounded"></div>
                        </div>
                        <p className="text-xs text-gray-600">Gift Cards</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-600">Crypto</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-primary rounded"></div>
                        </div>
                        <p className="text-xs text-gray-600">Bills</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-primary rounded"></div>
                        </div>
                        <p className="text-xs text-gray-600">eSIM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Phone */}
                <div className="bg-black rounded-[2.5rem] p-3 shadow-2xl transform -rotate-6">
                  <div className="bg-white rounded-2xl p-6 w-64 h-96 overflow-hidden">
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-lg text-gray-900">Markets</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gray-900">₦83.57 B</p>
                        <p className="text-sm text-gray-600">Fear & Greed Index</p>
                        <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mt-2 flex items-center justify-center">
                          <span className="text-primary font-bold">74</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-medium">₦9,978.00</span>
                        <span className="text-primary text-sm">+0.58%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-medium">₦9,978.00</span>
                        <span className="text-destructive text-sm">-0.58%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold">KudiTime</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nigeria's leading crypto exchange and bill payment platform. Trade cryptocurrency, 
              pay bills, and sell gift cards with the best rates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/crypto" className="text-gray-400 hover:text-primary transition-colors">Crypto Trading</Link></li>
              <li><Link to="/bills" className="text-gray-400 hover:text-primary transition-colors">Bill Payment</Link></li>
              <li><Link to="/giftcards" className="text-gray-400 hover:text-primary transition-colors">Gift Cards</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-primary transition-colors">Rate Calculator</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 KudiTime. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
