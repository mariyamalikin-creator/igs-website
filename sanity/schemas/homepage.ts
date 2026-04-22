import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",

  fields: [
    // ─── SECTION 1: HERO ────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero — Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Supporting individuals, investors, and businesses with trusted legal and advisory services across Koh Phangan and Thailand.",
      description: "The short sentence shown beneath the main title in the hero banner.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero — Background Image",
      type: "image",
      options: { hotspot: true },
      description: "The main banner image. Recommended: landscape, high resolution.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "Describe the image for accessibility and search engines.",
        }),
      ],
    }),

    // ─── SECTION 2: THREE INTEGRATED DIVISIONS ──────────────────────────────
    defineField({
      name: "divisionsSubtitle",
      title: "Divisions — Subtitle",
      type: "text",
      rows: 2,
      description: "Short description shown beneath the 'Three Integrated Divisions' heading.",
    }),
    defineField({
      name: "divisionProperty",
      title: "Division Card — Property Services",
      type: "object",
      description: "Content for the Property Services card.",
      fields: [
        defineField({
          name: "description",
          title: "Card Description",
          type: "text",
          rows: 3,
          description: "Short description shown on the Property Services card.",
        }),
        defineField({
          name: "image",
          title: "Card Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Image Description (Alt Text)",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "divisionLawFirm",
      title: "Division Card — IGS Law Firm",
      type: "object",
      description: "Content for the Law Firm card.",
      fields: [
        defineField({
          name: "description",
          title: "Card Description",
          type: "text",
          rows: 3,
          description: "Short description shown on the Law Firm card.",
        }),
        defineField({
          name: "image",
          title: "Card Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Image Description (Alt Text)",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "divisionTrading",
      title: "Division Card — Trading Division",
      type: "object",
      description: "Content for the Trading Division card.",
      fields: [
        defineField({
          name: "description",
          title: "Card Description",
          type: "text",
          rows: 3,
          description: "Short description shown on the Trading Division card.",
        }),
        defineField({
          name: "image",
          title: "Card Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Image Description (Alt Text)",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    // ─── SECTION 3: WHY WORK WITH IGS ───────────────────────────────────────
    defineField({
      name: "whySubtitle",
      title: "Why IGS — Subtitle",
      type: "text",
      rows: 2,
      description: "Short description shown beneath the 'Why Work With IGS' heading.",
    }),
    defineField({
      name: "whyItem1",
      title: "Why IGS — Feature 1 Description",
      type: "text",
      rows: 2,
      description: "Description for the first feature item.",
    }),
    defineField({
      name: "whyItem2",
      title: "Why IGS — Feature 2 Description",
      type: "text",
      rows: 2,
      description: "Description for the second feature item.",
    }),
    defineField({
      name: "whyItem3",
      title: "Why IGS — Feature 3 Description",
      type: "text",
      rows: 2,
      description: "Description for the third feature item.",
    }),
    defineField({
      name: "whyItem4",
      title: "Why IGS — Feature 4 Description",
      type: "text",
      rows: 2,
      description: "Description for the fourth feature item.",
    }),

    // ─── SECTION 4: LEADERSHIP PREVIEW ──────────────────────────────────────
    defineField({
      name: "leadershipSubtitle",
      title: "Leadership — Subtitle",
      type: "text",
      rows: 2,
      description: "Short description shown beneath the 'Our Leadership' heading.",
    }),

    // ─── SECTION 5: BOTTOM CTA ──────────────────────────────────────────────
    defineField({
      name: "ctaSubtitle",
      title: "Contact CTA — Subtitle",
      type: "text",
      rows: 2,
      description: "Short sentence shown beneath the call-to-action heading at the bottom of the page.",
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title ?? "Homepage" }),
  },
});
