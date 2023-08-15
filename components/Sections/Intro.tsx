import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Image
      width={720}
      height={534}
      src="/heroImage.png"
      alt=""
      objectFit="contain"
      priority
    />
    <h1 id="section1-title">Welcome to ZingiberLabs</h1>
    <p>
      Are you ready to embark on a journey into the future of the internet? Look
      no further! At ZingiberLabs, we are your ultimate partner in harnessing
      the limitless potential of Web3 and diving into the exciting realm of
      Decentralized Applications (DApps), DeFi development and more.
    </p>
    <button type="button">Get Started</button>
  </section>
);

export default Intro;
