import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-16 h-16 text-primary group-hover:text-accent-foreground transition-colors" />
          <h1 className="text-2xl font-headline font-bold text-foreground">Bombay Business Club</h1>
        </Link>
        <nav className="flex items-center gap-6 md:gap-8 text-lg">
          <Link href="/" className="text-primary/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#synopsis" className="text-primary/80 hover:text-primary transition-colors">
            Synopsis
          </Link>
          <Link href="#author" className="text-primary/80 hover:text-primary transition-colors">
            Author
          </Link>
          <Link href="#pre-order" className="text-primary/80 hover:text-primary transition-colors">
            Pre-Order
          </Link>
        </nav>
      </div>
    </header>
  );
}
