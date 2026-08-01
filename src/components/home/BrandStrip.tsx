import Marquee from '@/components/site/Marquee';
import Reveal from '@/components/site/Reveal';
import amazon from '@/assets/amazon.png';
import apple from '@/assets/apple.png';
import netflix from '@/assets/netflix.png';
import playstation from '@/assets/playstation.png';
import spotify from '@/assets/spotify.png';
import steam from '@/assets/steam.png';
import xbox from '@/assets/xbox.jpeg';
import googleplay from '@/assets/googleplay.jpeg';

const brands = [
  { name: 'Amazon', logo: amazon },
  { name: 'Apple / iTunes', logo: apple },
  { name: 'Steam', logo: steam },
  { name: 'Google Play', logo: googleplay },
  { name: 'PlayStation', logo: playstation },
  { name: 'Xbox', logo: xbox },
  { name: 'Netflix', logo: netflix },
  { name: 'Spotify', logo: spotify },
];

const BrandStrip = () => (
  <section className="bg-background py-14 sm:py-16">
    <Reveal className="container-page text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Redeem 100+ gift card brands for instant cash
      </p>
    </Reveal>

    <Reveal className="mt-9" delay={120}>
      <Marquee durationSec={38}>
        {brands.map((brand) => (
          <div key={brand.name} className="px-7 sm:px-10">
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              className="h-9 w-auto max-w-[8rem] object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11"
            />
          </div>
        ))}
      </Marquee>
    </Reveal>
  </section>
);

export default BrandStrip;
