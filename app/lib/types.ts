export type Release = {
  id: number;
  title: string;
  artists: string[];
  releaseDate: string;
  tracks: Track[];
  imageUrl: string;
  href: string;
  catalog: string;
};
export type Track = {
  id: number;
  title: string;
  artists: string[];
  length: number;
  BPM: number;
  key: string;
};

export type Article = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  href: string;
  date: string;
};
