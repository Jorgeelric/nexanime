import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <main className="min-h-screen text-zinc-50" >
      <section className="flex min-h-screen items-center justify-center">
        <Container size="narrow" className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500" >
            NexAnime
          </p>

          <h1 className="text-4xl font-bold sm:text-6xl" >
            Sua plataforma de animes começa aqui
          </h1>

          <p className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg" >
            Estamos preparando a base visual e técnica do projeto antes de construir a home, autenticação, player e integração
            com GoAnime
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" >
            <Button size="lg" >Começar agora</Button>
            <Button variant="secondary" size="lg" >
              Ver catálago
            </Button>
          </div>

        </Container>
      </section>
    </main>
  )
}