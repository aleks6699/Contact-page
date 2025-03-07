import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Home",
  description: "Welcome to Our Online Store",
  keywords: "online shopping, quality products, fast delivery",
}

const Home = () => {
  return (
    <main className={styles.home_container}>
      <div className={styles.home_header}>
        <h1>Welcome to Our Online Store</h1>
        <p>Your one-stop shop for all your needs</p>
      </div>

      <div className={styles.home_about}>
        <h2>About Us</h2>
        <p>
          We are a passionate team dedicated to providing you with the best
          online shopping experience. Our goal is to make your shopping
          experience simple and enjoyable with quality products at great prices.
        </p>
        <ul>
          <li>Wide selection of quality products</li>
          <li>Fast and secure delivery</li>
          <li>24/7 customer support</li>
          <li>Easy returns and exchanges</li>
        </ul>
      </div>

      <Link href="/contact" className={styles.home_button}>
        Contact
      </Link>
    </main>
  );
};

export default Home;
