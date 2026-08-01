import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Music2, Twitter } from 'lucide-react';
import {
  companyLinks,
  legalLinks,
  productLinks,
  resourceLinks,
  siteConfig,
} from '@/config/site';
import kudiLogo from '@/assets/kuditime-logo.png';

const socials = [
  { label: 'X (Twitter)', href: siteConfig.socials.x, icon: Twitter },
  { label: 'Instagram', href: siteConfig.socials.instagram, icon: Instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook, icon: Facebook },
  { label: 'TikTok', href: siteConfig.socials.tiktok, icon: Music2 },
];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: readonly { title: string; href: string }[];
}) => (
  <div>
    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{title}</h3>
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="text-sm text-white/70 transition-colors hover:text-lime"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-ink text-ink-foreground">
    <div className="container-page py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
        {/* Brand */}
        <div className="max-w-sm">
          <Link to="/" aria-label="Kuditime home">
            <img src={kudiLogo} alt="Kuditime" className="h-9 w-auto brightness-0 invert" />
          </Link>

          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Trade crypto and gift cards for Naira at the best rates, then pay your bills from the same
            balance. Built in Nigeria, for Nigerians.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-lime"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>

          <div className="mt-7 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/70 transition-colors hover:border-lime/50 hover:text-lime"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Company" links={companyLinks} />

        <div className="space-y-10">
          <FooterColumn title="Resources" links={resourceLinks} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Get the app
            </h3>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={siteConfig.appStore}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:border-lime/50 hover:text-lime"
              >
                App Store
              </a>
              <a
                href={siteConfig.playStore}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:border-lime/50 hover:text-lime"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/45">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="text-sm text-white/60 transition-colors hover:text-lime">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-white/35">
        Cryptocurrency trading carries risk and prices can move sharply. Kuditime is a digital asset and
        bill payment service — nothing on this site is investment advice.
      </p>
    </div>
  </footer>
);

export default Footer;
