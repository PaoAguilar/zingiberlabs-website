import React, { useState } from "react";
import Image from "next/image";
import styles from "@styles/slider.module.scss";
import Tilt from "react-parallax-tilt";

interface ImageSliderProps {
  images: { image: string; tech: string }[];
}

const TechCard = ({ tech, children }: any) => {
  return (
    <Tilt scale={1.1} transitionSpeed={1000}>
      <div className={styles.techCard}>
        {children}
        <p className={styles.techName}>{tech}</p>
      </div>
    </Tilt>
  );
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className={styles.slider}>
      <h1>Our stack</h1>
      <div className={styles.sliderContainer}>
        <button onClick={prevImage}>&lt;</button>
        <div className={styles.imageWrapper}>
          {images
            .slice(currentImageIndex, currentImageIndex + 3)
            .map((element, index) => (
              <TechCard tech={element.tech} key={index}>
                <Image
                  src={element.image}
                  alt={`Slide ${currentImageIndex + index}`}
                  width={176}
                  height={152}
                  objectFit="contain"
                />
              </TechCard>
            ))}
        </div>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </section>
  );
};

export default ImageSlider;
