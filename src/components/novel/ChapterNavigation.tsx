import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { Chapter } from '@/lib/novel';

type ChapterNavigationProps = {
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
};

export function ChapterNavigation({ prevChapter, nextChapter }: ChapterNavigationProps) {
  return (
    <TooltipProvider>
      <nav className="flex justify-between items-center">
        {prevChapter ? (
          <Button asChild variant="outline">
            <Link href={`/chapters/${prevChapter.slug}`} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </Link>
          </Button>
        ) : <div className="w-[100px]" />}
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="ghost">
              <Link href="/" aria-label="Table of Contents">
                  <BookOpen className="h-6 w-6" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Table of Contents</p>
          </TooltipContent>
        </Tooltip>

        {nextChapter ? (
          <Button asChild variant="default">
            <Link href={`/chapters/${nextChapter.slug}`} className="flex items-center gap-2">
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : <div className="w-[100px]" />}
      </nav>
    </TooltipProvider>
  );
}
