export type Chapter = {
  id: number;
  title: string;
  slug: string;
  content: string;
};

const LOREM_IPSUM_PARAGRAPH = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>`;

export const chapters: Chapter[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Chapter ${i + 1}: The Invitation`,
  slug: `chapter-${i + 1}`,
  content: `
    <p>This is the beginning of chapter ${i + 1}. The story unfolds as our characters navigate the intricate web of power and ambition in the heart of Bombay.</p>
    ${LOREM_IPSUM_PARAGRAPH}
    <p>As the sun set over the Arabian Sea, casting long shadows across the city, a decision was made that would change everything. The air was thick with anticipation, the scent of opportunity mingling with the ever-present aroma of sea salt and spices.</p>
    ${LOREM_IPSUM_PARAGRAPH.repeat(2)}
    <p>And so, the journey begins. Each step forward is a step into the unknown, a dance with destiny in the city of dreams.</p>
  `,
}));

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}
