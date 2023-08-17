import Footer from "@components/Footer";
import Form from "@components/Form";
import Navbar from "@components/Navbar";
import AboutUs from "@components/Sections/AboutUs";
import Features from "@components/Sections/Features";
import Intro from "@components/Sections/Intro";
import Productivity from "@components/Sections/Productivity";
import Reviews from "@components/Sections/Reviews";
import Slogan from "@components/Sections/Slogan";
import ImageSlider from "@components/Slider";
import type { NextPage } from "next";
import Head from "next/head";

const sliderImages = [
  { image: "/stack/ts.png", tech: "TypeScript" },
  { image: "/stack/tensorflow.png", tech: "Tensorflow" },
  { image: "/stack/solidity.png", tech: "Solidity" },
  { image: "/stack/react.png", tech: "React" },
  { image: "/stack/python.png", tech: "Python" },
  { image: "/stack/opensea.png", tech: "Opensea" },
  { image: "/stack/moralis.png", tech: "Moralis" },
  { image: "/stack/matic.png", tech: "Matic" },
  { image: "/stack/js.png", tech: "JavaScript" },
  { image: "/stack/ethereum.png", tech: "Ethereum" },
  { image: "/stack/chainlink.png", tech: "Chainlink" },
  { image: "/stack/binance.png", tech: "Binance" },
  { image: "/stack/avalanch.png", tech: "Avalanch" },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Frontend Mentor | Fylo landing page with dark theme and features grid
        </title>
        <meta name="description" content="Fylo" />
      </Head>
      <main>
        <Intro />
        <Features />
        <Productivity />
        <AboutUs />
        <ImageSlider images={sliderImages} />
        <Reviews />
        <Form />
        <Footer />
      </main>
    </>
  );
};

export default Home;
