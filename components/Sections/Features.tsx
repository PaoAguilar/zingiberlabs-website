import Image from "next/image";
import { createElement, FC } from "react";
import styles from "@styles/Sections/Features.module.scss";

const Features: FC = () => {
  return (
    <section aria-label="Features" className={styles.main}>
      {elements.map(({ image, text, title }, id) => {
        return (
          <div key={`Feature-${id}`}>
            <Image
              width={75}
              height={75}
              src={image}
              objectFit="contain"
              priority
              alt=""
            />
            {createElement(`h${1 + id}`, null, title)}
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;

const elements = [
  {
    image: "/icon-access-anywhere.svg",
    title: "Innovation",
    text: `We thrive on challenges and live to push the boundaries of what's possible. Our solutions are as unique as your ideas.`,
  },
  {
    image: "/icon-security.svg",
    title: "User-Centric Approach",
    text: `Our users are at the heart of everything we do. We create intuitive, engaging, and seamless experiences that keep them coming back for more.`,
  },
  {
    image: "/icon-collaboration.svg",
    title: "Security",
    text: `With our deep understanding of blockchain security principles, we ensure that your DApps and DeFi platforms are fortified against threats.`,
  },
  {
    image: "/icon-any-file.svg",
    title: "End-to-End Services",
    text: `From ideation and development to deployment and maintenance, we offer comprehensive services that cover every stage of your project's lifecycle.`,
  },
];
