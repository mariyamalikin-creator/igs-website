import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Global Contact Information",
  type: "document",

  fields: [
    defineField({
      name: "emailGeneral",
      title: "Main Contact Email *",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description:
        "The primary email address used across the website for general enquiries. This appears in contact forms and the footer. Update it here if it ever changes.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "emailLegal",
      title: "Legal Enquiries Email",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description:
        "A separate email for legal-specific enquiries. Optional — if left blank, the main contact email above will be used instead.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "phone",
      title: "Main Phone Number *",
      type: "string",
      initialValue: "+66 967 258 165",
      description:
        "The primary phone number for the business. Always include the country code. Example: '+66 967 258 165'",
      validation: (Rule) =>
        Rule.max(30).warning("Keep under 30 characters."),
    }),

    defineField({
      name: "address",
      title: "Business Address *",
      type: "text",
      rows: 3,
      initialValue:
        "3/12 Moo 4, Ko Phangan, Ko Phangan District, Surat Thani 84280, Thailand",
      description:
        "The main business address. Put each line on a new line for clean display.",
    }),
  ],

  preview: {
    prepare: () => ({ title: "Global Contact Information" }),
  },
});
