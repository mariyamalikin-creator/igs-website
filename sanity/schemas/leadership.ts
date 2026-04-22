import { defineField, defineType } from "sanity";

export const leadership = defineType({
  name: "leadership",
  title: "Leadership",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      description: "2–3 sentences shown on the leadership card. Keep it concise.",
      validation: (Rule) => Rule.max(400).warning("Bio should be under 400 characters for best display."),
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
      description: "Professional headshot. Square or portrait crop works best.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "e.g. 'Portrait of Suwaree Chaijiraphan'",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
