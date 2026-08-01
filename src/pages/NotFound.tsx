import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { productLinks, resourceLinks } from '@/config/site';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60" aria-hidden="true" />
      <div
        className="glow-brand pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
          <Compass className="h-7 w-7" />
        </span>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">This page took a wrong turn</h1>
        <p className="mt-5 max-w-lg text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Here's the way back.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-full px-8 text-base font-semibold">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full bg-background/70 px-8 text-base font-semibold backdrop-blur"
          >
            <Link to="/support">Contact support</Link>
          </Button>
        </div>

        <div className="mt-14 w-full max-w-2xl border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Popular pages
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {[...productLinks, ...resourceLinks].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
