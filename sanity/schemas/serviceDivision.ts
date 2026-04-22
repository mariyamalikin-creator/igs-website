import { defineField, defineType } from "sanity";

export const serviceDivision = defineType({
  name: "serviceDivision",
  title: "Service Division",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
      description: "Must match the URL path: property-services, law-firm, or trading-division.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Short tagline shown below the page title.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Main descriptive text for this division.",
    }),
    defineField({
      name: "accentStatement",
      title: "Accent Statement",
      type: "string",
      description: "A unique pull-quote or emphasis line for this division (displayed as a standout quote block).",
    }),
    defineField({
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon Filename",
              type: "string",
              description: "Filename (without .svg) from /public/icons/. E.g. company-registration",
            }),
            defineField({
              name: "label",
              title: "Service Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Short Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "icon" },
          },
        },
      ],
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `/${subtitle}` }),
  },
});
