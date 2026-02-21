import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Paper } from "@/components/Paper";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Nav />
      <Paper />
    </main>
  );
}
