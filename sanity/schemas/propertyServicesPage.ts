import { defineField, defineType } from "sanity";

export const propertyServicesPage = defineType({
  name: "propertyServicesPage",
  title: "Property Services",
  type: "document",

  fields: [
    // ── SECTION 1: HERO ────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero — Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Trusted property advisory for foreign buyers and investors in Thailand — from search through to Land Office registration.",
      description: "Short sentence shown beneath 'Property Services' in the hero banner.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero — Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Main banner image for the Property Services page. Recommended: landscape, high resolution.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "Describe the image for accessibility. E.g. 'Aerial view of Koh Phangan coastline.'",
        }),
      ],
    }),

    // ── SECTION 2: INTRO ───────────────────────────────────────────────────
    defineField({
      name: "introText",
      title: "Intro — Body Text",
      type: "text",
      rows: 4,
      description: "Opening paragraph shown beneath the hero section.",
    }),

    // ── SECTION 3: WHAT WE COVER (6 fixed items) ───────────────────────────

    defineField({
      name: "cover1Title",
      title: "What We Cover — Item 1: Title",
      type: "string",
      initialValue: "Property Search & Selection",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover1Description",
      title: "What We Cover — Item 1: Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "cover2Title",
      title: "What We Cover — Item 2: Title",
      type: "string",
      initialValue: "Title Deed Verification",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover2Description",
      title: "What We Cover — Item 2: Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "cover3Title",
      title: "What We Cover — Item 3: Title",
      type: "string",
      initialValue: "Due Diligence Support",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover3Description",
      title: "What We Cover — Item 3: Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "cover4Title",
      title: "What We Cover — Item 4: Title",
      type: "string",
      initialValue: "Lease Agreement Review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover4Description",
      title: "What We Cover — Item 4: Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "cover5Title",
      title: "What We Cover — Item 5: Title",
      type: "string",
      initialValue: "Buyer Representation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover5Description",
      title: "What We Cover — Item 5: Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "cover6Title",
      title: "What We Cover — Item 6: Title",
      type: "string",
      initialValue: "Land Office Registration",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover6Description",
      title: "What We Cover — Item 6: Description",
      type: "text",
      rows: 2,
    }),

    // ── SECTION 4: PROTECTED AT EVERY STEP ────────────────────────────────
    defineField({
      name: "protectedDescription",
      title: "Protected at Every Step — Description",
      type: "text",
      rows: 3,
      description: "Short paragraph on the left side of this section.",
    }),
    defineField({
      name: "bullet1",
      title: "Bullet Point 1",
      type: "string",
      description: "First key point. Keep to one short sentence.",
    }),
    defineField({
      name: "bullet2",
      title: "Bullet Point 2",
      type: "string",
      description: "Second key point. Keep to one short sentence.",
    }),
    defineField({
      name: "bullet3",
      title: "Bullet Point 3",
      type: "string",
      description: "Third key point. Keep to one short sentence.",
    }),
    defineField({
      name: "bullet4",
      title: "Bullet Point 4",
      type: "string",
      description: "Fourth key point. Keep to one short sentence.",
    }),

    // ── SECTION 5: BOTTOM CTA ─────────────────────────────────────────────
    defineField({
      name: "ctaSubtitle",
      title: "Contact CTA — Subtitle",
      type: "text",
      rows: 2,
      description: "Short sentence beneath the call-to-action heading at the bottom of the page.",
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title ?? "Property Services" }),
  },
});
