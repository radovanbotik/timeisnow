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

// COLORS

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX | string;

//POSITION

export type Position =
  | "top-left"
  | "top-right"
  | "center"
  | "center-left"
  | "center-right"
  | "bottom-right"
  | "bottom-left";
