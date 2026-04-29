import { defineField, defineType } from "sanity";

export const leadershipPage = defineType({
  name: "leadershipPage",
  title: "Leadership",
  type: "document",

  groups: [
    { name: "hero",   title: "Hero Banner"     },
    { name: "values", title: "Company Values"  },
    { name: "cta",    title: "Call to Action"  },
    { name: "seo",    title: "SEO Settings"    },
  ],

  fields: [
    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Leadership",
    }),

    // ── Hero Banner ───────────────────────────────────────────────────────────

    defineField({
      name: "heroSubtitle",
      title: "Page Tagline",
      type: "string",
      group: "hero",
      description:
        "The sentence shown beneath 'Leadership' in the hero banner. Keep to one clear line.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — try shortening."),
    }),

    defineField({
      name: "heroImage",
      title: "Banner Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      description:
        "Full-width background image for the hero banner. Best: wide landscape, 1920×1080px or larger.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description",
          type: "string",
          description:
            "Briefly describe the image for accessibility. E.g. 'IGS leadership team in a professional office setting.'",
        }),
      ],
    }),

    // ── Company Values ────────────────────────────────────────────────────────

    defineField({
      name: "value1Label",
      title: "Value 1 — Title",
      type: "string",
      group: "values",
      description: "Displayed as the value heading. E.g. 'Professional'.",
      validation: (Rule) => Rule.max(40).warning("Keep under 40 characters."),
    }),
    defineField({
      name: "value1Body",
      title: "Value 1 — Description",
      type: "text",
      rows: 2,
      group: "values",
      description: "1–2 sentences shown below the value title.",
      validation: (Rule) => Rule.max(160).warning("Over 160 characters — try shortening."),
    }),

    defineField({
      name: "value2Label",
      title: "Value 2 — Title",
      type: "string",
      group: "values",
      description: "Displayed as the value heading. E.g. 'International'.",
      validation: (Rule) => Rule.max(40).warning("Keep under 40 characters."),
    }),
    defineField({
      name: "value2Body",
      title: "Value 2 — Description",
      type: "text",
      rows: 2,
      group: "values",
      description: "1–2 sentences shown below the value title.",
      validation: (Rule) => Rule.max(160).warning("Over 160 characters — try shortening."),
    }),

    defineField({
      name: "value3Label",
      title: "Value 3 — Title",
      type: "string",
      group: "values",
      description: "Displayed as the value heading. E.g. 'Integrated'.",
      validation: (Rule) => Rule.max(40).warning("Keep under 40 characters."),
    }),
    defineField({
      name: "value3Body",
      title: "Value 3 — Description",
      type: "text",
      rows: 2,
      group: "values",
      description: "1–2 sentences shown below the value title.",
      validation: (Rule) => Rule.max(160).warning("Over 160 characters — try shortening."),
    }),

    // ── Call to Action ────────────────────────────────────────────────────────

    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      group: "cta",
      description: "Main heading for the call-to-action section at the bottom. E.g. 'Work With Us'.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "ctaSubheading",
      title: "CTA Supporting Text",
      type: "string",
      group: "cta",
      description: "Supporting sentence below the CTA heading.",
      validation: (Rule) => Rule.max(200).warning("Over 200 characters — try shortening."),
    }),

    // ── SEO ───────────────────────────────────────────────────────────────────

    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoFields",
      group: "seo",
      description:
        "Controls how this page appears in Google search results and when shared on social media.",
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: () => ({ title: "Leadership" }),
  },
});
