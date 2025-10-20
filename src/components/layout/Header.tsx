
"use client";

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/#author', text: 'Author' },
    { href: '/chapters', text: 'Read Free Chapters' },
  ];

  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-16 h-16 text-primary group-hover:text-accent-foreground transition-colors" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 md:gap-8 text-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-primary/80 hover:text-primary transition-colors">
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://2532618660820.gumroad.com/l/zsgti" target="_blank">Download for free</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="absolute left-0 w-full bg-background mt-4 p-4">
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl text-primary/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Button
                size="lg"
                className="mt-6 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md"
                asChild
              >
                <Link
                  href="https://2532618660820.gumroad.com/l/zsgti"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download for free
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
