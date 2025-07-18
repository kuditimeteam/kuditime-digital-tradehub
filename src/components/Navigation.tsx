
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">KudiTime</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link to="/crypto" className="w-full">Crypto Trading</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/bills" className="w-full">Bill Payment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/giftcards" className="w-full">Gift Cards</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Assets</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white min-w-[200px]">
                <DropdownMenuItem>
                  <Link to="/assets" className="w-full font-medium">All Assets</Link>
                </DropdownMenuItem>
                <div className="border-t border-gray-100 my-1"></div>
                <DropdownMenuItem>
                  <Link to="/assets/bitcoin" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">₿</span>
                    </div>
                    <div>
                      <div className="font-medium">Bitcoin</div>
                      <div className="text-xs text-gray-500">Buy & Sell Bitcoin</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/assets/ethereum" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">♦</span>
                    </div>
                    <div>
                      <div className="font-medium">Ethereum</div>
                      <div className="text-xs text-gray-500">Buy & Sell Ethereum</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/assets/litecoin" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-bold">Ł</span>
                    </div>
                    <div>
                      <div className="font-medium">Litecoin</div>
                      <div className="text-xs text-gray-500">Buy & Sell Litecoin</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/assets/usdt" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">₮</span>
                    </div>
                    <div>
                      <div className="font-medium">USDT</div>
                      <div className="text-xs text-gray-500">Buy & Sell USDT</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/assets/binance-coin" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-xs font-bold">B</span>
                    </div>
                    <div>
                      <div className="font-medium">BNB</div>
                      <div className="text-xs text-gray-500">Buy & Sell Binance Coin</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/assets/tron" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">▼</span>
                    </div>
                    <div>
                      <div className="font-medium">TRON</div>
                      <div className="text-xs text-gray-500">Buy & Sell TRON</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/assets/dogecoin" className="w-full flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 text-xs font-bold">Ð</span>
                    </div>
                    <div>
                      <div className="font-medium">Dogecoin</div>
                      <div className="text-xs text-gray-500">Buy & Sell Dogecoin</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/calculator" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/calculator') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Rate Calculator</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/careers" className="w-full">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/terms" className="w-full">Terms & Conditions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/privacy" className="w-full">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cookies" className="w-full">Cookie Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/about" 
              className={`transition-colors ${
                isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              About
            </Link>

            <Link 
              to="/support" 
              className={`transition-colors ${
                isActive('/support') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Support
            </Link>

            <Link 
              to="/download" 
              className={`transition-colors ${
                isActive('/download') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Download
            </Link>

            <Button className="bg-primary hover:bg-primary/90">
              Trade Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/crypto" className="text-gray-700 hover:text-primary">Crypto Trading</Link>
              <Link to="/bills" className="text-gray-700 hover:text-primary">Bill Payment</Link>
              <Link to="/giftcards" className="text-gray-700 hover:text-primary">Gift Cards</Link>
              <Link to="/assets" className="text-gray-700 hover:text-primary">All Assets</Link>
              <Link to="/calculator" className="text-gray-700 hover:text-primary">Rate Calculator</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
              <Link to="/support" className="text-gray-700 hover:text-primary">Support</Link>
              <Link to="/download" className="text-gray-700 hover:text-primary">Download</Link>
              <Button className="bg-primary hover:bg-primary/90 w-fit">
                Trade Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
