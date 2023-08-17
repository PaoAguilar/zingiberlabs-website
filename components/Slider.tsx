import React, { useState } from "react";
import Slider from "react-slick";
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
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "25px", textAlign: "center" }}>
      <h1>Our stack</h1>
      <div style={{ padding: "1rem" }}>
        <Slider {...settings}>
          {images.map((element, index) => (
            <>
              <div className={styles.imageWrapper}>
                <TechCard tech={element.tech} key={index}>
                  <Image
                    src={element.image}
                    alt={`Slide ${index}`}
                    width={176}
                    height={152}
                    objectFit="contain"
                  />
                </TechCard>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
