import { defineField, defineType } from "sanity";

export const tradingDivisionPage = defineType({
  name: "tradingDivisionPage",
  title: "Trading Division",
  type: "document",

  fields: [
    // ── SECTION 1: HERO ────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero — Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Structured B2B commercial and cross-border trade services for businesses entering or operating in Thai and international markets.",
      description: "Short sentence shown beneath 'Trading Division' in the hero banner.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero — Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Main banner image for the Trading Division page. Recommended: landscape, high resolution.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "Describe the image for accessibility. E.g. 'Cargo containers at a port.'",
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

    // ── SECTION 3: TRADING & BUSINESS SUPPORT (5 fixed boxes) ─────────────

    defineField({
      name: "box1Title",
      title: "Box 1 — Title",
      type: "string",
      initialValue: "Import & Export Coordination",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "box1Description",
      title: "Box 1 — Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "box2Title",
      title: "Box 2 — Title",
      type: "string",
      initialValue: "Supplier Sourcing",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "box2Description",
      title: "Box 2 — Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "box3Title",
      title: "Box 3 — Title",
      type: "string",
      initialValue: "Commercial Negotiation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "box3Description",
      title: "Box 3 — Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "box4Title",
      title: "Box 4 — Title",
      type: "string",
      initialValue: "Business Representation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "box4Description",
      title: "Box 4 — Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "box5Title",
      title: "Box 5 — Title",
      type: "string",
      initialValue: "Transaction Coordination",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "box5Description",
      title: "Box 5 — Description",
      type: "text",
      rows: 2,
    }),

    // ── SECTION 4: RELIABLE INTERNATIONAL SUPPORT ─────────────────────────
    defineField({
      name: "supportDescription",
      title: "Reliable International Support — Description",
      type: "text",
      rows: 3,
      description: "Short paragraph on the left side of this section.",
    }),
    defineField({
      name: "bullet1",
      title: "Bullet Point 1",
      type: "string",
      description: "Keep to one short sentence.",
    }),
    defineField({
      name: "bullet2",
      title: "Bullet Point 2",
      type: "string",
      description: "Keep to one short sentence.",
    }),
    defineField({
      name: "bullet3",
      title: "Bullet Point 3",
      type: "string",
      description: "Keep to one short sentence.",
    }),
    defineField({
      name: "bullet4",
      title: "Bullet Point 4",
      type: "string",
      description: "Keep to one short sentence.",
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
    prepare: ({ title }) => ({ title: title ?? "Trading Division" }),
  },
});
