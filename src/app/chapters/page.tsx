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


export default function ChaptersPage() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Chapters
          </h1>
          <div className="mt-4 max-w-3xl mx-auto text-xl text-foreground/80 font-serif space-y-4">
            <p>
              The first 8 chapters of Bombay Business Club are available here to read for free. The book is currently being written. 
            </p>
            <p>
              For access to upcoming chapters as they are released, you can download the entire work-in-progress book.
            </p>
          </div>
          <Button size="lg" className="mt-8 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://2532618660820.gumroad.com/l/zsgti" target="_blank">Download for free</Link>
          </Button>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {chapters.map((chapter) => (
              <AccordionItem value={`item-${chapter.id}`} key={chapter.id}>
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
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedDiv>
  );
}