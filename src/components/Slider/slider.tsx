"use client";

import Arrow from "@/UI/Arrow";
import "keen-slider/keen-slider.min.css";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import styles from "./slider.module.css";
import classNames from "classnames";
import { createPortal } from "react-dom";

interface SliderProps extends KeenSliderOptions {
  items: React.ReactNode[];
  arrows?: boolean;
  dots?: boolean;
  dotsElementId?: string;
  onChange?: (currentSlide: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  items,
  arrows,
  dots,
  dotsElementId,
  onChange,
  ...rest
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 0,
    },
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);

      if (onChange) onChange(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...rest,
  });

  const arrowsBlock = arrows
    ? loaded &&
      instanceRef.current && (
        <>
          <button
            className={classNames({
              [styles.leftButton]: true,
              [styles.leftButtonDisabled]: currentSlide === 0,
            })}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              event.stopPropagation();
              instanceRef.current?.prev();
            }}
            disabled={currentSlide === 0}
          >
            <Arrow left />
          </button>
          <button
            className={classNames({
              [styles.rightButton]: true,
              [styles.rightButtonDisabled]:
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1,
            })}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              event.stopPropagation();
              instanceRef.current?.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <Arrow />
          </button>
        </>
      )
    : null;

  const dotsBlock = dots
    ? loaded &&
      instanceRef.current && (
        <div className={styles.dots}>
          {new Array(instanceRef.current.track.details.slides.length)
            .fill(null)
            .map((_value, index) => (
              <button
                key={index}
                className={classNames({
                  [styles.dot]: true,
                  [styles.dotActive]: currentSlide === index,
                })}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index);
                }}
              />
            ))}
        </div>
      )
    : null;

  const dotsElement = dotsElementId
    ? document.getElementById(dotsElementId)
    : null;

  return (
    <div className={styles.root}>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div
            key={index}
            className={classNames({
              "keen-slider__slide": true,
              [styles.sliderHidden]: index !== 1 && !loaded,
            })}
          >
            {item}
          </div>
        ))}
      </div>
      {arrowsBlock}
      {dotsBlock && dotsElement
        ? createPortal(dotsBlock, dotsElement)
        : dotsBlock}
    </div>
  );
};

export default Slider;
