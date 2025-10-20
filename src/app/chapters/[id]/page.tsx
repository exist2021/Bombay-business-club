import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Separator } from '@/components/ui/separator';
import { chapters } from '@/lib/chapters';
import { notFound } from 'next/navigation';


export default function ChapterPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const chapter = chapters.find(c => c.id === parseInt(id));

  if (!chapter) {
    notFound();
  }

  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            {chapter.title}
          </h1>
        </header>
        
        <Separator className="my-12 md:my-20 bg-primary/20" />

        <article className="max-w-4xl mx-auto text-lg text-foreground/90 font-serif leading-relaxed space-y-6">
          {chapter.paragraphs.map((p, index) => (
            <p key={index} className="text-foreground">{p}</p>
          ))}
        </article>
      </div>
    </AnimatedDiv>
  );
}

export function generateStaticParams() {
  return chapters.map(chapter => ({
    id: chapter.id.toString(),
  }));
}
