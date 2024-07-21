import classes from "./page.module.css";
import Quotes from "@/components/Quotes";
import Gallery from "@/components/Gallery";
import Section from "@/components/Section";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main className={classes.root}>
      <HeroBanner />
      <Section />
      <Quotes />
      <Gallery />
    </main>
  );
}
