import Link from "next/link";
import styles from "./header.module.css";
import dynamic from "next/dynamic";

// Динамическая загрузка компонентов
const NavMenu = dynamic(() => import("./NavMenu/NavMenu"));
const HeaderButtons = dynamic(() => import("./HeadersButtons/HeaderButtons"));

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_inner}>
          <Link className={styles.header_logo} href="/">
            Logo Here
          </Link>
          <div className={styles.header_inner_right}>
            <NavMenu />
            <HeaderButtons />
          </div>
        </div>
      </div>
    </header>
  );
};
