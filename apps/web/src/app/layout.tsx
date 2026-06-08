import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexAnime",
  description: "Streaming moderno de animes inspirado na experiência Netflix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
