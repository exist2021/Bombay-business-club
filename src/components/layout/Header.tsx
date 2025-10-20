import Link from 'next/link';
import { BookMarked } from 'lucide-react';
import { SupportButton } from '@/components/novel/SupportButton';
import { SubscribeButton } from '@/components/novel/SubscribeButton';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <BookMarked className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
          <h1 className="text-2xl font-headline font-bold text-foreground">Bombay Reader</h1>
        </Link>
        <div className="flex items-center gap-2">
          <SubscribeButton />
          <SupportButton />
        </div>
      </div>
    </header>
  );
}
