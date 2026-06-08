import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Anime } from "@/types/anime";

type AnimeCardProps = Pick<
  Anime,
  "title" | "posterImage" | "year" | "type" | "episodes"
> & {
  className?: string;
};

export function AnimeCard({
  title,
  posterImage,
  year,
  type,
  episodes,
  className,
}: AnimeCardProps) {
  return (
    <article
      className={cn(
        "group min-w-0 cursor-pointer overflow-hidden rounded-md",
        className,
      )}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-zinc-900">
        {posterImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-950 to-red-950 transition-transform duration-300 group-hover:scale-105" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="flex flex-wrap gap-1.5">
            {type && <Badge variant="accent">{type}</Badge>}
            {episodes && <Badge variant="muted">{episodes} eps</Badge>}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-zinc-50 transition-colors group-hover:text-red-300">
          {title}
        </h3>

        {year && (
          <p className="mt-1 text-xs font-medium text-zinc-500">{year}</p>
        )}
      </div>
    </article>
  );
}
