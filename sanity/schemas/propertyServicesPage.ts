import { defineField, defineType } from "sanity";

export const propertyServicesPage = defineType({
  name: "propertyServicesPage",
  title: "Property Services",
  type: "document",

  groups: [
    { name: "banner",      title: "Hero Banner" },
    { name: "intro",       title: "Introduction" },
    { name: "services",    title: "What We Cover" },
    { name: "reassurance", title: "Peace of Mind" },
    { name: "cta",         title: "Get In Touch" },
  ],

  fields: [

    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Property Services",
    }),

    // ─── HERO BANNER ─────────────────────────────────────────────────────────

    defineField({
      name: "heroSubtitle",
      title: "Banner Tagline",
      group: "banner",
      type: "text",
      rows: 2,
      initialValue:
        "Trusted property advisory for foreign buyers and investors in Thailand — from search through to Land Office registration.",
      description:
        "The sentence shown beneath 'Property Services' in the hero banner. Keep to 1–2 lines.",
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
        "The large background image for this page. Upload a wide landscape photo at 1920×1080px or larger. A luxury villa, Koh Phangan scenery, or a Thai property works well.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (for accessibility)",
          type: "string",
          initialValue: "Aerial view of a luxury villa in Koh Phangan, Thailand.",
          description: "Briefly describe the image. Example: 'Aerial view of a luxury villa in Koh Phangan, Thailand.'",
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
        "Buying or leasing property in Thailand as a foreigner requires careful legal guidance. At Infinity Global Solutions, we manage every stage of the process — from identifying the right property to verifying title deeds, reviewing contracts, and completing registration at the Land Office. Our team ensures your investment is protected at every step.",
      description:
        "The opening paragraph shown below the hero banner. This is the first thing visitors read — use it to introduce your property services and reassure the reader. Aim for 3–5 sentences.",
      validation: (Rule) =>
        Rule.max(500).warning("Over 500 characters — consider shortening this introduction."),
    }),

    // ─── WHAT WE COVER ───────────────────────────────────────────────────────

    defineField({
      name: "cover1Title",
      title: "Service 1 — Name",
      group: "services",
      type: "string",
      initialValue: "Property Search & Selection",
      description: "Short name for this service, shown as a heading in the grid.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — this may not display well in the grid."),
    }),
    defineField({
      name: "cover1Description",
      title: "Service 1 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We identify properties that match your needs, budget, and investment goals across Koh Phangan, Samui, and beyond.",
      description: "1–2 sentences explaining what this service includes.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — this may not display well in the grid."),
    }),

    defineField({
      name: "cover2Title",
      title: "Service 2 — Name",
      group: "services",
      type: "string",
      initialValue: "Title Deed Verification",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "cover2Description",
      title: "Service 2 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We verify the legal status and ownership history of every property before you commit to a purchase.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "cover3Title",
      title: "Service 3 — Name",
      group: "services",
      type: "string",
      initialValue: "Due Diligence Support",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "cover3Description",
      title: "Service 3 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We carry out thorough checks on planning permissions, land use rights, and any outstanding encumbrances on the property.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "cover4Title",
      title: "Service 4 — Name",
      group: "services",
      type: "string",
      initialValue: "Lease Agreement Review",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "cover4Description",
      title: "Service 4 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We review and negotiate long-term lease agreements to ensure your rights as a tenant or lessee are fully protected.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "cover5Title",
      title: "Service 5 — Name",
      group: "services",
      type: "string",
      initialValue: "Buyer Representation",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "cover5Description",
      title: "Service 5 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We represent your interests throughout the negotiation and purchase process, ensuring fair terms and full transparency.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "cover6Title",
      title: "Service 6 — Name",
      group: "services",
      type: "string",
      initialValue: "Land Office Registration",
      description: "Short name for this service.",
      validation: (Rule) =>
        Rule.max(50).warning("Over 50 characters — try shortening."),
    }),
    defineField({
      name: "cover6Description",
      title: "Service 6 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We handle the full registration process at the Land Office to ensure your ownership or lease is legally recorded.",
      description: "1–2 sentences explaining this service.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    // ─── PEACE OF MIND ───────────────────────────────────────────────────────

    defineField({
      name: "protectedDescription",
      title: "Peace of Mind — Intro Text",
      group: "reassurance",
      type: "text",
      rows: 3,
      initialValue:
        "Buying property in a foreign country can feel daunting. At IGS, we ensure you are fully protected at every stage — from your first viewing to the final Land Office registration.",
      description:
        "A short paragraph shown in the 'Protected at Every Step' section. Use it to reassure the reader that they are in safe hands.",
      validation: (Rule) =>
        Rule.max(350).warning("Over 350 characters — try shortening this paragraph."),
    }),

    defineField({
      name: "bullet1",
      title: "Reassurance Point 1",
      group: "reassurance",
      type: "string",
      initialValue: "All contracts reviewed by a licensed Thai lawyer",
      description: "One short, reassuring statement shown as a bullet point.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters for clean display."),
    }),
    defineField({
      name: "bullet2",
      title: "Reassurance Point 2",
      group: "reassurance",
      type: "string",
      initialValue: "Title deed verification before any commitment",
      description: "One short, reassuring statement.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters."),
    }),
    defineField({
      name: "bullet3",
      title: "Reassurance Point 3",
      group: "reassurance",
      type: "string",
      initialValue: "Full due diligence on planning permissions and land use",
      description: "One short, reassuring statement.",
      validation: (Rule) =>
        Rule.max(100).warning("Keep under 100 characters."),
    }),
    defineField({
      name: "bullet4",
      title: "Reassurance Point 4",
      group: "reassurance",
      type: "string",
      initialValue: "Independent representation — always acting in your interest",
      description: "One short, reassuring statement.",
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
      initialValue:
        "Ready to start your property search? Our team is here to guide you every step of the way.",
      description: "A short sentence shown beneath the contact button at the bottom of the page.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — try shortening this text."),
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? "Property Services" }),
  },
});
