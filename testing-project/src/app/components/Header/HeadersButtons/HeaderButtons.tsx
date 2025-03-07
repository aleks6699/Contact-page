import Link from "next/link";
import styles from "../header.module.css";
import { IconsCart, IconsProfile } from "../../Icons/Icons";

const HeaderButtons = () => {
  return (
    <div className={styles.header_buttons}>
      <Link href="/profile" className={styles.profile} aria-label="Profile">
        <IconsProfile />
      </Link>
      <Link href="/cart" className={styles.cart} aria-label="Cart">
        <IconsCart />
      </Link>
    </div>
  );
};
export default HeaderButtons;
