import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",

  groups: [
    { name: "top",      title: "Top Section" },
    { name: "services", title: "Services Section" },
  ],

  fields: [

    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Homepage",
    }),

    // ─── TOP SECTION ─────────────────────────────────────────────────────────

    defineField({
      name: "heroTitle",
      title: "Main Heading",
      group: "top",
      type: "string",
      initialValue: "Integrated Legal, Property & Business Services",
      description:
        "The large heading shown at the top of the homepage. Keep it short and impactful — visitors read this first.",
      validation: (Rule) =>
        Rule.max(80).warning("Over 80 characters — try shortening the heading."),
    }),

    defineField({
      name: "heroSubtitle",
      title: "Short Description",
      group: "top",
      type: "text",
      rows: 2,
      initialValue:
        "Supporting individuals, investors, and businesses with trusted legal and advisory services across Koh Phangan and Thailand.",
      description:
        "The short sentence shown beneath the main heading at the top of the page. This is the first text visitors read — keep it clear and professional. Edit it to reflect any updates to the company's focus.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — this may be cut off on smaller screens."),
    }),

    defineField({
      name: "heroImage",
      title: "Top Image *",
      group: "top",
      type: "image",
      options: { hotspot: true },
      description:
        "The large background image at the top of the homepage. Upload a wide landscape photo at 1920×1080px or larger. A high-quality image of Koh Phangan, a villa, or a professional setting works well.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (for accessibility)",
          type: "string",
          initialValue: "Aerial view of Koh Phangan coastline at sunset.",
          description: "Briefly describe the image for visually impaired visitors. Example: 'Aerial view of Koh Phangan coastline at sunset.'",
        }),
      ],
    }),

    // ─── SERVICES SECTION ────────────────────────────────────────────────────

    defineField({
      name: "divisionsHeading",
      title: "Three Divisions — Section Heading",
      group: "services",
      type: "string",
      initialValue: "Three Integrated Divisions",
      description:
        "The bold heading shown above the three service cards. Keep it short.",
      validation: (Rule) =>
        Rule.max(80).warning("Over 80 characters — try shortening."),
    }),

    defineField({
      name: "divisionsSubheading",
      title: "Three Divisions — Section Subheading",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "One firm. One point of contact. Complete support across property, law, and business.",
      description:
        "A short sentence shown below the section heading, above the three service cards.",
      validation: (Rule) =>
        Rule.max(200).warning("Over 200 characters — try shortening this text."),
    }),

    defineField({
      name: "divisionProperty",
      title: "Property Services — Card",
      group: "services",
      type: "object",
      description: "The title, text, and photo shown on the Property Services card on the homepage.",
      fields: [
        defineField({
          name: "title",
          title: "Card Title",
          type: "string",
          initialValue: "Property Services",
          description: "The bold heading shown on the card.",
        }),
        defineField({
          name: "description",
          title: "Card Text",
          type: "text",
          rows: 3,
          initialValue:
            "We guide foreign buyers and investors through every step of purchasing or leasing property in Thailand — from first enquiry to Land Office registration.",
          description: "2–3 sentences summarising the Property Services division. Keep it focused on the client's benefit.",
          validation: (Rule) =>
            Rule.max(220).warning("Over 220 characters — this may overflow the card on smaller screens."),
        }),
        defineField({
          name: "image",
          title: "Card Photo *",
          type: "image",
          options: { hotspot: true },
          description: "Photo shown on the Property Services card. A villa, pool, or Koh Phangan landscape works well. Square or landscape crop preferred.",
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue: "Modern villa with a pool in Koh Phangan, Thailand.",
              description: "Example: 'Modern villa with a pool in Koh Phangan, Thailand.'",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "divisionLawFirm",
      title: "Law Firm — Card",
      group: "services",
      type: "object",
      description: "The title, text, and photo shown on the IGS Law Firm card on the homepage.",
      fields: [
        defineField({
          name: "title",
          title: "Card Title",
          type: "string",
          initialValue: "Law Firm",
          description: "The bold heading shown on the card.",
        }),
        defineField({
          name: "description",
          title: "Card Text",
          type: "text",
          rows: 3,
          initialValue:
            "Our licensed Thai lawyers handle company formation, work permits, visa applications, contract drafting, and all property-related legal requirements.",
          description: "2–3 sentences summarising the Law Firm services. Keep it professional and client-focused.",
          validation: (Rule) =>
            Rule.max(220).warning("Over 220 characters — this may overflow the card on smaller screens."),
        }),
        defineField({
          name: "image",
          title: "Card Photo *",
          type: "image",
          options: { hotspot: true },
          description: "Photo shown on the Law Firm card. A professional office interior or formal setting works well.",
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue: "Professional legal office interior in Thailand.",
              description: "Example: 'Professional legal office interior in Thailand.'",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "divisionTrading",
      title: "Trading Division — Card",
      group: "services",
      type: "object",
      description: "The title, text, and photo shown on the Trading Division card on the homepage.",
      fields: [
        defineField({
          name: "title",
          title: "Card Title",
          type: "string",
          initialValue: "Trading Division",
          description: "The bold heading shown on the card.",
        }),
        defineField({
          name: "description",
          title: "Card Text",
          type: "text",
          rows: 3,
          initialValue:
            "We connect businesses with vetted suppliers across Thailand and Southeast Asia — managing coordination from commercial negotiation to final delivery.",
          description: "2–3 sentences summarising the Trading Division. Keep it business-focused.",
          validation: (Rule) =>
            Rule.max(220).warning("Over 220 characters — this may overflow the card on smaller screens."),
        }),
        defineField({
          name: "image",
          title: "Card Photo *",
          type: "image",
          options: { hotspot: true },
          description: "Photo shown on the Trading Division card. A shipping port, cargo containers, or a business meeting works well.",
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue: "Cargo containers at an international shipping port in Southeast Asia.",
              description: "Example: 'Cargo containers at an international shipping port in Southeast Asia.'",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "whySubtitle",
      title: "Why Choose IGS — Intro Text",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We combine local expertise with international standards to serve our clients across Thailand.",
      description:
        "A short sentence shown beneath the 'Why Work With IGS' heading. This sets the tone for the four highlights below.",
      validation: (Rule) =>
        Rule.max(200).warning("Over 200 characters — try shortening this text."),
    }),

    defineField({
      name: "whyItem1Title",
      title: "Highlight 1 — Title",
      group: "services",
      type: "string",
      initialValue: "Integrated Under One Roof",
      description: "The bold heading shown on the first highlight card.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "whyItem1",
      title: "Highlight 1 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "Property, legal, and trading support from a single firm — no fragmented advisors, no gaps between services.",
      description: "1–2 sentences describing this key strength of IGS.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — may not display well on smaller screens."),
    }),

    defineField({
      name: "whyItem2Title",
      title: "Highlight 2 — Title",
      group: "services",
      type: "string",
      initialValue: "International Clients, Local Expertise",
      description: "The bold heading shown on the second highlight card.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "whyItem2",
      title: "Highlight 2 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "We understand the priorities of foreign investors and businesses operating in Thailand. English-speaking, internationally oriented.",
      description: "1–2 sentences describing a second key strength of IGS.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "whyItem3Title",
      title: "Highlight 3 — Title",
      group: "services",
      type: "string",
      initialValue: "End-to-End Support",
      description: "The bold heading shown on the third highlight card.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "whyItem3",
      title: "Highlight 3 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "From first inquiry through ownership transfer, company registration, or trade coordination — we support each step of the process.",
      description: "1–2 sentences describing a third key strength.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "whyItem4Title",
      title: "Highlight 4 — Title",
      group: "services",
      type: "string",
      initialValue: "Transparent and Professional",
      description: "The bold heading shown on the fourth highlight card.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "whyItem4",
      title: "Highlight 4 — Description",
      group: "services",
      type: "text",
      rows: 2,
      initialValue:
        "Clear communication, structured advice, and a consistent standard of professionalism across every engagement.",
      description: "1–2 sentences describing a fourth key strength.",
      validation: (Rule) =>
        Rule.max(180).warning("Over 180 characters — try shortening."),
    }),

    defineField({
      name: "leadershipHeading",
      title: "Our Leadership — Heading",
      group: "services",
      type: "string",
      initialValue: "Our Leadership",
      description: "The bold heading shown above the leadership portraits on the homepage.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "leadershipSubtitle",
      title: "Our Leadership — Intro Text",
      group: "services",
      type: "text",
      rows: 3,
      initialValue:
        "Infinity Global Solutions is built on deep knowledge of Thailand's legal and property landscape, and a commitment to guiding international clients safely through every process.",
      description: "A short paragraph shown beneath the 'Our Leadership' heading on the homepage.",
      validation: (Rule) =>
        Rule.max(300).warning("Over 300 characters — try shortening."),
    }),

    defineField({
      name: "ctaSubtitle",
      title: "Get In Touch — Tagline",
      group: "services",
      type: "text",
      rows: 2,
      initialValue: "Our team in Koh Phangan is ready to assist you.",
      description: "A short sentence shown beneath the contact button at the bottom of the homepage.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — try shortening."),
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title ?? "Homepage" }),
  },
});
