
import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { bookCover } from '@/lib/chapters';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const amazonLinks = {
    in: "https://www.amazon.in/dp/B0FXRW8RPY",
    us: "https://www.amazon.com/Bombay-Business-Club-Daughters-Devotion/dp/B0G1N5K34Q/ref=tmm_pap_swatch_0"
  };

  const BuyBookButton = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]">
          Buy the Book <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={amazonLinks.in} target="_blank">Amazon India</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={amazonLinks.us} target="_blank">Amazon.com (US)</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center py-12 md:py-20 relative">
          <div 
            className="absolute inset-0 bg-radial-gradient--t opacity-30" 
            style={{
              background: 'radial-gradient(ellipse at top, hsl(var(--primary) / 0.15), transparent 60%)'
            }}
          />
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            The Bombay Business Club
          </h1>
          <p className="mt-4 max-w-2xl text-xl md:text-2xl text-foreground/80 font-serif">
            Behind Bombay’s glittering elite lies a business built on buried secrets.
          </p>
          
          <div className="mt-12 w-full max-w-2xl aspect-video relative bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1135209706"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className='absolute top-0 left-0 w-full h-full'
              title="The Bombay Business Club - Book Trailer"
            ></iframe>
          </div>
          
          <div className="mt-12">
            <BuyBookButton />
          </div>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Synopsis Section */}
        <section id="synopsis" className="max-w-4xl mx-auto scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8 text-center">Synopsis</h2>
          <div className="space-y-4 text-xl md:text-2xl text-foreground/90 font-serif leading-relaxed text-left">
            <p>The Bombay Business Club is a dark, hypnotic tale about three people bound by love, control, and the invisible machinery of wealth.</p>
            <p>A daughter is born with the power to bend minds.</p>
            <p>A father builds an empire on her obedience.</p>
            <p>And a man from outside their world mistakes her captivity for connection.</p>
            <p>Set amid Mumbai’s billionaires and their secret occult networks, the story traces a dynasty where clairvoyance is inherited like property, and affection is just another instrument of control. As the daughter’s devotion deepens, it becomes impossible to tell where love ends and possession begins.</p>
            <p>When the outsider enters their orbit, desire turns into a test of class, magic, and morality—pulling him into the same web of manipulation that once trapped her.</p>
            <p>In this world, family is business. Business is war.</p>
            <p>And devotion is the most dangerous spell of all.</p>
            <p>Told with the intensity of Succession and the sensual unease of The Night Circus, The Bombay Business Club is a portrait of wealth’s quiet violence—where every act of love is also an act of power.</p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Buy Section */}
        <section id="buy" className="max-w-4xl mx-auto text-center scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8">Buy the Book</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="md:w-2/3 text-lg md:text-xl text-foreground/90 font-serif leading-relaxed text-center md:text-left mb-8 md:mb-0 space-y-4">
              <p>Buy your copy of The Bombay Business Club today.</p>
              <p className="text-base text-foreground/70">
                Your purchase is for the digital ebook, which will be automatically delivered to your Kindle library.
              </p>
              <BuyBookButton />
            </div>
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-64 h-96 mx-auto md:mx-0 relative bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] flex items-center justify-center overflow-hidden">
                <Image 
                  src={bookCover.imageUrl}
                  alt={bookCover.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={bookCover.imageHint}
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Author Section */}
        <section id="author" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-mt-20">
          <Image 
            src="https://i.postimg.cc/ZR93sssq/IMG-4571.jpg" 
            alt="Author Portrait" 
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/30 shadow-lg"
            data-ai-hint="author portrait"
          />
          <div className='text-center md:text-left'>
            <h2 className="text-4xl font-headline text-primary mb-4">About the Author</h2>
            <p className="text-xl md:text-2xl text-foreground/90 font-serif leading-relaxed">
              <a href="https://manojnayak.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Manoj Nayak</a> is a writer, digital creator, and storyteller exploring the intersections of technology, philosophy, and human connection. His writing portfolio spans long-form essays, newsletters, and short stories that blend reflection with real-world observation. Through his website manojnayak.com and platforms like Substack, he builds what he calls “vibe-coded” narratives—bridging creativity and consciousness. Previously a community builder and entrepreneur, Manoj now focuses on personal knowledge management, experimental apps, and essay-driven media. His recent works, such as “Sadhu Laxmandas,” draw from his nomadic travels across India, combining introspection, humor, and wisdom to illuminate the search for meaning.
            </p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Read a Chapter Section */}
        <section id="read-chapter" className="max-w-2xl mx-auto text-center scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8">Read Free Chapters</h2>
          <p className="text-lg md:text-xl text-foreground/90 font-serif leading-relaxed mb-8">
            Be among the first to delve into the mysteries of The Bombay Business Club. Read the first eight chapters for free.
          </p>
          <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="/chapters">Read Free Chapters</Link>
          </Button>
        </section>
      </div>
    </AnimatedDiv>
  );
}
