import Image from "next/image";
import styles from "@styles/Sections/aboutUs.module.scss";

const AboutUs = () => {
  return (
    <section aria-labelledby="section1-title" className={styles.aboutUs}>
      <div>
        <h1 id="productivity-title">Who we are?</h1>
        <p>
          We are a Latin-American multicultural team. Our team of experienced
          developers specializes in building decentralized applications (DApps)
          and smart contracts using Web3 technology. <br />
          <br />
          We are passionate about creating innovative solutions that leverage
          the power of blockchain to provide enhanced security, privacy, and
          transparency.
        </p>
      </div>
      <Image
        width={615}
        height={465}
        src="/heroImage.png"
        alt=""
        objectFit="contain"
        priority
      />
    </section>
  );
};

export default AboutUs;
