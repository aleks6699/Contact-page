import Link from "next/link";
import styles from "../header.module.css";
import Image from "next/image";

 const NavMenu = () => {
  return (
    <nav className={styles.header_nav}>
      <ul className={styles.header_list}>
        <li className={styles.header_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.header_item}>
          <Link href="/features">Features</Link>
          <Image className={styles.arrow} src="/arrow.png" width={13} height={13} alt="Arrow" />
        </li>
        <li className={styles.header_item}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.header_item}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.header_item}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.header_item}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;