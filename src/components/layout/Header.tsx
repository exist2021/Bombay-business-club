import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-center">
        <nav className="flex items-center gap-6 md:gap-8 text-lg">
          <Link href="/" className="text-primary/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-wider order-first md:order-none">
            The Obsidian Scroll
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
