import React, { ComponentType, useState } from "react";

export function withForm<T>(
  WrappedComponenmt: ComponentType<T & WithFormProps>,
  onSubmit: (values: FormValuesProps) => void
) {
  const WirhFormComponent = (props: T) => {

    const [fromValues, setFormValues] = useState<FormValuesProps>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(fromValues);
    };

    return (
      <WrappedComponenmt
        {...props}
        onChange={handleChange}
        onSubmit={handleSubmit}
        formValues={fromValues}
      />
    );
  };
  return WirhFormComponent
}
