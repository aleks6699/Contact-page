import { companyLinks, legalLinks, quickLinks } from "@/constant/constant";
import styles from "./footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterNewsletter from "./FooterNewsletter/FooterNewsletter";
import FooterReachUs from "./FooterReachUs/FooterReachUs";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer_title}>Logo Here</h2>
      <div className={styles.footer_inner}>
        <FooterReachUs />
        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="Legal" links={legalLinks} />
        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterNewsletter />
      </div>
    </footer>
  );
};
                                