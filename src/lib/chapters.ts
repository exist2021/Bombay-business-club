
export const bookCover = {
  id: "book-cover",
  description: "Book cover for Bombay Business Club",
  imageUrl: "https://i.postimg.cc/DzTX6tCM/IMG-7494.jpg",
  imageHint: "book photo"
}

export type Chapter = {
  id: number;
  title: string;
  description: string;
  paragraphs: string[];
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1: The Malabar Hill Birthday Party",
    description: "Anya's fifteenth birthday sets the stage for a dark family request.",
    paragraphs: [
      "Click to read Chapter 1 on my blog."
    ]
  },
  {
    id: 2,
    title: "Chapter 2: The High Profile Breakup",
    description: "Anya's plot against Kiara unfolds, leading to a calculated victory.",
    paragraphs: [
      "Click to read Chapter 2 on my blog."
    ]
  },
  {
    id: 3,
    title: "Chapter 3: The Years of Broken Things",
    description: "Anya's life from 18 to 28, marked by control, heartbreak, and a return to a gilded cage.",
    paragraphs: [
      "Click to read Chapter 3 on my blog."
    ]
  },
  {
    id: 4,
    title: "Chapter 4: The Fashion Book Launch",
    description: "Anya and Dilip's paths cross at a high-society book launch in Powai.",
    paragraphs: [
      "Click to read Chapter 4 on my blog."
    ]
  },
  {
    id: 5,
    title: "Chapter 5: The Three Meetings",
    description: "A series of orchestrated encounters brings Anya and Dilip closer together.",
    paragraphs: [
      "Click to read Chapter 5 on my blog."
    ]
  },
  {
    id: 6,
    title: "Chapter 6: The New York Exile",
    description: "Anya's time in New York is marked by loneliness, a new project, and complicated family dynamics.",
    paragraphs: [
      "Click to read Chapter 6 on my blog."
    ]
  },
  {
    id: 7,
    title: "Chapter 7: The Betrayal and the Accident",
    description: "Anya uncovers a betrayal that leads to a tragic and suspicious end.",
    paragraphs: [
      "Click to read Chapter 7 on my blog."
    ]
  },
  {
    id: 8,
    title: "Chapter 8: The YouTuber's Rise and Fall",
    description: "Anya's involvement with a YouTuber takes a dark turn.",
    paragraphs: [
      "Click to read Chapter 8 on my blog."
    ]
  }
]
