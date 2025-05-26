export {};
declare global {

  type FormValuesProps = {
    [key: string]: value
  };

  type WithFormProps = {
    formValues: FormValuesProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  };
}
