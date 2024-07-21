"use client";

import LinkButton from "@/UI/LinkButton";
import styles from "./heroBanner.module.css";
import Slider from "../Slider/slider";
import { useRef, useState } from "react";

const HERO_BANNER_ITEMS = [
  {
    id: 1,
    image: "/images/hero.jpg",
    title: "Bespoke & made to measure handmade kitchen design",
    subTitle: "Design and order your new kitchen online today",
    buttonLink: "/order",
    buttonText: "Order Now",
  },
  {
    id: 2,
    image: "/images/section.jpg",
    title: "Bespoke & made to measure handmade kitchen design",
    subTitle: "Design and order your new kitchen online today",
    buttonLink: "/order",
    buttonText: "Order Now",
  },
  {
    id: 3,
    image: "/images/hero.jpg",
    title: "Bespoke & made to measure handmade kitchen design",
    subTitle: "Design and order your new kitchen online today",
    buttonLink: "/order",
    buttonText: "Order Now",
  },
];

const HeroBanner: React.FC = () => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(HERO_BANNER_ITEMS[0].image);

  const items = HERO_BANNER_ITEMS.map((item) => (
    <div key={item.id} className={styles.content}>
      <h2 className={styles.subTitle}>{item.subTitle}</h2>
      <h1 className={styles.title}>{item.title}</h1>
      <div className={styles.linkWrapper}>
        <LinkButton href={item.buttonLink}>{item.buttonText}</LinkButton>
      </div>
    </div>
  ));

  const handleSlideChange = (currentSlide: number) => {
    setCurrentImage(HERO_BANNER_ITEMS[currentSlide].image);
  };

  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url("${currentImage}")` }}
    >
      <div className="container">
        <Slider
          items={items}
          onChange={handleSlideChange}
          drag={false}
          dotsElementId="heroBannerDots"
          dots
        />
      </div>
      <div id="heroBannerDots" className={styles.sliderDots}></div>
    </section>
  );
};

export default HeroBanner;
