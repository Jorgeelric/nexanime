import type { Anime } from "@/types/anime";

export const mockAnimes: Anime[] = [
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    posterImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg",
    bannerImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    year: 2020,
    type: "TV",
    status: "Finished",
    episodes: 24,
    genres: ["Action", "Supernatural", "Drama"],
  },
  {
    id: "frieren",
    title: "Frieren: Beyond Journey's End",
    year: 2023,
    type: "TV",
    status: "Finished",
    episodes: 28,
    genres: ["Adventure", "Drama", "Fantasy"],
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    year: 2019,
    type: "TV",
    status: "Finished",
    episodes: 26,
    genres: ["Action", "Supernatural"],
  },
];