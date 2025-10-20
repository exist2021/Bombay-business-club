import { ChapterList } from '@/components/novel/ChapterList';
import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { chapters } from '@/lib/novel';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tight">
            The Bombay Business Club
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            In the bustling metropolis of Bombay, where fortunes are made and secrets are buried, a group of ambitious entrepreneurs forms an exclusive club. But as their ambitions clash and their pasts catch up, they find that the price of success might be more than they're willing to pay.
          </p>
        </header>

        <Separator className="my-12 md:my-16" />

        <main>
          <ChapterList chapters={chapters} />
        </main>
      </div>
    </AnimatedDiv>
  );
}
