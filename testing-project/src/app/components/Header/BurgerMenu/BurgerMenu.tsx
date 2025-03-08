import styles from "../header.module.css";
const BurgerMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) => {
  return (
    <div className={styles.burger_menu} onClick={() => setMenuOpen(!menuOpen)}>
      <span className={styles.burger_item}></span>
      <span className={styles.burger_item}></span>
      <span className={styles.burger_item}></span>
    </div>
  );
};

export default BurgerMenu;