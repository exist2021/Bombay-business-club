
import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { chapters } from '@/lib/chapters';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ExternalLink, Headphones } from 'lucide-react';


export default function ChaptersPage() {
  const externalLinks: { [key: number]: string } = {
    1: 'https://manojnayak.stck.me/chapter/1313573/The-Malabar-Hill-Birthday-Party',
    2: 'https://manojnayak.stck.me/chapter/1316352/The-High-Profile-Breakup-We-Cannot-Have-an-Actress-as-a-Bahu',
    3: 'https://manojnayak.stck.me/chapter/1318345/Anyas-disastrous-love-life',
    4: 'https://manojnayak.stck.me/chapter/1321684/Dilip-meets-Anya-at-The-Fashion-Book-Launch',
    5: 'https://manojnayak.stck.me/chapter/1324793/Chapter-5-The-Three-Meetings',
    6: 'https://manojnayak.stck.me/chapter/1328025/The-New-York-Exile',
    7: 'https://manojnayak.stck.me/chapter/1332184/The-Betrayal-and-the-Accident',
    8: 'https://manojnayak.stck.me/chapter/1336960/The-YouTubers-Rise-and-Fall',
  };

  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Free Chapters
          </h1>
          <div className="mt-4 max-w-3xl mx-auto text-xl text-foreground/80 font-serif space-y-4">
            <p>
              The first 8 chapters of The Bombay Business Club are available here to read for free. The book is currently being written. 
            </p>
            <p>
              For access to upcoming chapters as they are released, you can download the entire work-in-progress book.
            </p>
          </div>

          <div className="mt-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-headline text-primary mb-4 flex items-center justify-center gap-3">
              <Headphones className="w-6 h-6"/>
              Audio Overview
            </h2>
            <div className="bg-card/50 border border-primary/30 rounded-lg p-4 shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
              <audio controls preload="auto" className="w-full">
                <source src="https://drive.google.com/uc?export=download&id=1MgqD8wd1dNCpr9A96J6eoRUG_8sTieHU" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          
          <Button size="lg" className="mt-10 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://2532618660820.gumroad.com/l/zsgti" target="_blank">Download for free</Link>
          </Button>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        <div className="max-w-4xl mx-auto">
          <div className="w-full">
            {chapters.map((chapter) => {
              if (externalLinks[chapter.id]) {
                return (
                  <div key={chapter.id} className="border-b">
                    <Link href={externalLinks[chapter.id]} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-between py-4 font-medium text-primary hover:text-accent-foreground text-left transition-all hover:underline">
                      <div>
                        <h3 className="text-2xl font-headline">{chapter.title}</h3>
                        <p className="text-sm text-foreground/80 font-serif font-normal">{chapter.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 shrink-0 ml-4" />
                    </Link>
                  </div>
                )
              }
              return (
                <Accordion type="single" collapsible className="w-full" key={chapter.id}>
                  <AccordionItem value={`item-${chapter.id}`}>
                    <AccordionTrigger className="text-primary hover:text-accent-foreground text-left">
                      <div>
                        <h3 className="text-2xl font-headline">{chapter.title}</h3>
                        <p className="text-sm text-foreground/80 font-serif font-normal">{chapter.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                       <article className="max-w-4xl mx-auto text-lg text-foreground/90 font-serif leading-relaxed space-y-6 py-4">
                        {chapter.paragraphs.map((p, index) => (
                          <p key={index} className="text-foreground">{p}</p>
                        ))}
                      </article>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
