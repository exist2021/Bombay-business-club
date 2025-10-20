import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-16 h-16 text-primary group-hover:text-accent-foreground transition-colors" />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6 md:gap-8 text-lg">
            <Link href="/" className="text-primary/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#author" className="text-primary/80 hover:text-primary transition-colors">
              Author
            </Link>
            <Link href="/chapters" className="text-primary/80 hover:text-primary transition-colors">
              Chapters
            </Link>
          </nav>
          <Button className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]">
            Subscribe & Support
          </Button>
        </div>
      </div>
    </header>
  );
}
