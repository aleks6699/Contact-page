import Link from "next/link";
import styles from "../footer.module.css";

interface FooterLinksProps {
  title: string;
  links: { href: string; text: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, "_");

  return (
    <div className={styles[`footer_${formattedTitle}_inner`]}>
      <h3 className={styles[`footer_${formattedTitle}_title`]}>{title}</h3>
      <ul className={styles[`footer_${formattedTitle}_list`]}>
        {links.map((link, index) => (
          <li
            key={index}
            className={styles[`footer_${formattedTitle}_item`]}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;