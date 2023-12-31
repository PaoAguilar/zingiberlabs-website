import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Sections/Productivity.module.scss";

const Productivity: FC = () => {
  return (
    <section aria-labelledby="productivity-title" className={styles.main}>
      <Image
        width={615}
        height={465}
        src="/heroImage.png"
        alt=""
        objectFit="contain"
        priority
      />
      <div>
        <h1 id="productivity-title">Unleash the Power of Web3</h1>
        <p>
          Web3 technology is redefining the digital landscape, promising greater
          security, transparency, and user empowerment. <br />
          <br />
          Our team of visionary experts is at the forefront of this revolution,
          dedicated to crafting innovative solutions that merge cutting- edge
          technology with user-centric design.
        </p>
        <Link href="#">
          <a>
            Contact us now <Arrow />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Productivity;

const Arrow: FC = () => {
  return (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <circle id="b" cx="6" cy="6" r="6" />
        <filter
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          filterUnits="objectBoundingBox"
          id="a"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)">
          <use fill="#000" filter="url(#a)" xlinkHref="#b" />
          <use fill="currentColor" xlinkHref="#b" />
        </g>
        <path
          d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
          fill="#1B2330"
        />
      </g>
    </svg>
  );
};
