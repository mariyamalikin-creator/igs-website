import { defineField, defineType } from "sanity";

export const serviceDivision = defineType({
  name: "serviceDivision",
  title: "Service Division",
  type: "document",

  groups: [
    { name: "hero",     title: "Hero Banner"    },
    { name: "intro",    title: "Introduction"   },
    { name: "services", title: "Services"       },
    { name: "trust",    title: "Why Choose Us"  },
    { name: "team",     title: "Legal Team"     },
    { name: "cta",      title: "Call to Action" },
    { name: "seo",      title: "SEO Settings"   },
  ],

  fields: [
    // ── Hero Banner ───────────────────────────────────────────────────────────

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      group: "hero",
      description: "The main heading shown in the hero banner and used in navigation. E.g. 'Property Services'.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters."),
    }),

    defineField({
      name: "slug",
      title: "Page URL",
      type: "slug",
      group: "hero",
      hidden: true,
      options: {
        source: "title",
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
    }),

    defineField({
      name: "subtitle",
      title: "Page Tagline",
      type: "string",
      group: "hero",
      description:
        "A short tagline shown below the page title in the hero banner. One clear sentence. E.g. 'Trusted property advisory for foreign buyers and investors in Thailand.'",
      validation: (Rule) => Rule.max(160).warning("Over 160 characters — try shortening."),
    }),

    defineField({
      name: "accentStatement",
      title: "Hero Accent Statement",
      type: "string",
      group: "hero",
      hidden: ({ document }) => {
        const slug = (document?.slug as { current?: string } | undefined)?.current;
        return slug === "property-services" || slug === "law-firm" || slug === "trading-division";
      },
      description:
        "Optional italic statement shown in gold text at the bottom of the hero banner. Should be a short, memorable sentence. E.g. 'Every transaction is handled with the precision your investment deserves.'",
      validation: (Rule) => Rule.max(180).warning("Over 180 characters — keep this concise."),
    }),

    defineField({
      name: "heroImage",
      title: "Banner Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      description:
        "Full-width background image for the hero banner. Best results: wide landscape, 1920×1080px or larger.",
      fields: [
        defineField({
          name: "alt",
          title: "Image Description",
          type: "string",
          description:
            "Briefly describe the image for accessibility. E.g. 'Aerial view of Koh Phangan coastline, Thailand.'",
        }),
      ],
    }),

    // ── Introduction ──────────────────────────────────────────────────────────

    defineField({
      name: "description",
      title: "Introduction Text",
      type: "array",
      group: "intro",
      of: [{ type: "block" }],
      description:
        "The main introduction shown below the hero banner. Use 2–3 short paragraphs. Keep it clear and client-focused.",
    }),

    // ── Services ──────────────────────────────────────────────────────────────

    defineField({
      name: "servicesHeading",
      title: "Section Heading",
      type: "string",
      group: "services",
      description:
        "Main heading for the services grid. E.g. 'What We Cover' or 'Legal Services'.",
      validation: (Rule) => Rule.max(80).warning("Keep under 80 characters."),
    }),

    defineField({
      name: "servicesSubheading",
      title: "Section Subheading",
      type: "string",
      group: "services",
      description:
        "Supporting line below the services heading. E.g. 'Comprehensive property support from search to registered ownership.'",
      validation: (Rule) => Rule.max(160).warning("Over 160 characters — try shortening."),
    }),

    defineField({
      name: "servicesList",
      title: "Services",
      type: "array",
      group: "services",
      description:
        "The individual services shown in the grid. Click 'Add item' to add a new service.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "internalName",
              title: "Internal Label",
              type: "string",
              description:
                "For your reference only — not shown on the website. Helps you identify items in this list. E.g. '1 — Property Search'.",
            }),
            defineField({
              name: "title",
              title: "Service Title *",
              type: "string",
              description:
                "The service name displayed on the website. E.g. 'Property Search & Selection'.",
              validation: (Rule) =>
                Rule.max(60).warning("Keep under 60 characters."),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description:
                "Icon identifier set by your developer. Do not change unless instructed.",
            }),
            defineField({
              name: "description",
              title: "Short Description",
              type: "text",
              rows: 2,
              description:
                "1–2 sentences explaining what this service covers. Shown below the service title.",
              validation: (Rule) =>
                Rule.max(200).warning("Over 200 characters — try shortening."),
            }),
          ],
          preview: {
            select: { title: "internalName", subtitle: "title" },
            prepare: ({ title, subtitle }: { title?: string; subtitle?: string }) => ({
              title: title || subtitle || "New Service",
              subtitle: subtitle || "",
            }),
          },
        },
      ],
    }),

    // ── Why Choose Us (Trust Section) ─────────────────────────────────────────

    defineField({
      name: "trustHeading",
      title: "Section Heading",
      type: "string",
      group: "trust",
      description:
        "Main heading for the trust / credentials section. E.g. 'Protected at Every Step'.",
      validation: (Rule) => Rule.max(80).warning("Keep under 80 characters."),
    }),

    defineField({
      name: "trustSubheading",
      title: "Section Description",
      type: "text",
      group: "trust",
      rows: 3,
      description:
        "1–2 sentences explaining the value of working with IGS. Shown below the heading.",
      validation: (Rule) =>
        Rule.max(300).warning("Over 300 characters — try shortening."),
    }),

    defineField({
      name: "trustPoints",
      title: "Bullet Points",
      type: "array",
      group: "trust",
      of: [{ type: "string" }],
      description:
        "Each item becomes a bullet point in this section. Add up to 5 points.",
      validation: (Rule) =>
        Rule.max(5).warning("More than 5 points may appear cluttered on the page."),
    }),

    // ── Legal Team (law-firm only) ────────────────────────────────────────────

    defineField({
      name: "legalTeam",
      title: "Team Members",
      type: "array",
      group: "team",
      hidden: ({ document }) =>
        (document?.slug as { current?: string } | undefined)?.current !== "law-firm",
      description:
        "The legal professionals shown on the Law Firm page. Click 'Add item' to add a new member.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Full Name *",
              type: "string",
              description: "E.g. 'Suwaree Chaijiraphan'.",
            }),
            defineField({
              name: "role",
              title: "Position / Title *",
              type: "string",
              description: "E.g. 'Chief Executive Officer' or 'Legal Consultant & Attorney'.",
            }),
            defineField({
              name: "email",
              title: "Email Address",
              type: "string",
              description: "Professional email address. Displayed as a clickable link on the page.",
            }),
            defineField({
              name: "bio",
              title: "Biography",
              type: "text",
              rows: 4,
              description: "2–4 sentences describing this person's role and experience at IGS.",
              validation: (Rule) =>
                Rule.max(600).warning("Over 600 characters — consider shortening."),
            }),
            defineField({
              name: "photo",
              title: "Profile Photo",
              type: "image",
              options: { hotspot: true },
              description:
                "Portrait photo. Best: square or portrait orientation, at least 400×400px.",
              fields: [
                defineField({
                  name: "alt",
                  title: "Image Description",
                  type: "string",
                  description: "E.g. 'Suwaree Chaijiraphan, CEO of Infinity Global Solutions'.",
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "role" },
          },
        },
      ],
    }),

    // ── Call to Action ────────────────────────────────────────────────────────

    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      group: "cta",
      description:
        "Main heading for the call-to-action section at the bottom of the page. E.g. 'Interested in Property in Thailand?'.",
      validation: (Rule) => Rule.max(80).warning("Keep under 80 characters."),
    }),

    defineField({
      name: "ctaSubheading",
      title: "CTA Supporting Text",
      type: "string",
      group: "cta",
      description:
        "Supporting sentence below the CTA heading, encouraging visitors to get in touch.",
      validation: (Rule) =>
        Rule.max(200).warning("Over 200 characters — try shortening."),
    }),

    // ── SEO ───────────────────────────────────────────────────────────────────

    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoFields",
      group: "seo",
      description:
        "Controls how this page appears in Google search results and when shared on social media.",
    }),
  ],

  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare: ({ title, subtitle }: { title?: string; subtitle?: string }) => ({
      title: title || "Untitled Division",
      subtitle: subtitle ? `/${subtitle}` : "",
    }),
  },
});
