import styles from "../../../contact/page.module.css";

interface FormRadioGroupProps {
  title: string;
  options: string[];
}

const FormRadioGroup = ({ title, options }: FormRadioGroupProps) => {
  return (
    <>
      <h4 className={styles.contact_form_title}>{title}</h4>
      <div className={styles.contact_form_group_radio_inner}>
        {options.map((option) => (
          <div className={styles.contact_form_group_radio} key={option}>
            <input
              type="radio"
              id={option}
              name="subject"
              value={option}
              required
            />
            <label htmlFor={option}>General Inquiry</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormRadioGroup;