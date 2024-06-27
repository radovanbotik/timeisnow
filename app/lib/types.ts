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

export type DiscogsRelease = {
  country: string;
  year: string;
  format: string[];
  label: string[];
  type: string;
  genre: string[];
  style: string[];
  id: number;
  barcode: [];
  user_data: { in_wantlist: boolean; in_collection: boolean };
  master_id: number;
  master_url: string;
  uri: string;
  catno: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  community: { want: number; have: number };
};
