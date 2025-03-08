
import ContactInformationItem from "../../Contacts/ContactInformation/InformationItem";
import styles from "../footer.module.css";

const FooterReachUs = () => {
  return (
    <div className={styles.footer_reach_us_inner}>
      <h3 className={styles.footer_reach_us_title}>Reach Us</h3>
      <ul className={styles.footer_reach_us_list}>
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
    </div>
  );
};

export default FooterReachUs;