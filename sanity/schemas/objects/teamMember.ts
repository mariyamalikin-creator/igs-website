import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "object",
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
      name: "email",
      title: "Email Address",
      type: "string",
      description: "Optional — leave blank if not shown publicly.",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
      description: "Short professional bio for this team member.",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "profileImageAlt",
      title: "Profile Image — Alt Text",
      type: "string",
      description: "Describe the photo for accessibility. E.g. 'Portrait of Suwaree Chaijiraphan'",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "profileImage" },
  },
});
