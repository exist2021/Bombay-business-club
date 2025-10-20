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
            Born into one of Mumbai’s most elite families, Anya Chandra can bend thoughts and read the hidden corners of the human mind. At fifteen, her father—a second generation Bombay Elite — ordered her first betrayal. Two decades later, she is his most valuable secret, shaping fates from the shadows of South Bombay’s wealth and corruption. But power has left her hollow, and obedience has become a prison. As Anya begins to question the empire built on her gift, she must choose between blood and freedom—between the family that owns her and the self she’s never dared to claim.
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
