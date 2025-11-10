import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-primary/20 mt-24">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mb-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund & Cancellation Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
        <div className="space-y-2">
          <p>&copy; {new Date().getFullYear()} The Bombay Business Club. All rights reserved.</p>
          <p>
            The website was vibecoded by <a href="https://manojnayak.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Manoj Nayak</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
