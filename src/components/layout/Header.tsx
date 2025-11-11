
"use client";

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.2.2-.4.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4-.1-.1-1.3-3.1-1.8-4.2-.5-1.1-.9-1 .1-2.1.2-.2.5-.2.7-.2h.4c.2 0 .5.1.8.4.3.3 1.1 1.1 1.1 2.6 0 1.5-.7 2.9-1.1 3.5-.4.6-.9 1-1.2 1.2-.3.2-.6.4-.8.5-.2.1-.4.2-.6.1-.2-.1-.4-.2-.5-.3s-.4-.5-.5-.7c-.1-.2-.2-.4-.2-.6s0-.4.1-.5c.1-.1.2-.2.4-.4.2-.1.3-.2.5-.4.2-.1.3-.3.2-.5-.1-.2-.6-1.5-.8-2.1-.2-.6-.4-1.1-.6-1.5-.2-.4-.3-.6-.5-.8-.2-.2-.4-.3-.6-.3h-.4c-.2 0-.5.1-.7.2-.2.2-.5.4-.7.6-.2.2-.5.5-.7.8-.2.3-.5.7-.6 1-.1.3-.2.6-.2 1s-.1 1.5.1 2.2c.2.7.5 1.4 1 2 .5.6 1.1 1.2 1.8 1.7.7.5 1.5.9 2.4 1.2.9.3 1.8.4 2.7.4.9 0 1.8-.1 2.7-.4.9-.3 1.8-.7 2.6-1.2.8-.5 1.5-1.2 2.1-2 .6-.8 1.1-1.7 1.4-2.6.3-.9.4-1.9.4-2.9 0-1-.1-1.9-.2-2.8-.1-.9-.3-1.8-.5-2.7-.2-.9-.5-1.7-.8-2.5-.3-.8-.7-1.6-1.2-2.3-.5-.7-1-1.4-1.6-2-.6-.6-1.3-1.2-2-1.7-.7-.5-1.5-.9-2.3-1.3-.8-.4-1.7-.7-2.6-.9-1-.2-1.9-.3-2.9-.3-1 0-2 .1-2.9.3s-1.8.4-2.7.7c-.9.3-1.7.6-2.5 1-.8.4-1.6.8-2.3 1.3-.7.5-1.4 1-2 1.6-.6.6-1.2 1.3-1.7 2-.5.7-1 1.4-1.3 2.2-.3.8-.6 1.7-.8 2.6-.2.9-.3 1.9-.3 2.8s.1 1.9.3 2.8c.1.9.4 1.8.7 2.7.3.9.7 1.7 1.1 2.5.4.8.9 1.6 1.5 2.3.6.7 1.2 1.4 1.9 2 .7.6 1.4 1.2 2.2 1.7.8.5 1.6.9 2.5 1.3.9.4 1.8.7 2.7.9 1 .2 1.9.3 2.9.3h.1c1.5 0 2.9-.3 4.3-.8s2.7-1.2 3.9-2.1c1.2-.9 2.3-2 3.2-3.3.9-1.3 1.6-2.7 2-4.2.4-1.5.6-3 .6-4.6s-.2-3.1-.6-4.6c-.4-1.5-1-2.9-1.8-4.3-.8-1.4-1.8-2.6-3-3.7-1.2-1.1-2.5-2.1-3.9-2.9-1.4-.8-2.9-1.5-4.5-2-1.6-.5-3.2-.8-4.9-.8-1.7 0-3.3.3-4.9.8-1.6.5-3.1 1.2-4.5 2-1.4.8-2.7 1.8-3.9 2.9-1.2 1.1-2.2 2.3-3 3.7-.8 1.4-1.4 2.9-1.8 4.3-.4 1.5-.6 3-.6 4.6s.2 3.1.6 4.6c.4 1.5 1.1 2.9 2 4.2.9 1.3 2 2.5 3.2 3.5 1.2 1 2.5 1.9 3.9 2.6s2.9 1.2 4.4 1.5c1.5.3 3 .5 4.5.5h.1c.2 0 .4 0 .6-.1.2 0 .4-.1.6-.1l.1-.1c.2 0 .4-.1.5-.1.2 0 .3-.1.5-.2.2-.1.4-.1.6-.2.2-.1.4-.2.5-.3.2-.1.3-.2.5-.3.2-.1.4-.2.5-.3.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3.1-.1.2-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3l.1-.3c.1-.1.1-.2.1-.3.1-.1.1-.2.1-.3.1-.1.1-.2.1-.3.1-.1.1-.2.1-.3.1-.1.1-.2.1-.3.1-.1.1-.2.1-.3v-.1c.3-1.1.5-2.2.5-3.3 0-1.1-.1-2.2-.4-3.3-.3-1.1-.7-2.2-1.2-3.2s-1.1-2-1.8-2.9c-.7-.9-1.5-1.8-2.4-2.6-.9-.8-1.9-1.5-2.9-2.2-.9-.7-2-1.3-3-1.8-1-.5-2.1-1-3.2-1.3-1.1-.3-2.2-.5-3.3-.6-1.1-.1-2.2-.2-3.3-.2-1.1 0-2.2.1-3.3.2-1.1.1-2.2.3-3.3.6-1.1.3-2.1.7-3.2 1.3-1 .5-2 1.1-3 1.8s-1.9-1.5-2.9-2.2c-.9-.7-1.8-1.5-2.6-2.4-.8.9-1.6 1.8-2.3 2.8-.7 1-1.3 2-1.8 3.1-.5 1.1-.9 2.2-1.2 3.3-.3 1.1-.5 2.2-.6 3.3-.1 1.1-.2 2.2-.2 3.3s.1 2.2.2 3.3c.1 1.1.3 2.2.6 3.3.3 1.1.7 2.2 1.2 3.3.5 1.1 1.1 2.1 1.8 3.1.7 1 1.4 2 2.3 2.9.8.9 1.7 1.8 2.6 2.6.9.8 1.9 1.5 2.9 2.2.9.7 2 1.3 3 1.8s2.1 1 3.2 1.3c1.1.3 2.2.5 3.3.6 1.1.1 2.2.2 3.3.2 1.1 0 2.2-.1 3.3-.2 1.1-.1 2.2-.3 3.3-.6 1.1-.3 2.1-.7 3.2-1.3 1-.5 2-1.1 3-1.8s1.9-1.5 2.9-2.2c.9-.7 1.8-1.5 2.6-2.4.8-.9 1.6-1.8 2.3-2.8.7-1 1.3-2 1.8-3.1.5-1.1.9-2.2 1.2-3.3.3-1.1.5-2.2.6-3.3.1-1.1.2-2.2.2-3.3 0-.5 0-1-.1-1.5s-.1-1-.2-1.5c-.1-.5-.2-1-.4-1.5s-.3-.9-.5-1.4c-.2-.5-.4-1-.7-1.4-.2-.5-.5-.9-.8-1.4-.3-.5-.6-.9-.9-1.4-.4-.5-.7-.9-1.1-1.3-.4-.4-.8-.8-1.3-1.2-.5-.4-.9-.8-1.4-1.1-.5-.3-1-.6-1.5-.9-.5-.3-1-.6-1.5-.8-.5-.2-1-.4-1.5-.6-.5-.2-1-.4-1.5-.5-.5-.1-1-.3-1.5-.4-.5-.1-1-.2-1.5-.2h-1.5c-.5 0-1 .1-1.5.1s-1 .1-1.5.2c-.5.1-1 .2-1.5.3s-1 .3-1.4.4c-.5.2-.9.3-1.4.5s-.9.4-1.4.6c-.5.2-.9.5-1.4.7s-.9.5-1.3.8c-.4.3-.8.6-1.2.9-.4.3-.8.6-1.1.9-.4.3-.7.6-1 .9-.3.3-.6.5-.8.8-.2.3-.5.5-.7.8-.2.3-.4.5-.6.8-.2.3-.4.5-.5.8-.1.3-.3.5-.4.8-.1.3-.3.6-.4.9-.1.3-.2.6-.3.9-.1.3-.2.6-.3.9-.1.3-.2.5-.2.8s-.1.6-.1.9v.3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const emailTo = 'manoj@thebbc.shop';
  const emailSubject = 'feedback on your novel The Bombay Business Club';
  const mailtoHref = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`;

  const whatsAppHref = "https://chat.whatsapp.com/G6LHQqvoh21LFOfwpCeqKH";
  const instagramHref = "https://www.instagram.com/bombaybusinessclub?igsh=YWV0d3R1NWM2MXh6&utm_source=qr";

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/#author', text: 'Author' },
    { href: '/chapters', text: 'Read Free Chapters' },
    { href: '/quiz', text: 'Survival Quiz' },
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-primary/80 hover:text-primary transition-colors focus:outline-none">
              Contact <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href={mailtoHref}>Email</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={whatsAppHref} target="_blank" rel="noopener noreferrer">Join WhatsApp</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={instagramHref} target="_blank" rel="noopener noreferrer">Follow on Instagram</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="hidden md:flex">
          <Button className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://www.amazon.in/dp/B0FXRW8RPY" target="_blank">Pre-order on Amazon</Link>
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
               <Link href={mailtoHref} className="text-2xl text-primary/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Email</Link>
               <Link href={whatsAppHref} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>WhatsApp</Link>
               <Link href={instagramHref} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Instagram</Link>

              <Button
                size="lg"
                className="mt-6 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md"
                asChild
              >
                <Link
                  href="https://www.amazon.in/dp/B0FXRW8RPY"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pre-order on Amazon
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
