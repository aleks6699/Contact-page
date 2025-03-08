"use server";

type FormState = {
  success: boolean;
  message: string;
  error: string | null;
};

export const submitContactForm = async (
  prevState: FormState,
  formData: FormData,  
): Promise<FormState> => {
  const name = formData.get("name") as string;
  const surname = formData.get("surname") as string;
  const email = formData.get("email") as string;
  const tel = formData.get("tel") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !surname || !email || !tel || !subject || !message) {
    return { success: false, message: "", error: "All fields are required!" };
  }

  console.log("Form Data:", { name, surname, email, tel, subject, message });

  return { success: true, message: "Form submitted successfully!", error: null };
};