import styles from "../../../contact/page.module.css";

interface FormButtonProps {
  isPending: boolean;
}

const FormButton = ({ isPending }: FormButtonProps) => {
  return (
    <button className={styles.contact_form_button} type="submit">
      {isPending ? "Sending..." : "Send Message"}
    </button>
  );
};

export default FormButton;