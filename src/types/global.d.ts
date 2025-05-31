import { FieldError, UseFormRegister } from "react-hook-form";

export {};

declare global {
  type WithFormProps<T> = {
    register: UseFormRegister<T>;
    errors: FieldError<T>;
    isSubmitting: boolean;
    handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  };

  type ContactFormProps = {
    name: string,
    email: string,
    subject: string,
    message: string,
  }
}
