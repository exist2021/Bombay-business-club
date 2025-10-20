import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

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
            The Obsidian Scroll
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/80 font-serif">
            Where Secrets Are Bound In Ink and Shadow.
          </p>
          <div className="mt-12 w-64 h-96 bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] flex items-center justify-center">
             <span className="text-muted-foreground">Book Cover</span>
          </div>
          <Button size="lg" className="mt-12 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]">
            Acquire Your Copy
          </Button>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Synopsis Section */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
          <h2 className="text-4xl font-headline text-primary mb-8">Synopsis</h2>
          <div className="space-y-6 text-lg text-foreground/90 font-serif leading-relaxed text-left">
            <p>In the gaslit alleys of a city that never sleeps, where forgotten gods whisper from crumbling cathedrals and arcane societies trade in forbidden knowledge, a relic of immense power is rediscovered. The Obsidian Scroll, said to contain the final words of a dying cosmos, has resurfaced after centuries of slumber. Its ink is said to rewrite reality, its parchment a map to the heart of creation itself.</p>
            <p>Elara, a gifted but disgraced scribe cast out for her unorthodox methods, is the only one who can decipher its celestial script. Hunted by the ruthless collectors of the Onyx Hand and guided by a shadowy benefactor whose motives are as veiled as the city's perpetual fog, she must navigate a world of gilded cages and velvet-gloved threats. Every secret she uncovers brings her closer to a truth that could either save her world or shatter it into oblivion.</p>
            <p>As alliances shift like shadows in a dark library, Elara must decide who to trust. The cost of failure is not merely her own life, but the very fabric of existence. The scroll's power is a seductive poison, and its final secret is a revelation so profound it threatens to unravel the nature of gods and mortals alike.</p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Author Section */}
        <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Image 
            src="https://picsum.photos/seed/author/400/400" 
            alt="Author Portrait" 
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/30 shadow-lg"
            data-ai-hint="author portrait"
          />
          <div className='text-center md:text-left'>
            <h2 className="text-4xl font-headline text-primary mb-4">About the Author</h2>
            <p className="text-lg text-foreground/90 font-serif leading-relaxed">
              Manoj Nayak is a weaver of words and a student of the unseen. With a background in ancient history and a lifelong fascination with the occult, he crafts tales that explore the liminal spaces between myth and reality. "The Obsidian Scroll" is his debut novel, born from a decade of research into forgotten lore and the enduring power of stories.
            </p>
          </div>
        </section>

      </div>
    </AnimatedDiv>
  );
}
