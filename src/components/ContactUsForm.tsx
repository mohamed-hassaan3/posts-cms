import React from "react";
import { Title } from "./Title";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const ContactUsForm = ({
  handleSubmit,
  register,
  errors,
  isSubmitting,
}: WithFormProps<ContactFormProps>) => {
  return (
    <form className="max-w-md w-full mx-auto space-y-6" onSubmit={handleSubmit}>
      <Title>
        Contact us{" "}
        <p className="text-xs">
          this is just Demo, you will not receive verification via E-mail
        </p>
      </Title>

      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input placeholder="Enter your name" {...register("name")} />
        </FormControl>
        <FormMessage>{errors.name?.message}</FormMessage>
      </FormItem>

      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </FormControl>
        <FormMessage>{errors.email?.message}</FormMessage>
      </FormItem>

      <FormItem>
        <FormLabel>Subject</FormLabel>
        <FormControl>
          <Input placeholder="Enter subject" {...register("subject")} />
        </FormControl>
        <FormMessage>{errors.subject?.message}</FormMessage>
      </FormItem>

      <FormItem>
        <FormLabel>Message</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Enter your message"
            className="min-h-[100px]"
            {...register("message")}
          />
        </FormControl>
        <FormMessage>{errors.message?.message}</FormMessage>
      </FormItem>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactUsForm;
