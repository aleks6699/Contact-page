import Link from "next/link";
import styles from "../../../contact/page.module.css";

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link className={styles.contact_social_link} href={href}>
      {children}
    </Link>
  );
};

export default SocialLink;