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

export default function Page() {
  return (
    <main>
      <Hero />
      <International />
      <Format />
      <WhoWeAre />
      <Cases />
      <Author />
      <Knowledge />
      <Results />
      <Materials />
      <ForWhom />
      <HowItLooks />
    </main>
  );
}
