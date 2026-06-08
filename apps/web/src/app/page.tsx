import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/layout/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimeCard } from "@/features/anime/components/anime-card";
import { mockAnimes } from "@/features/anime/data/mock-animes";

export default function HomePage() {
  return (
    <main className="min-h-screen text-zinc-50">
      <section className="flex min-h-screen items-center justify-center">
        <Container size="narrow" className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            NexAnime
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Sua plataforma de animes começa aqui.
          </h1>

          <p className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg">
            Estamos preparando a base visual e técnica do projeto antes de
            construir a home, autenticação, player e integração com GoAnime.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg">Começar agora</Button>
            <Button variant="secondary" size="lg">
              Ver catálogo
            </Button>
          </div>

          <div className="mt-12 rounded-md border border-white/10 bg-white/[0.03] p-5 text-left">
            <SectionTitle eyebrow="Design system" title="Base visual criada" />

            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="accent">Novo</Badge>
              <Badge>HD</Badge>
              <Badge variant="muted">TV</Badge>
              <Badge variant="success">Disponível</Badge>
            </div>

            <p className="text-sm leading-6 text-zinc-400">
              Já temos botões, container e títulos de seção reutilizáveis para
              construir a interface do NexAnime com consistência.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <Skeleton className="aspect-[2/3]" />
              <Skeleton className="aspect-[2/3]" />
              <Skeleton className="aspect-[2/3]" />
            </div>
          </div>

          <div className="mt-10 text-left">
            <SectionTitle eyebrow="Preview" title="Cards de anime" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {mockAnimes.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  title={anime.title}
                  posterImage={anime.posterImage}
                  year={anime.year}
                  type={anime.type}
                  episodes={anime.episodes}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
