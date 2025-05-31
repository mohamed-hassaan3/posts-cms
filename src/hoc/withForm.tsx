import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentType } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm as useFormRHF } from "react-hook-form";
import { ZodSchema } from "zod";
import { Form } from "@/components/ui/form";

export function withForm<P, T extends FieldValues>(
  WrappedComponent: ComponentType<P & WithFormProps<T>>,
  onSubmit: SubmitHandler<T>,
  schema: ZodSchema<T>
) {
  const WithFormComponent = (props: P) => {
    const form = useFormRHF({
      resolver: zodResolver(schema),
    });

    const { register, formState: { errors, isSubmitting }, handleSubmit, reset } = form;

    const handleFormSubmit = async (data: T) => {
      await onSubmit(data);
      reset();
    };

    return (
      <Form {...form}>
        <WrappedComponent
          {...props}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit(handleFormSubmit)}
          isSubmitting={isSubmitting}
        />
      </Form>
    );
  };

  return WithFormComponent;
}
