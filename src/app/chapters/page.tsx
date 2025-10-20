import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { chapters } from '@/lib/chapters';
import Link from 'next/link';

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
          {chapters.map((chapter, index) => (
            <div key={chapter.id}>
              <Link href={`/chapters/${chapter.id}`} className="block hover:bg-card/50 rounded-lg transition-colors p-2 -m-2">
                <Card className="bg-transparent border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-primary hover:text-accent-foreground">{chapter.title}</CardTitle>
                    <CardDescription className="text-foreground/80 font-serif">{chapter.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              {index < chapters.length - 1 && <Separator className="my-4 md:my-6 bg-primary/20" />}
            </div>
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
}
