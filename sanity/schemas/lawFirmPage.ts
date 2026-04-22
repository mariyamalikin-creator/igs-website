import { defineField, defineType } from "sanity";

export const lawFirmPage = defineType({
  name: "lawFirmPage",
  title: "Law Firm",
  type: "document",

  fields: [
    // ── SECTION 1: HERO ────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero — Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Comprehensive Thai legal services for individuals and businesses — property law, company formation, work permits, tax, and compliance.",
      description: "Short sentence shown beneath 'IGS Law Firm' in the hero banner.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero — Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Main banner image for the Law Firm page. Recommended: landscape, high resolution.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "Describe the image for accessibility.",
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

    // ── SECTION 3: OUR LEGAL TEAM ─────────────────────────────────────────

    // Fixed member 1 — Suwaree Chaijiraphan
    defineField({
      name: "member1Name",
      title: "Member 1 — Full Name",
      type: "string",
      initialValue: "Suwaree Chaijiraphan",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "member1Role",
      title: "Member 1 — Role / Title",
      type: "string",
      initialValue: "Chief Executive Officer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "member1Email",
      title: "Member 1 — Email Address",
      type: "string",
      description: "Optional — leave blank if not shown publicly.",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "member1Bio",
      title: "Member 1 — Bio",
      type: "text",
      rows: 3,
      initialValue: "Suwaree leads Infinity Global Solutions with direct oversight of legal services and client accountability. She ensures the highest standards of professional service delivery for all IGS clients across Thailand.",
    }),
    defineField({
      name: "member1ProfileImage",
      title: "Member 1 — Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "member1ProfileImageAlt",
      title: "Member 1 — Profile Image Alt Text",
      type: "string",
      initialValue: "Portrait of Suwaree Chaijiraphan, CEO of IGS Thailand",
      description: "Describe the photo for accessibility.",
    }),

    // Fixed member 2 — Prashant Dubey
    defineField({
      name: "member2Name",
      title: "Member 2 — Full Name",
      type: "string",
      initialValue: "Prashant Dubey",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "member2Role",
      title: "Member 2 — Role / Title",
      type: "string",
      initialValue: "Chief Operating Officer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "member2Email",
      title: "Member 2 — Email Address",
      type: "string",
      description: "Optional — leave blank if not shown publicly.",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "member2Bio",
      title: "Member 2 — Bio",
      type: "text",
      rows: 3,
      initialValue: "Prashant oversees all company operations and manages the IGS Trading Division. He ensures seamless execution of B2B commercial and operational services for domestic and international clients.",
    }),
    defineField({
      name: "member2ProfileImage",
      title: "Member 2 — Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "member2ProfileImageAlt",
      title: "Member 2 — Profile Image Alt Text",
      type: "string",
      initialValue: "Portrait of Prashant Dubey, COO of IGS Thailand",
      description: "Describe the photo for accessibility.",
    }),

    // Additional members — "Add item" button
    defineField({
      name: "additionalMembers",
      title: "Additional Team Members",
      type: "array",
      description: "Use this to add more team members beyond the two above.",
      of: [{ type: "teamMember" }],
    }),

    // ── SECTION 4: BOTTOM CTA ─────────────────────────────────────────────
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
    prepare: ({ title }) => ({ title: title ?? "Law Firm" }),
  },
});
