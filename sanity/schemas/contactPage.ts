import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Us",
  type: "document",

  fields: [

    // ── SECTION 1: HERO ────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero — Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Reach out to our team in Koh Phangan or at our corporate head office. We are here to help.",
      description: "Short sentence shown beneath 'Contact Us' in the hero banner.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero — Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Main banner image for the Contact page. Recommended: landscape, high resolution.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "Describe the image for accessibility.",
        }),
      ],
    }),

    // ── SECTION 2: BRANCH — KOH PHANGAN ───────────────────────────────────
    defineField({
      name: "branchAddress",
      title: "Koh Phangan Branch — Address",
      type: "text",
      rows: 3,
      initialValue: "3/12 Moo 4, Ko Phangan, Ko Phangan District, Surat Thani 84280, Thailand",
    }),
    defineField({
      name: "branchPhone",
      title: "Koh Phangan Branch — Phone",
      type: "string",
      initialValue: "+66 967 258 165",
      description: "Include country code.",
    }),
    defineField({
      name: "branchEmail",
      title: "Koh Phangan Branch — Email",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      validation: (Rule) => Rule.email(),
    }),

    // ── SECTION 3: CORPORATE HEAD OFFICE ──────────────────────────────────
    defineField({
      name: "hqAddress",
      title: "Corporate Head Office — Address",
      type: "text",
      rows: 3,
      initialValue: "918/165 Villaggio Pracha Uthit 90, Moo 10, Nai Khlong Bang Pla Kot, Phra Samut Chedi District, Samut Prakan 10290, Thailand",
    }),
    defineField({
      name: "hqPhone",
      title: "Corporate Head Office — Phone",
      type: "string",
      initialValue: "+66 98 638 9665",
      description: "Include country code.",
    }),
    defineField({
      name: "hqEmail",
      title: "Corporate Head Office — Email",
      type: "string",
      initialValue: "prashant-operations@igs-thailand.com",
      validation: (Rule) => Rule.email(),
    }),

    // ── SECTION 4: FIND US ─────────────────────────────────────────────────
    defineField({
      name: "findUsAddress",
      title: "Find Us — Address",
      type: "text",
      rows: 3,
      initialValue: "3/12 Moo 4, Ko Phangan, Ko Phangan District, Surat Thani 84280, Thailand",
      description: "Address shown in the map/directions section.",
    }),
  ],

  preview: {
    prepare: () => ({ title: "Contact Us" }),
  },
});
