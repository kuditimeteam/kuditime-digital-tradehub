
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Music2, Star, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import mobileAppImage from '@/assets/pho.png';
import MobileApp from './MobileApp';
import kudiLogo from '@/assets/kudilogo.png';

const  Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
        <br />
        <br />{/* CTA Section */}
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
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6" style={{ marginTop: '60px' }}>
                  Join Kuditime Today - <br />
                  It's Free
                </h2>
                <p className="text-xl text-white/80 max-w-lg">
                  Sell gift cards, convert crypto to naira, and pay bills — all from one powerful app.
                </p>
              </div>

              <div className="space-y-6">
                <a href="https://linktr.ee/kuditime_">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  Register on website <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </a>

                <div className="border-t border-white/30 border-dotted pt-6">
                  <p className="text-white/80 mb-4 text-lg">Get the app now:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://apps.apple.com/app/kuditime/id6446061749">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-white text-primary hover:bg-gray-800 px-6 py-3"
                    >
                      App Store
                    </Button>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.kuditime">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-white text-primary hover:bg-gray-800 px-6 py-3"
                    >
                       Google Play
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content - Single Mobile App */}
            <div className="relative flex justify-center">
              <div className="max-w-sm">
                <img 
                  src={mobileAppImage} 
                  alt="Kuditime Mobile App" 
                  className="w-full h-auto rounded-2xl shadow-2xl max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-2">
           
            <div className="flex items-center space-x-2 mb-4">
                <a href="https://kuditime.com">
                 <img 
                  src={kudiLogo} 
                  alt="Kuditime Mobile App" 
                  className="w-[90px]"
                />
                </a>
               {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div> */}
            
              {/* <span className="text-xl font-bold"></span> */}
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nigeria's leading crypto exchange and bill payment platform. Trade cryptocurrency, 
              pay bills, and sell gift cards with the best rates.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/story.php/?story_fbid=122144552474097163&id=61552914891730" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/kuditime_hq?s=21" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kuditime_hq/profilecard/?igsh=ZG1wcDU3ZnY4ZDJk" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@kuditime_hq?_t=ZS-8yyr4RcTAx8&_r=1" className="text-gray-400 hover:text-primary transition-colors">
                <Music2 className="w-5 h-5" />
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
            © 2025 Kuditime. All rights reserved.
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
