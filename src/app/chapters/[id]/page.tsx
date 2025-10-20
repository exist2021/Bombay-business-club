import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Separator } from '@/components/ui/separator';

export default function ChapterPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // In a real application, you would fetch chapter content based on the ID.
  const chapterContent = {
    title: `Chapter ${id}`,
    paragraphs: [
      "This is placeholder content for a chapter. Replace it with the actual text.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.",
      "Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi in harami, duru in kalashi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    ]
  };

  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            {chapterContent.title}
          </h1>
        </header>
        
        <Separator className="my-12 md:my-20 bg-primary/20" />

        <article className="max-w-4xl mx-auto text-lg text-foreground/90 font-serif leading-relaxed space-y-6">
          {chapterContent.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </article>
      </div>
    </AnimatedDiv>
  );
}
