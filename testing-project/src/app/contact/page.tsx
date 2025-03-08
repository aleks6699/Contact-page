import ContactForm from "../components/Contacts/ContactFrom";
import ContactInformation from "../components/Contacts/ContactInformation";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const Contact = () => {
  return (
    <main className={styles.contact_container}>
      <div className={styles.contact_wrapper}>
        <h1 className={styles.contact_title}>Contact Us</h1>
        <p className={styles.contact_text}>
          Any question or remarks? Just write us a message!
        </p>
        <div className={styles.contact_inner}>
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
