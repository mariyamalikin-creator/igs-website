import { defineField, defineType } from "sanity";

export const tradingDivisionPage = defineType({
  name: "tradingDivisionPage",
  title: "Trading Division",
  type: "document",

  groups: [
    { name: "banner",   title: "Hero Banner" },
    { name: "intro",    title: "Introduction" },
    { name: "services", title: "Our Services" },
    { name: "support",  title: "International Support" },
    { name: "cta",      title: "Get In Touch" },
  ],

  fields: [

    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Trading Division",
    }),

    // ─── HERO BANNER ─────────────────────────────────────────────────────────

    defineField({
      name: "heroSubtitle",
      title: "Banner Tagline",
      group: "banner",
      type: "text",
      rows: 2,
      initialValue:
        "Structured B2B commercial and cross-border trade services for businesses entering or operating in Thai and international markets.",
      description:
        "The sentence shown beneath 'Trading Division' in the hero banner. Keep to 1–2 lines.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — this may be cut off on smaller screens."),
    }),

    defineField({
      name: "heroImage",
      title: "Banner Background Image *",
      group: "banner",
      type: "image",
      options: { hotspot: true },
      description:
        "The large background image for this page. Upload a wide landscape photo at 1920×1080px or larger. A shipping port, cargo containers, or an international business setting works well.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (for accessibility)",
          type: "string",
          initialValue: "Cargo containers at an international shipping port.",
          description: "Briefly describe the image. Example: 'Cargo containers at an international shipping port.'",
        }),
      ],
    }),

    // ─── INTRODUCTION ────────────────────────────────────────────────────────

    defineField({
      name: "introText",
      title: "Page Introduction",
      group: "intro",
      type: "text",
      rows: 4,
      initialValue:
        "The IGS Trading Division provides structured B2B trade support for companies entering or expanding in Thai and international markets. We manage the full process from supplier identification and commercial negotiation to transaction coordination and delivery — giving businesses a single, reliable point of contact for all trade operations.",
      description:
        "The opening paragraph shown below the hero banner. Introduce the trading division's scope and approach. Aim for 3–5 sentences.",
      validation: (Rule) =>
        Rule.max(500).warning("Over 500 characters — consider shortening this introduction."),
    }),

    // ─── OUR SERVICES ────────────────────────────────────────────────────────

    defineField({
      name: "box1Title",
      title: "Service 1 — Name",
      group: "services",
      type: "string",
      initialValue: "Import & Export Coordination",
      description: "Short name for this service, shown as a heading in the grid.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — this may not display well in the grid."),
    }),
    defineField({
      name: "box1Description",
      title: "Service 1 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We manage the full import and export process including customs documentation, freight coordination, and regulatory compliance.",
      description: "1–2 sentences explaining what this service includes.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — this may not display well in the grid."),
    }),

    defineField({
      name: "box2Title",
      title: "Service 2 — Name",
      group: "services",
      type: "string",
      initialValue: "Supplier Sourcing",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "box2Description",
      title: "Service 2 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We identify and vet reliable suppliers across Thailand and Southeast Asia, matched to your product and quality requirements.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "box3Title",
      title: "Service 3 — Name",
      group: "services",
      type: "string",
      initialValue: "Commercial Negotiation",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "box3Description",
      title: "Service 3 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We negotiate directly with suppliers and partners on your behalf to secure the best commercial terms.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "box4Title",
      title: "Service 4 — Name",
      group: "services",
      type: "string",
      initialValue: "Business Representation",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "box4Description",
      title: "Service 4 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We act as your local representative in Thailand, managing supplier relationships and day-to-day commercial operations.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "box5Title",
      title: "Service 5 — Name",
      group: "services",
      type: "string",
      initialValue: "Transaction Coordination",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "box5Description",
      title: "Service 5 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We coordinate all stages of the transaction — from purchase order to final delivery — with full progress reporting throughout.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    // ─── INTERNATIONAL SUPPORT ───────────────────────────────────────────────

    defineField({
      name: "supportDescription",
      title: "International Support — Intro Text",
      group: "support",
      type: "text",
      rows: 3,
      initialValue:
        "Whether you are entering the Thai market for the first time or expanding an existing operation, we provide hands-on local coordination and the market knowledge to get things done right.",
      description:
        "A short paragraph shown in the 'Reliable International Support' section. Use it to reassure the reader that IGS understands the local market.",
      validation: (Rule) =>
        Rule.max(350).warning("Over 350 characters — consider shortening this paragraph."),
    }),

    defineField({
      name: "bullet1",
      title: "Key Point 1",
      group: "support",
      type: "string",
      initialValue: "Vetted supplier network across Thailand and Southeast Asia",
      description: "One short statement highlighting a key strength. Shown as a bullet point.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters for clean display."),
    }),
    defineField({
      name: "bullet2",
      title: "Key Point 2",
      group: "support",
      type: "string",
      initialValue: "End-to-end coordination from sourcing to delivery",
      description: "One short statement.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters."),
    }),
    defineField({
      name: "bullet3",
      title: "Key Point 3",
      group: "support",
      type: "string",
      initialValue: "Experienced in cross-border B2B trade and customs",
      description: "One short statement.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters."),
    }),
    defineField({
      name: "bullet4",
      title: "Key Point 4",
      group: "support",
      type: "string",
      initialValue: "Single point of contact for all trade operations",
      description: "One short statement.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters."),
    }),

    // ─── GET IN TOUCH ────────────────────────────────────────────────────────

    defineField({
      name: "ctaSubtitle",
      title: "Get In Touch — Tagline",
      group: "cta",
      type: "text",
      rows: 2,
      initialValue: "Looking for a reliable trade partner in Thailand? Let's talk.",
      description: "A short sentence shown beneath the contact button at the bottom of the page.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — try shortening this text."),
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? "Trading Division" }),
  },
});
