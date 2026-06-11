import { Hero } from "@/components/sections/Hero";
import { International } from "@/components/sections/International";
import { Format } from "@/components/sections/Format";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Cases } from "@/components/sections/Cases";
import { Author } from "@/components/sections/Author";
import { Knowledge } from "@/components/sections/Knowledge";
import { Results } from "@/components/sections/Results";
import { Materials } from "@/components/sections/Materials";
import { ForWhom } from "@/components/sections/ForWhom";
import { HowItLooks } from "@/components/sections/HowItLooks";
import { AnimateIn } from "@/components/AnimateIn";

export default function Page() {
  return (
    <main>
      <Hero />
      <AnimateIn><International /></AnimateIn>
      <AnimateIn delay={50}><Format /></AnimateIn>
      <AnimateIn><WhoWeAre /></AnimateIn>
      <AnimateIn><Cases /></AnimateIn>
      <AnimateIn><Author /></AnimateIn>
      <AnimateIn><Knowledge /></AnimateIn>
      <AnimateIn><Results /></AnimateIn>
      <AnimateIn><Materials /></AnimateIn>
      <AnimateIn><ForWhom /></AnimateIn>
      <AnimateIn><HowItLooks /></AnimateIn>
    </main>
  );
}
