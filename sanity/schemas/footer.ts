import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description: "Contact email shown in the footer.",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      initialValue: "+66 967 258 165",
      description: "Phone number shown in the footer. Include country code.",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 4,
      initialValue: "3/12 Moo 4\nKo Phangan\nKo Pha-ngan District\nSurat Thani 84280\nThailand",
      description: "Address shown in the footer.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Footer" }),
  },
});
