import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Featured } from "@/components/featured";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Gallery />
      <Contact />
    </>
  );
}

