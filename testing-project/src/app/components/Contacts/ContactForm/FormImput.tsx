import styles from "../../../contact/page.module.css";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const FormInput = ({ id, name, type, placeholder, required }: FormInputProps) => {
  return (
    <div className={styles.contact_form_group}>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;