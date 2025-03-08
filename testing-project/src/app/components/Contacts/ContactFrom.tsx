"use client";

import { useActionState } from "react";
import styles from "../../contact/page.module.css";
import { submitContactForm } from "@/app/action/action";
import FormButton from "./ContactForm/FormButton";
import FormInput from "./ContactForm/FormImput";
import FormRadioGroup from "./ContactForm/FormRadioGroup";
import FormTextarea from "./ContactForm/FormTextarea";
import Image from "next/image";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
    error: null,
  });

  return (
    <form className={styles.contact_form} action={formAction}>
      <div className={styles.contact_form_group_inner}>
        <FormInput
          id="name"
          name="First Name"
          type="text"
          placeholder="Alex"
          required
        />
        <FormInput
          id="surname"
          name="Last Name"
          type="text"
          placeholder="Alex"
          required
        />
      </div>
      <div className={styles.contact_form_group_inner}>
        <FormInput
          id="email"
          name="Email"
          type="email"
          placeholder="aleks@gmail.com"
          required
        />
        <FormInput
          id="tel"
          name="Phone Number"
          type="tel"
          placeholder="+33353455555553"
          required
        />
      </div>
      <FormRadioGroup
        title="Select Subject?"
        options={["subject1", "subject2", "subject3", "subject4"]}
      />
      <FormTextarea
        id="message"
        name="Message"
        placeholder="Write your message.."
        required
      />
      <FormButton isPending={isPending} />
      <Image
        className={styles.contact_form_image}
        src="/letter_send.png"
        alt="send"
        width={260}
        height={100}
        priority
      ></Image>

      {state.error && <p className={styles.error}>{state.error}</p>}
      {state.success && <p className={styles.success}>{state.message}</p>}
    </form>
  );
};

export default ContactForm;
