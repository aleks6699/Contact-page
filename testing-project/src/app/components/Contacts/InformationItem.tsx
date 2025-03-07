import Link from "next/link";
import Image from "next/image";
import styles from "../../contact/page.module.css";
interface ContactInformationItemProps {
  href: string;
  iconSrc: string;
  alt: string;
  text: string;
}

const ContactInformationItem = ({ href, iconSrc, alt, text }: ContactInformationItemProps) => {
  return (
    <li className={styles.contact_information_item}>
      <Link href={href} className={styles.contact_information_link}>
        <Image src={iconSrc} alt={alt} width={24} height={24} />
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default ContactInformationItem;