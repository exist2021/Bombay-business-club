
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
          <p className="mt-4 max-w-2xl text-xl text-foreground/80 font-serif">
            Behind Bombay’s glittering elite lies a business built on buried secrets.
          </p>
          
          <div className="mt-12 w-full max-w-2xl aspect-video relative bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1128958261"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className='absolute top-0 left-0 w-full h-full'
              title="The Bombay Business Club - Book Trailer"
            ></iframe>
          </div>
          
          <Button size="lg" className="mt-12 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://www.amazon.in/dp/B0FXRW8RPY" target="_blank">Pre-order on Amazon</Link>
          </Button>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Synopsis Section */}
        <section id="synopsis" className="max-w-4xl mx-auto scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8 text-center">Synopsis</h2>
          <div className="space-y-4 text-lg text-foreground/90 font-serif leading-relaxed text-left">
            <p>The Bombay Business Club is a sweeping, hypnotic family saga about power, inheritance, and the invisible machinery of control that runs through Mumbai’s elite. It’s a story of one woman’s struggle to break free from the gilded cage built by her parents — a dynasty where wealth, manipulation, and clairvoyance are passed down like heirlooms.</p>
            <p>At fifteen, Anya Chandra discovers she can bend people’s minds to her will. Her father, Vikash Chandra, the Harvard-educated patriarch of India’s tenth-largest conglomerate, sees not a gift — but a weapon. From that moment, Anya becomes an invisible instrument of his empire: her clairvoyance used to read competitors, dismantle enemies, and protect a fortune built on Partition-era blood money.</p>
            <p>Under Vikash’s cold, exacting eye and her mother Maya’s elegant complicity, Anya learns that power isn’t about words — it’s about what can be controlled without being seen. As she grows up among the marble corridors of Malabar Hill, she’s trained not in affection, but in strategy; not in empathy, but in obedience.</p>
            <p>But obedience comes with a price.</p>
            <p>Across nine interlinked chapters spanning two decades, Anya’s journey unfolds through betrayals both intimate and political — a destroyed actress, a forbidden love in New York, a sister’s marriage torn apart, a YouTuber’s manufactured fame, and the quiet ruin of every man who loved her.</p>
            <p>Each story deepens the web — revealing how the Bombay Business Club, a network of billionaires who secretly shape the city’s destiny, governs through loyalty, fear, and ancient occult knowledge.</p>
            <p>In this world, family is business. Business is war. And love is just another asset to be managed.</p>
            <p>By thirty, Anya begins to see the truth: that she has been used her entire life — her gifts turned against the very people she tried to save. Her father controls governments; her mother controls hearts; and she controls nothing but the ghosts of her own choices.</p>
            <p>When an old lover reappears, and the lines between loyalty and revenge blur, Anya must decide whether to continue serving the empire that raised her — or destroy it from within.</p>
            <p>Told with the psychological intensity of Succession, the dark glamour of The White Lotus, and the mystical undercurrents of The Night Circus, The Bombay Business Club is a haunting portrait of Mumbai’s elite — where magic meets money, and the cost of power is always personal.</p>
            <p>This is not a story about rebellion. It’s about complicity — about the quiet ways women survive inside systems designed to consume them.</p>
            <p>Through Anya’s eyes, we see a city where skyscrapers rise on silence, where love is currency, and where even clairvoyance cannot predict the one thing that truly matters: freedom.</p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Pre-order Section */}
        <section id="preorder" className="max-w-4xl mx-auto text-center scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8">Pre-order the Book</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="md:w-2/3 text-lg text-foreground/90 font-serif leading-relaxed text-center md:text-left mb-8 md:mb-0 space-y-4">
              <p>Pre-order your copy of The Bombay Business Club today.</p>
              <p className="text-base text-foreground/70">
                Your pre-order is for the digital ebook, which will be automatically delivered to your Kindle library on release day.
              </p>
              <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
                <Link href="https://www.amazon.in/dp/B0FXRW8RPY" target="_blank">
                  Pre-order on Amazon
                </Link>
              </Button>
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
            <p className="text-lg text-foreground/90 font-serif leading-relaxed">
              <a href="https://manojnayak.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Manoj Nayak</a> is a writer, digital creator, and storyteller exploring the intersections of technology, philosophy, and human connection. His writing portfolio spans long-form essays, newsletters, and short stories that blend reflection with real-world observation. Through his website manojnayak.com and platforms like Substack, he builds what he calls “vibe-coded” narratives—bridging creativity and consciousness. Previously a community builder and entrepreneur, Manoj now focuses on personal knowledge management, experimental apps, and essay-driven media. His recent works, such as “Sadhu Laxmandas,” draw from his nomadic travels across India, combining introspection, humor, and wisdom to illuminate the search for meaning.
            </p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Read a Chapter Section */}
        <section id="read-chapter" className="max-w-2xl mx-auto text-center scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8">Read Free Chapters</h2>
          <p className="text-lg text-foreground/90 font-serif leading-relaxed mb-8">
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
