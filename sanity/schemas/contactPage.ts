import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Us",
  type: "document",

  groups: [
    { name: "banner", title: "Hero Banner" },
    { name: "branch", title: "Koh Phangan Office" },
    { name: "hq",     title: "Head Office" },
    { name: "map",    title: "Map & Directions" },
  ],

  fields: [

    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Contact Us",
    }),

    // ─── HERO BANNER ─────────────────────────────────────────────────────────

    defineField({
      name: "heroSubtitle",
      title: "Banner Tagline",
      group: "banner",
      type: "text",
      rows: 2,
      initialValue:
        "Reach out to our team in Koh Phangan or at our corporate head office. We are here to help.",
      description:
        "The sentence shown beneath 'Contact Us' in the hero banner. Keep to 1–2 lines.",
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
        "The large background image for this page. Upload a wide landscape photo at 1920×1080px or larger.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (for accessibility)",
          type: "string",
          initialValue: "Koh Phangan beach view near the IGS office.",
          description: "Briefly describe the image. Example: 'Koh Phangan beach view near the IGS office.'",
        }),
      ],
    }),

    // ─── KOH PHANGAN OFFICE ──────────────────────────────────────────────────

    defineField({
      name: "branchAddress",
      title: "Koh Phangan Office — Street Address *",
      group: "branch",
      type: "text",
      rows: 3,
      initialValue:
        "3/12 Moo 4, Ko Phangan, Ko Phangan District, Surat Thani 84280, Thailand",
      description:
        "The full postal address for the Koh Phangan branch. Update this if the office moves.",
    }),

    defineField({
      name: "branchPhone",
      title: "Koh Phangan Office — Phone Number *",
      group: "branch",
      type: "string",
      initialValue: "+66 967 258 165",
      description:
        "The phone number for the Koh Phangan office. Always include the country code. Example: '+66 967 258 165'",
      validation: (Rule) =>
        Rule.max(30).warning("Keep under 30 characters."),
    }),

    defineField({
      name: "branchEmail",
      title: "Koh Phangan Office — Email 1",
      group: "branch",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description: "First email address shown for the Koh Phangan office.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "branchEmail2",
      title: "Koh Phangan Office — Email 2",
      group: "branch",
      type: "string",
      initialValue: "prashant-operations@igs-thailand.com",
      description: "Second email address shown for the Koh Phangan office. Leave blank if not needed.",
      validation: (Rule) => Rule.email(),
    }),

    // ─── CORPORATE HEAD OFFICE ───────────────────────────────────────────────

    defineField({
      name: "hqAddress",
      title: "Head Office — Street Address *",
      group: "hq",
      type: "text",
      rows: 3,
      initialValue:
        "918/165 Villaggio Pracha Uthit 90, Moo 10, Nai Khlong Bang Pla Kot, Phra Samut Chedi District, Samut Prakan 10290, Thailand",
      description:
        "The full postal address for the corporate head office. Update this if the office moves.",
    }),

    defineField({
      name: "hqPhoneLabel",
      title: "Head Office — Phone 1 Label",
      group: "hq",
      type: "string",
      initialValue: "B2B & Trading",
      description: "Label shown before the first phone number. E.g. 'B2B & Trading'.",
    }),

    defineField({
      name: "hqPhone",
      title: "Head Office — Phone 1 Number",
      group: "hq",
      type: "string",
      initialValue: "+66 98 638 9665",
      description: "Always include the country code. E.g. '+66 98 638 9665'.",
      validation: (Rule) => Rule.max(30).warning("Keep under 30 characters."),
    }),

    defineField({
      name: "hqPhone2Label",
      title: "Head Office — Phone 2 Label",
      group: "hq",
      type: "string",
      initialValue: "Legal",
      description: "Label shown before the second phone number. E.g. 'Legal'.",
    }),

    defineField({
      name: "hqPhone2",
      title: "Head Office — Phone 2 Number",
      group: "hq",
      type: "string",
      initialValue: "+66 96 725 8165",
      description: "Always include the country code. Leave blank if not needed.",
      validation: (Rule) => Rule.max(30).warning("Keep under 30 characters."),
    }),

    defineField({
      name: "hqEmail",
      title: "Head Office — Email 1",
      group: "hq",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description: "First email address shown for the head office.",
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: "hqEmail2",
      title: "Head Office — Email 2",
      group: "hq",
      type: "string",
      initialValue: "prashant-operations@igs-thailand.com",
      description: "Second email address shown for the head office. Leave blank if not needed.",
      validation: (Rule) => Rule.email(),
    }),

    // ─── MAP & DIRECTIONS ────────────────────────────────────────────────────

    defineField({
      name: "findUsAddress",
      title: "Map Section — Address Shown",
      group: "map",
      type: "text",
      rows: 3,
      initialValue:
        "3/12 Moo 4, Ko Phangan, Ko Phangan District, Surat Thani 84280, Thailand",
      description:
        "The address shown alongside the map on the Contact page. This is usually the Koh Phangan office address.",
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? "Contact Us" }),
  },
});
