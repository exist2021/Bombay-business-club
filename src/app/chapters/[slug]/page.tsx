import { notFound } from 'next/navigation';
import { chapters, getChapterBySlug } from '@/lib/novel';
import { ChapterNavigation } from '@/components/novel/ChapterNavigation';
import { Separator } from '@/components/ui/separator';
import { AnimatedDiv } from '@/components/ui/AnimatedDiv';

type ChapterPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) {
    return { title: 'Chapter not found' };
  }
  return {
    title: `${chapter.title} | Bombay Reader`,
    description: `Read ${chapter.title} of The Bombay Business Club.`,
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const chapter = getChapterBySlug(params.slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{chapter.title}</h1>
          </header>

          <div
            className="prose dark:prose-invert max-w-none mx-auto font-body text-foreground"
            dangerouslySetInnerHTML={{ __html: chapter.content }}
          />
          
          <Separator className="my-8 md:my-12 bg-border/60" />

          <ChapterNavigation prevChapter={prevChapter} nextChapter={nextChapter} />
        </article>
      </div>
    </AnimatedDiv>
  );
}
