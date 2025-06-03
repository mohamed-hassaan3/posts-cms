"use client";

import { submitContactAction } from "@/app/actions/contactUs";
import ContactUsForm from "@/components/ContactUsForm";
import { withForm } from "@/hoc/withForm";
import { contactUsValidation } from "@/util/formValidation";
import { SubmitHandler } from "react-hook-form";

const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
  console.log("Submit Form", data);
  const result = await submitContactAction(data);
  console.log(result)
  return result;
};
const Form = withForm<object, ContactFormProps>(
  ContactUsForm,
  onSubmit,
  contactUsValidation
);
export default Form;
