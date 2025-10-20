import Link from 'next/link';
import Image from 'next/image';
import { SupportButton } from '@/components/novel/SupportButton';
import { SubscribeButton } from '@/components/novel/SubscribeButton';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="https://i.postimg.cc/ZqQgk563/JPEG-image-4-FBB-AEB8-BE-0.jpg" alt="Anya Chandra Logo" width={40} height={40} className="rounded-full group-hover:scale-110 transition-transform" />
          <h1 className="text-2xl font-headline font-bold text-foreground">A novel by Manoj Nayak</h1>
        </Link>
        <div className="flex items-center gap-2">
          <SubscribeButton />
          <SupportButton />
        </div>
      </div>
    </header>
  );
}
