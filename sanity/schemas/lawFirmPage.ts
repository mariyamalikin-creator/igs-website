import { defineField, defineType } from "sanity";

export const lawFirmPage = defineType({
  name: "lawFirmPage",
  title: "Law Firm",
  type: "document",

  groups: [
    { name: "banner", title: "Hero Banner" },
    { name: "intro",  title: "Introduction" },
    { name: "team",   title: "Legal Team" },
    { name: "cta",    title: "Get In Touch" },
  ],

  fields: [

    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Law Firm",
    }),

    // ─── HERO BANNER ─────────────────────────────────────────────────────────

    defineField({
      name: "heroSubtitle",
      title: "Banner Tagline",
      group: "banner",
      type: "text",
      rows: 2,
      initialValue:
        "Comprehensive Thai legal services for individuals and businesses — property law, company formation, work permits, tax, and compliance.",
      description:
        "The sentence shown beneath 'IGS Law Firm' in the hero banner. Keep to 1–2 lines.",
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
        "The large background image for this page. Upload a wide landscape photo at 1920×1080px or larger. A professional office interior, legal setting, or modern building works well.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (for accessibility)",
          type: "string",
          initialValue: "Professional legal office interior in Thailand.",
          description: "Briefly describe the image. Example: 'Professional legal office interior in Thailand.'",
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
        "IGS Law Firm provides a full range of Thai legal services for foreign individuals and businesses operating in Thailand. Our licensed lawyers handle everything from company registration and BOI applications to property transactions, visa and work permit processing, and contract drafting. We work exclusively in the interests of our clients.",
      description:
        "The opening paragraph shown below the hero banner. Introduce the law firm's approach and expertise. Aim for 3–5 sentences.",
      validation: (Rule) =>
        Rule.max(500).warning("Over 500 characters — consider shortening this introduction."),
    }),

    // ─── LEGAL TEAM ──────────────────────────────────────────────────────────

    defineField({
      name: "member1Name",
      title: "Team Member 1 — Full Name",
      group: "team",
      type: "string",
      initialValue: "Suwaree Chaijiraphan",
      description: "Full name as it will appear on the website.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters."),
    }),
    defineField({
      name: "member1Role",
      title: "Team Member 1 — Job Title",
      group: "team",
      type: "string",
      initialValue: "Chief Executive Officer",
      description: "Their role or position. Example: 'Chief Executive Officer' or 'Senior Legal Advisor'.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters."),
    }),
    defineField({
      name: "member1Email",
      title: "Team Member 1 — Email Address",
      group: "team",
      type: "string",
      initialValue: "suwaree-hq@igs-thailand.com",
      description: "The email address shown publicly for this person. Leave blank if you do not want it displayed.",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "member1Bio",
      title: "Team Member 1 — Biography",
      group: "team",
      type: "text",
      rows: 3,
      initialValue:
        "Suwaree leads Infinity Global Solutions with direct oversight of legal services and client accountability. She ensures the highest standards of professional service delivery for all IGS clients across Thailand.",
      description: "2–3 sentences about this person's background and role. Keep it professional and client-focused.",
      validation: (Rule) =>
        Rule.max(400).warning("Over 400 characters — consider shortening the bio."),
    }),
    defineField({
      name: "member1ProfileImage",
      title: "Team Member 1 — Profile Photo *",
      group: "team",
      type: "image",
      options: { hotspot: true },
      description: "Professional headshot. Square or portrait crop works best. The face should be clearly visible.",
    }),
    defineField({
      name: "member1ProfileImageAlt",
      title: "Team Member 1 — Photo Description (for accessibility)",
      group: "team",
      type: "string",
      initialValue: "Portrait of Suwaree Chaijiraphan, CEO of IGS Thailand.",
      description: "Briefly describe the photo for screen readers. Example: 'Portrait of Suwaree Chaijiraphan, CEO of IGS Thailand.'",
    }),

    defineField({
      name: "member2Name",
      title: "Team Member 2 — Full Name",
      group: "team",
      type: "string",
      initialValue: "Prashant Dubey",
      description: "Full name as it will appear on the website.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters."),
    }),
    defineField({
      name: "member2Role",
      title: "Team Member 2 — Job Title",
      group: "team",
      type: "string",
      initialValue: "Chief Operating Officer",
      description: "Their role or position.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters."),
    }),
    defineField({
      name: "member2Email",
      title: "Team Member 2 — Email Address",
      group: "team",
      type: "string",
      initialValue: "prashant-operations@igs-thailand.com",
      description: "The email address shown publicly for this person. Leave blank if you do not want it displayed.",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "member2Bio",
      title: "Team Member 2 — Biography",
      group: "team",
      type: "text",
      rows: 3,
      initialValue:
        "Prashant oversees all company operations and manages the IGS Trading Division. He ensures seamless execution of B2B commercial and operational services for domestic and international clients.",
      description: "2–3 sentences about this person's background and role.",
      validation: (Rule) =>
        Rule.max(400).warning("Over 400 characters — consider shortening the bio."),
    }),
    defineField({
      name: "member2ProfileImage",
      title: "Team Member 2 — Profile Photo *",
      group: "team",
      type: "image",
      options: { hotspot: true },
      description: "Professional headshot. Square or portrait crop works best.",
    }),
    defineField({
      name: "member2ProfileImageAlt",
      title: "Team Member 2 — Photo Description (for accessibility)",
      group: "team",
      type: "string",
      initialValue: "Portrait of Prashant Dubey, COO of IGS Thailand.",
      description: "Briefly describe the photo. Example: 'Portrait of Prashant Dubey, COO of IGS Thailand.'",
    }),

    defineField({
      name: "additionalMembers",
      title: "Additional Team Members",
      group: "team",
      type: "array",
      description: "Add more team members here if needed. Click 'Add item' to add a new person.",
      of: [{ type: "teamMember" }],
    }),

    // ─── GET IN TOUCH ────────────────────────────────────────────────────────

    defineField({
      name: "ctaSubtitle",
      title: "Get In Touch — Tagline",
      group: "cta",
      type: "text",
      rows: 2,
      initialValue: "Need legal advice in Thailand? Our licensed team is ready to help.",
      description: "A short sentence shown beneath the contact button at the bottom of the page.",
      validation: (Rule) =>
        Rule.max(160).warning("Over 160 characters — try shortening this text."),
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? "Law Firm" }),
  },
});
