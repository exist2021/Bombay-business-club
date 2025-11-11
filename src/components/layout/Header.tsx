
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
  
  const amazonINLink = "https://www.amazon.in/dp/B0D44P723G";
  const amazonCOMLink = "https://www.amazon.com/Bombay-Business-Club-Daughters-Devotion/dp/B0G1N5K34Q/ref=tmm_pap_swatch_0";
  const koboLink = "https://www.kobo.com/in/en/ebook/the-bombay-business-club?sId=542882e6-25df-4be5-8d6b-3969f246e08b&ssId=0ZBFMY-hj5_XrG0gAedWY&cPos=1";
  const gumroadLink = "https://2532618660820.gumroad.com/l/zsgti?_gl=1*j7704z*_ga*MTA4MzAwMzI5MC4xNzYyNDMxMTEz*_ga_6LJN6D94N6*czE3NjI4ODYyMTEkbzYkZzAkdDE3NjI4ODYyMTEkajYwJGwwJGgw";

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/#author', text: 'Author' },
    { href: '/chapters', text: 'Read' },
    { href: '/quiz', text: 'Survival Quiz' },
  ];

  const BuyTheBookDropdown = ({ isMobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isMobile ? (
          <button className="flex w-full items-center justify-center text-2xl text-primary/80 hover:text-primary transition-colors">
            Buy the Book <ChevronDown className="h-6 w-6 ml-1" />
          </button>
        ) : (
          <Button size="default" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]">
            Buy the Book
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={amazonINLink} target="_blank" rel="noopener noreferrer">Amazon.in</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={amazonCOMLink} target="_blank" rel="noopener noreferrer">Amazon.com</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={koboLink} target="_blank" rel="noopener noreferrer">Kobo</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={gumroadLink} target="_blank" rel="noopener noreferrer">Gumroad</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

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
          <BuyTheBookDropdown />
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
              
              <div className="mt-6">
                <BuyTheBookDropdown isMobile={true} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
