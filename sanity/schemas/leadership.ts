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
      description: "Full name as it will appear on the website.",
      validation: (Rule) =>
        Rule.required().max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "role",
      title: "Job Title",
      type: "string",
      description: "Their role or position. Example: 'Chief Executive Officer'.",
      validation: (Rule) =>
        Rule.required().max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "shortBio",
      title: "Short Biography",
      type: "text",
      rows: 4,
      description: "2–3 sentences shown on the leadership card. Keep it professional and client-focused. Example: 'Suwaree leads IGS with direct oversight of legal services and client accountability across Thailand.'",
      validation: (Rule) =>
        Rule.max(400).warning("Over 400 characters — shorter bios display better on cards."),
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      description: "Optional. Shown as a contact link beneath the profile. Example: 'suwaree-hq@igs-thailand.com'",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
      description: "Professional headshot. Square or portrait crop works best. The face should be clearly visible.",
      fields: [
        defineField({
          name: "alt",
          title: "Photo Description (for accessibility)",
          type: "string",
          description: "Example: 'Portrait of Suwaree Chaijiraphan, CEO of IGS Thailand.'",
        }),
      ],
    }),
  ],

  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
