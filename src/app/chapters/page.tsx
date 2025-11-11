
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
import { ExternalLink, Headphones, Download, BookOpen } from 'lucide-react';


export default function ChaptersPage() {
  const storyLink = 'https://manojnayak.stck.me/story/1313571/The-Bombay-Business-Club';

  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Free Chapters
          </h1>
          <div className="mt-4 max-w-3xl mx-auto text-xl text-foreground/80 font-serif space-y-4">
            <p>
              The first 12 chapters of The Bombay Business Club are available here to read for free. The book is currently being written. 
            </p>
            <p>
              For access to upcoming chapters as they are released, you can pre-order the book.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
              <Link href="https://manojnayak.gumroad.com/l/thebombaybusinessclub" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Link>
            </Button>
            <Button size="lg" className="bg-transparent border border-primary text-primary hover:bg-primary/10 rounded-md" asChild>
              <Link href="https://www.wattpad.com/story/403195569?utm_source=ios&utm_medium=link&utm_content=story_info&wp_page=story_details&wp_uname=exis2025" target="_blank">
                <BookOpen className="mr-2 h-5 w-5" />
                Read on Wattpad
              </Link>
            </Button>
          </div>

          <div className="mt-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-headline text-primary mb-4 flex items-center justify-center gap-3">
              <Headphones className="w-6 h-6"/>
              Audio Overview
            </h2>
            <div className="bg-card/50 border-primary/30 rounded-lg shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
              <div className="elfsight-app-e06c07fb-6acd-4753-bd3a-fed6a6614c23" data-elfsight-app-lazy></div>
            </div>
          </div>
          
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        <div className="max-w-4xl mx-auto">
          <div className="w-full">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="border-b">
                <Link href={storyLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-between py-4 font-medium text-primary hover:text-accent-foreground text-left transition-all hover:underline">
                  <div>
                    <h3 className="text-2xl font-headline">{chapter.title}</h3>
                    <p className="text-sm text-foreground/80 font-serif font-normal">{chapter.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 ml-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
