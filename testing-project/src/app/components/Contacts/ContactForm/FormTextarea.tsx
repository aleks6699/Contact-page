import styles from "../../../contact/page.module.css";

interface FormTextareaProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const FormTextarea = ({ id, name, placeholder, required }: FormTextareaProps) => {
  return (
    <div className={styles.contact_form_group_message}>
      <label htmlFor={id}>{name}</label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default FormTextarea;