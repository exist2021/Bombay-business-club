import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-16 h-16 text-primary group-hover:text-accent-foreground transition-colors" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6 md:gap-8 text-lg">
            <Link href="/" className="text-primary/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#author" className="text-primary/80 hover:text-primary transition-colors">
              Author
            </Link>
            <Link href="/chapters" className="text-primary/80 hover:text-primary transition-colors">
              Read Free Chapters
            </Link>
          </nav>
          <Button className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://2532618660820.gumroad.com/l/zsgti" target="_blank">Download for free</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                <SheetClose asChild>
                  <Link href="/" className="text-2xl text-primary/80 hover:text-primary transition-colors">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#author" className="text-2xl text-primary/80 hover:text-primary transition-colors">
                    Author
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/chapters" className="text-2xl text-primary/80 hover:text-primary transition-colors">
                    Read Free Chapters
                  </Link>
                </SheetClose>
                <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
                  <Link href="https://2532618660820.gumroad.com/l/zsgti" target="_blank">Download for free</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
