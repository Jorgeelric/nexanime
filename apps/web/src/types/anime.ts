export type AnimeType = "TV" | "Movie" | "OVA" | "ONA" | "Special" | "Unknown";

export type AnimeStatus =
  | "Finished"
  | "Releasing"
  | "NotYetReleased"
  | "Cancelled"
  | "Unknown";

export type Anime = {
  id: string;
  title: string;
  posterImage?: string;
  bannerImage?: string;
  year?: number;
  type: AnimeType;
  status: AnimeStatus;
  episodes?: number;
  genres: string[];
};
