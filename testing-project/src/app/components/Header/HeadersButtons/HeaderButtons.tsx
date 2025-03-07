import Link from "next/link";
import Image from "next/image";
import styles from "../header.module.css";

const HeaderButtons = () => {
  return (
    <div className={styles.header_buttons}>
      <Link href="/profile" className={styles.profile} aria-label="Profile">
        <Image src="/profile.svg" width={18} height={18} alt="Profile" />
      </Link>
      <Link href="/cart" className={styles.cart} aria-label="Cart">
        <Image src="/cart.svg" width={18} height={18} alt="Cart" />
      </Link>
    </div>
  );
};

export default HeaderButtons;
