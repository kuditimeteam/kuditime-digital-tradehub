import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Coins, Gift, Menu, Smartphone, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { assetLinks, productLinks, resourceLinks, siteConfig } from '@/config/site';
import kudiLogo from '@/assets/kuditime-logo.png';

const productIcons = [Coins, Gift, Zap];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // The bar starts transparent over the hero and gains a border + blur once
  // the page moves, so it never sits on top of content as a hard slab.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer on navigation, and stop the page behind it scrolling.
  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const triggerClass =
    'group flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground/75 outline-none transition-colors hover:text-foreground data-[state=open]:text-foreground';

  const linkClass = (path: string) =>
    cn(
      'rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
      isActive(path) ? 'text-primary' : 'text-foreground/75'
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm'
      )}
    >
      <nav className="container-page" aria-label="Main">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label="Kuditime home">
            <img src={kudiLogo} alt="Kuditime" className="h-8 w-auto sm:h-9" />
          </Link>

          {/* ----------------------------- Desktop ----------------------------- */}
          <div className="hidden items-center gap-1 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className={triggerClass}>
                Products
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={12} className="w-80 rounded-2xl p-2 shadow-lifted">
                {productLinks.map((item, i) => {
                  const Icon = productIcons[i];
                  return (
                    <DropdownMenuItem key={item.href} asChild className="rounded-xl p-0">
                      <Link to={item.href} className="flex w-full items-start gap-3 p-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                          <span className="block text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={triggerClass}>
                Assets
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={12} className="w-[26rem] rounded-2xl p-2 shadow-lifted">
                <div className="grid grid-cols-2 gap-1">
                  {assetLinks.map((asset) => (
                    <DropdownMenuItem key={asset.href} asChild className="rounded-xl p-0">
                      <Link to={asset.href} className="flex w-full items-center gap-3 p-2.5">
                        <span
                          className={cn(
                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                            asset.tint
                          )}
                        >
                          {asset.glyph}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">{asset.title}</span>
                          <span className="block text-xs text-muted-foreground">{asset.symbol}</span>
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={triggerClass}>
                Company
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={12} className="w-56 rounded-2xl p-2 shadow-lifted">
                <DropdownMenuItem asChild className="rounded-xl">
                  <Link to="/about" className="w-full text-sm">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl">
                  <Link to="/careers" className="w-full text-sm">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl">
                  <Link to="/faq" className="w-full text-sm">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl">
                  <Link to="/terms" className="w-full text-sm">Terms & Conditions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl">
                  <Link to="/privacy" className="w-full text-sm">Privacy Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/support" className={linkClass('/support')}>
              Support
            </Link>
            <Link to="/download" className={linkClass('/download')}>
              Download
            </Link>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" className="rounded-full text-sm font-semibold">
              <a href={siteConfig.tradeUrl} target="_blank" rel="noreferrer noopener">
                Log in
              </a>
            </Button>
            <Button asChild className="rounded-full px-5 text-sm font-semibold shadow-glow">
              <a href={siteConfig.tradeUrl} target="_blank" rel="noreferrer noopener">
                Get started
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* ------------------------------ Mobile ----------------------------- */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto overscroll-contain border-t border-border bg-background lg:hidden">
          <div className="container-page space-y-8 py-8">
            <MobileGroup title="Products">
              {productLinks.map((item) => (
                <MobileLink key={item.href} to={item.href}>
                  {item.title}
                </MobileLink>
              ))}
            </MobileGroup>

            <MobileGroup title="Assets">
              <div className="grid grid-cols-2 gap-x-4">
                {assetLinks.map((asset) => (
                  <MobileLink key={asset.href} to={asset.href}>
                    {asset.title}
                  </MobileLink>
                ))}
              </div>
            </MobileGroup>

            <MobileGroup title="Company">
              <MobileLink to="/about">About Us</MobileLink>
              <MobileLink to="/careers">Careers</MobileLink>
              {resourceLinks.map((item) => (
                <MobileLink key={item.href} to={item.href}>
                  {item.title}
                </MobileLink>
              ))}
            </MobileGroup>

            <div className="space-y-3 border-t border-border pt-6">
              <Button asChild size="lg" className="w-full rounded-full text-base font-semibold">
                <a href={siteConfig.tradeUrl} target="_blank" rel="noreferrer noopener">
                  Get started
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full rounded-full text-base font-semibold">
                <Link to="/download">
                  <Smartphone className="mr-1.5 h-4 w-4" />
                  Download the app
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const MobileGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{title}</p>
    <div className="space-y-1">{children}</div>
  </div>
);

const MobileLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block py-2 text-lg font-semibold text-foreground transition-colors hover:text-primary"
  >
    {children}
  </Link>
);

export default Navigation;
