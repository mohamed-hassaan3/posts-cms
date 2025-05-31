import { defineType } from "sanity";
import { AddIcon } from "@sanity/icons";

export const contactUsType = defineType({
  name: "contactUs",
  title: "Contact us",
  type: "document",
  icon: AddIcon,
  fields: [
    { name: "name", type: "string" },
    { name: "email", type: "string" },
    { name: "subject", type: "string" },
    { name: "message", type: "text" },
    {
      name: "createdAt",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
});
