import { defineField, defineType } from "sanity";

export const seoFields = defineType({
  name: "seoFields",
  title: "SEO Settings",
  type: "object",

  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title (Browser Tab & Google)",
      type: "string",
      description: "This appears in the browser tab and as the blue headline in Google search results. Keep it clear and specific. Example: 'Property Services in Koh Phangan | IGS Thailand'",
      validation: (Rule) =>
        Rule.max(60).warning("Over 60 characters — Google may cut this off in search results. Try to stay under 60."),
    }),

    defineField({
      name: "metaDescription",
      title: "Page Description (Google Search Preview)",
      type: "text",
      rows: 3,
      description: "The short summary shown beneath your page title in Google results. Write a clear, compelling sentence about the page. Aim for 140–160 characters. Example: 'IGS Thailand offers trusted property advisory for foreign buyers — from search to Land Office registration.'",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — Google will cut this off. Aim for 140–160 characters."),
    }),

    defineField({
      name: "ogImage",
      title: "Social Media Preview Image",
      type: "image",
      options: { hotspot: true },
      description: "The image shown when someone shares this page on Facebook, LinkedIn, or WhatsApp. Recommended size: 1200×630px. If left blank, the website's default image will be used.",
    }),
  ],
});
