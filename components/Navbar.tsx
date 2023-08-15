import Image from "next/image";
import styles from "@styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.main} aria-label="Navbar">
      <Link href="/">
        <a tabIndex={0} title="Go to the Homepage">
          <Image
            objectFit="contain"
            src="/logo-white.png"
            width={200}
            height={54}
            alt="Fylo Logo"
            priority
          />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="#">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Team</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;