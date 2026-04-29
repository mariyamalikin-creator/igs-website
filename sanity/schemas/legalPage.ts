import { defineField, defineType } from "sanity";

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The title shown at the top of this legal page. Example: 'Privacy Policy' or 'Terms & Conditions'.",
      validation: (Rule) =>
        Rule.required().max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "slug",
      title: "Page URL",
      type: "slug",
      options: { source: "title" },
      description: "This controls the URL for this page. It is generated automatically from the title — you do not need to change it. Allowed values: 'privacy-policy' or 'terms'.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "body",
      title: "Page Content",
      type: "array",
      of: [{ type: "block" }],
      description: "The full content of this legal page. Use the formatting toolbar to add headings, bullet points, and bold text.",
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated Date",
      type: "date",
      description: "The date this document was last reviewed or updated. Shown at the top of the page.",
    }),

    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoFields",
      description: "Optional — controls how this page appears in Google search results.",
    }),
  ],

  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `/${subtitle}` }),
  },
});
