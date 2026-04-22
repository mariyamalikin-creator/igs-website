import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Us",
  type: "document",
  fields: [
    defineField({
      name: "emailGeneral",
      title: "General Email Address",
      type: "string",
      description: "Main contact email shown on the contact page and forms.",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "emailLegal",
      title: "Legal Enquiries Email Address",
      type: "string",
      description: "Email for direct legal enquiries (optional — leave blank to use the general email).",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Main phone number. Include country code, e.g. +66 967 258 165",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Business Address",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title ?? "Contact Us" }),
  },
});
