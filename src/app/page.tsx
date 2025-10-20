import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

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
            Bombay Business Club
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/80 font-serif">
            Behind Bombay’s glittering elite lies a business built on buried secrets.
          </p>
          <div className="mt-12 w-64 h-96 bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] flex items-center justify-center">
             <span className="text-muted-foreground">Book Cover</span>
          </div>
          <Button size="lg" className="mt-12 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="/chapters">Acquire Your Copy</Link>
          </Button>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Synopsis Section */}
        <section id="synopsis" className="max-w-4xl mx-auto text-center scroll-mt-20">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
          <h2 className="text-4xl font-headline text-primary mb-8">Synopsis</h2>
          <div className="space-y-6 text-lg text-foreground/90 font-serif leading-relaxed text-left">
            <p>Born into one of Bombay’s most elite families, Anya Chandra can bend thoughts and read the hidden corners of the human mind. At fifteen, her father—a second generation Bombay Elite — ordered her first betrayal. Two decades later, she is his most valuable secret, shaping fates from the shadows of South Bombay’s wealth and corruption. But power has left her hollow, and obedience has become a prison. As Anya begins to question the empire built on her gift, she must choose between blood and freedom—between the family that owns her and the self she’s never dared to claim.</p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Author Section */}
        <section id="author" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-mt-20">
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

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Read a Chapter Section */}
        <section id="read-chapter" className="max-w-2xl mx-auto text-center scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8">Read A Chapter</h2>
          <p className="text-lg text-foreground/90 font-serif leading-relaxed mb-8">
            Be among the first to delve into the mysteries of the Bombay Business Club. Read the first chapter for free.
          </p>
          <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="/chapters">Read a Chapter</Link>
          </Button>
        </section>
      </div>
    </AnimatedDiv>
  );
}
