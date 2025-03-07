import ContactInformationItem from "./InformationItem";
import SocialLink from "./SocialLink";
import { IconsTwitter, IconsInstagram, IconsDiscord } from "../Icons/Icons";
import styles from "../../contact/page.module.css";

const ContactInformation = () => {
  return (
    <div className={styles.contact_information}>
      <div className={styles.contact_information_title}>
        Contact Information
      </div>
      <p className={styles.contact_information_text}>
        Say something to start a live chat!
      </p>
      <ul className={styles.contact_information_list}>
        <ContactInformationItem
          href="tel:+10123456789"
          iconSrc="/tel.svg"
          alt="phone"
          text="+1012 3456 789"
        />
        <ContactInformationItem
          href="mailto:demo@gmailcom"
          iconSrc="/email.svg"
          alt="email"
          text="demo@gmail.com"
        />
        <ContactInformationItem
          href="https://www.google.com/maps"
          iconSrc="/location.svg"
          alt="location"
          text="132 Dartmouth Street Boston, Massachusetts 02156 United States"
        />
      </ul>
      <div className={styles.contact_social}>
        <SocialLink href="https://www.twitter.com/">
          <IconsTwitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/">
          <IconsInstagram />
        </SocialLink>
        <SocialLink href="https://www.discord.com/">
          <IconsDiscord />
        </SocialLink>
      </div>
    </div>
  );
};

export default ContactInformation;