import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "object",

  fields: [
    defineField({
      name: "name",
      title: "Full Name *",
      type: "string",
      description: "Full name as it will appear on the website.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "role",
      title: "Job Title *",
      type: "string",
      description: "Their role or position. Example: 'Senior Legal Advisor' or 'Property Consultant'.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      description: "Optional — leave blank if this email should not appear publicly on the website.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 3,
      description:
        "2–3 sentences about this person's background and expertise. Keep it professional and relevant to clients. Example: 'Maria specialises in Thai property law and has assisted over 50 international buyers with purchases in Koh Phangan.'",
      validation: (Rule) =>
        Rule.max(400).warning("Over 400 characters — consider shortening the bio."),
    }),

    defineField({
      name: "profileImage",
      title: "Profile Photo *",
      type: "image",
      options: { hotspot: true },
      description: "Professional headshot. Square or portrait crop works best. The face should be clearly visible.",
    }),

    defineField({
      name: "profileImageAlt",
      title: "Photo Description (for accessibility)",
      type: "string",
      description:
        "Briefly describe the photo for screen readers. Example: 'Portrait of Maria Smirnova, Property Consultant at IGS Thailand.'",
    }),
  ],

  preview: {
    select: { title: "name", subtitle: "role", media: "profileImage" },
  },
});
