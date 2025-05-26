"use client"
import ContactUsForm from "@/components/ContactUsForm";
import { withForm } from "@/hoc/withForm";
import React from "react";

const Form = () => {
  const handleSubmit = (values: FormValuesProps) => {
    console.log("Submit Form", values);
  };
  const SubmitWithForm = withForm(ContactUsForm, handleSubmit);
  return (
    <div>
      <SubmitWithForm />
    </div>
  );
};

export default Form;
