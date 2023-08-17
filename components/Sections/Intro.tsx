import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";
import Navbar from "@components/Navbar";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Navbar />
    <div className={styles.hero}>
      <Image src="/hero2.jpg" alt="" objectFit="cover" priority layout="fill" />
    </div>
    <div className={styles.content}>
      <h1 id="section1-title">
        <span className={styles.titleTop}>Welcome to </span>
        Zingiber
        <span className={styles.titleBottom}>Labs</span>
      </h1>
    </div>
    <div className={styles.text}>
      <p>
        Are you ready to embark on a journey into the future of the internet?
        Look no further! At ZingiberLabs, we are your ultimate partner in
        harnessing the limitless potential of Web3 and diving into the exciting
        realm of Decentralized Applications (DApps), DeFi development and more.
      </p>
      <button type="button">Get Started</button>
    </div>
  </section>
);

export default Intro;
