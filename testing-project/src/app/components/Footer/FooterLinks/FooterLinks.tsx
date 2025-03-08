import Link from "next/link";
import styles from "../footer.module.css";

interface FooterLinksProps {
  title: string;
  links: { href: string; text: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className={styles[`footer_${title.toLowerCase()}_inner`]}>
      <h3 className={styles[`footer_${title.toLowerCase()}_title`]}>{title}</h3>
      <ul className={styles[`footer_${title.toLowerCase()}_list`]}>
        {links.map((link, index) => (
          <li
            key={index}
            className={styles[`footer_${title.toLowerCase()}_item`]}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;