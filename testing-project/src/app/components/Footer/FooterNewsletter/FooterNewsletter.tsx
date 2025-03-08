import styles from "../footer.module.css";

const FooterNewsletter = () => {
  return (
    <form className={styles.footer_form}>
      <h3 className={styles.footer_form_title}>Join Our Newsletter</h3>
      <div className={styles.footer_form_inner}>
        <input type="email" name="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </div>
      <p className={styles.footer_form_text}>
        * Will send you weekly updates for your better tool management.
      </p>
    </form>
  );
};

export default FooterNewsletter;