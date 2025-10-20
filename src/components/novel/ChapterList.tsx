import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Chapter } from '@/lib/novel';

export function ChapterList({ chapters }: { chapters: Chapter[] }) {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-center mb-8">Chapters</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {chapters.map((chapter) => (
          <Link href={`/chapters/${chapter.slug}`} key={chapter.id} passHref>
            <Card className="hover:bg-accent/10 dark:hover:bg-accent/20 hover:border-primary/50 transition-colors duration-300 group cursor-pointer">
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-headline text-primary group-hover:text-accent-foreground">{chapter.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">Read Chapter {chapter.id}</p>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
