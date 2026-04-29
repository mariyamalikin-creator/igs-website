import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",

  fields: [

    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Footer",
    }),

    defineField({
      name: "email",
      title: "Email Address 1 *",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description:
        "The first email address shown in the website footer.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "email2",
      title: "Email Address 2",
      type: "string",
      initialValue: "prashant-operations@igs-thailand.com",
      description:
        "A second email address shown in the footer. Leave blank if not needed.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "phone",
      title: "Phone Number *",
      type: "string",
      initialValue: "+66 967 258 165",
      description:
        "The phone number shown in the footer. Always include the country code. Example: '+66 967 258 165'",
      validation: (Rule) =>
        Rule.max(30).warning("Keep under 30 characters."),
    }),

    defineField({
      name: "address",
      title: "Office Address *",
      type: "text",
      rows: 4,
      initialValue:
        "3/12 Moo 4\nKo Phangan\nKo Pha-ngan District\nSurat Thani 84280\nThailand",
      description:
        "The address shown in the footer. Put each line of the address on a new line for the best display on the website.",
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? "Footer" }),
  },
});
