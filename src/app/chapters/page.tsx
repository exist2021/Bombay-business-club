import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const chapters = [
  { id: 1, title: 'Chapter 1: The Gilded Cage', description: 'An introduction to the world of the Bombay Business Club.' },
  { id: 2, title: 'Chapter 2: A Secret Unveiled', description: 'Anya discovers a secret that will change everything.' },
  { id: 3, title: 'Chapter 3: The Price of Power', description: 'The true cost of influence is revealed.' },
];

export default function ChaptersPage() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Chapters
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-foreground/80 font-serif">
            Read a chapter from the Bombay Business Club.
          </p>
        </header>

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
