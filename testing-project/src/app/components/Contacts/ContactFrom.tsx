"use client";

import { useActionState } from "react";
import styles from "../../contact/page.module.css";
import { submitContactForm } from "@/app/action/action";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
    error: null,
  });

  return (
    <form className={styles.contact_form} action={formAction}>
      <div className={styles.contact_form_group_inner}>
        <div className={styles.contact_form_group}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Alex"
            required
          />
        </div>
        <div className={styles.contact_form_group}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Alex"
            required
          />
        </div>
      </div>
      <div className={styles.contact_form_group_inner}>
        <div className={styles.contact_form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="aleks@gmail.com"
            required
          />
        </div>
        <div className={styles.contact_form_group}>
          <label htmlFor="tel">Phone Number</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="+33353455555553"
            required
          />
        </div>
      </div>
      <h4 className={styles.contact_form_title}>Select Subject?</h4>
      <div className={styles.contact_form_group_radio_inner}>
        {["subject1", "subject2", "subject3", "subject4"].map((subject) => (
          <div className={styles.contact_form_group_radio} key={subject}>
            <input
              type="radio"
              id={subject}
              name="subject"
              value={subject}
              required
            />
            <label htmlFor={subject}>General Inquiry</label>
          </div>
        ))}
      </div>
      <div className={styles.contact_form_group_message}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message.."
          required
        ></textarea>
      </div>
      <button className={styles.contact_form_button} type="submit">
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.error && <p className={styles.error}>{state.error}</p>}
      {state.success && <p className={styles.success}>{state.message}</p>}
    </form>
  );
};

export default ContactForm;
