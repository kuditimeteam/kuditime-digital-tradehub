/** Single source of truth for outbound links, store URLs and contact details. */

export const siteConfig = {
  name: 'Kuditime',
  domain: 'kuditime.com',
  email: 'hi@kuditime.com',
  /** Where every "Trade now / Get started" CTA points until web onboarding ships. */
  tradeUrl: 'https://linktr.ee/kuditime_',
  appStore: 'https://apps.apple.com/us/app/kuditime-trade-gift-cards/id6446061749',
  playStore: 'https://play.google.com/store/apps/details?id=com.kuditime',
  socials: {
    x: 'https://x.com/kuditime_hq?s=21',
    instagram: 'https://www.instagram.com/kuditime_hq/profilecard/?igsh=ZG1wcDU3ZnY4ZDJk',
    facebook:
      'https://www.facebook.com/story.php/?story_fbid=122144552474097163&id=61552914891730',
    tiktok: 'https://www.tiktok.com/@kuditime_hq?_t=ZS-8yyr4RcTAx8&_r=1',
  },
} as const;

export const productLinks = [
  {
    title: 'Crypto Trading',
    href: '/crypto',
    description: 'Sell BTC, ETH, USDT and more for Naira',
  },
  {
    title: 'Gift Cards',
    href: '/giftcards',
    description: 'Redeem 100+ brands for instant cash',
  },
  {
    title: 'Bill Payment',
    href: '/bills',
    description: 'Airtime, data, electricity, TV & betting',
  },
] as const;

export const assetLinks = [
  { title: 'Bitcoin', symbol: 'BTC', href: '/assets/bitcoin', glyph: '₿', tint: 'bg-orange-100 text-orange-600' },
  { title: 'Ethereum', symbol: 'ETH', href: '/assets/ethereum', glyph: 'Ξ', tint: 'bg-indigo-100 text-indigo-600' },
  { title: 'Tether', symbol: 'USDT', href: '/assets/usdt', glyph: '₮', tint: 'bg-emerald-100 text-emerald-600' },
  { title: 'USD Coin', symbol: 'USDC', href: '/assets/usdc', glyph: '$', tint: 'bg-sky-100 text-sky-600' },
  { title: 'TRON', symbol: 'TRX', href: '/assets/tron', glyph: '▼', tint: 'bg-rose-100 text-rose-600' },
  { title: 'Litecoin', symbol: 'LTC', href: '/assets/litecoin', glyph: 'Ł', tint: 'bg-slate-100 text-slate-600' },
] as const;

export const companyLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Careers', href: '/careers' },
  { title: 'Blog', href: '/blog' },
  { title: 'Support', href: '/support' },
] as const;

export const legalLinks = [
  { title: 'Terms & Conditions', href: '/terms' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Cookie Policy', href: '/cookies' },
  { title: 'Delete My Data', href: '/delete-data' },
] as const;

export const resourceLinks = [
  { title: 'FAQ', href: '/faq' },
  { title: 'Support', href: '/support' },
  { title: 'Download App', href: '/download' },
] as const;
