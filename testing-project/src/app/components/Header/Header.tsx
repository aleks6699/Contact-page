"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./header.module.css";

const BurgerMenu = dynamic(() => import("./BurgerMenu/BurgerMenu"));
const NavMenu = dynamic(() => import("./NavMenu/NavMenu"));
const HeaderButtons = dynamic(() => import("./HeadersButtons/HeaderButtons"));

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.container_header} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.header_inner}>
          <Link className={styles.header_logo} href="/">
            Logo Here
          </Link>
          <div className={styles.header_inner_right}>
            <NavMenu />
            <HeaderButtons />
          </div>
          <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </header>
  );
};
