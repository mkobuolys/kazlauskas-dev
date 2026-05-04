// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mangirdas Kazlauskas, Expert Flutter Developer",
  tagline: "My personal blog about Flutter, Dart, and tech in general.",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "Mangirdas Kazlauskas, Google Developer Expert, GDE, Expert Flutter Developer, Flutter Development, Dart Development, Cross-platform App Development, Mobile App Development",
      },
    },
    {
      tagName: "meta",
      attributes: { name: "author", content: "Mangirdas Kazlauskas" },
    },
    {
      tagName: "meta",
      attributes: { property: "og:site_name", content: "kazlauskas.dev" },
    },
    {
      tagName: "meta",
      attributes: { name: "twitter:site", content: "@mkobuolys" },
    },
    {
      tagName: "meta",
      attributes: { name: "twitter:creator", content: "@mkobuolys" },
    },
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://kazlauskas.dev/#person",
            name: "Mangirdas Kazlauskas",
            alternateName: "mkobuolys",
            url: "https://kazlauskas.dev/",
            image: "https://kazlauskas.dev/img/mkobuolys.png",
            jobTitle: "Mobile Tech Lead",
            worksFor: { "@type": "Organization", name: "Billo" },
            description:
              "Google Developer Expert for Flutter & Dart. Mobile Tech Lead, conference speaker, and Flutter Vilnius organiser based in Lithuania.",
            knowsAbout: [
              "Flutter",
              "Dart",
              "Mobile App Development",
              "Cross-platform Development",
              "Software Architecture",
              "Public Speaking",
            ],
            sameAs: [
              "https://x.com/mkobuolys",
              "https://linkedin.com/in/mangirdas-kazlauskas",
              "https://github.com/mkobuolys",
              "https://youtube.com/@mkobuolys",
              "https://sessionize.com/mangirdas-kazlauskas",
              "https://stackoverflow.com/users/15427566/mkobuolys",
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://kazlauskas.dev/#website",
            url: "https://kazlauskas.dev/",
            name: "kazlauskas.dev",
            description:
              "Mangirdas Kazlauskas personal site about Flutter, Dart, and tech in general.",
            inLanguage: "en",
            publisher: { "@id": "https://kazlauskas.dev/#person" },
            author: { "@id": "https://kazlauskas.dev/#person" },
          },
        ],
      }),
    },
  ],
  url: "https://kazlauskas.dev",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenAnchors: "throw",
  onBrokenLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: "Mangirdas Kazlauskas Blog",
          blogDescription:
            "My personal blog about Flutter, Dart, and tech in general.",
          blogSidebarTitle: "All blog posts",
          blogSidebarCount: "ALL",
          editUrl: "https://github.com/mkobuolys/kazlauskas-dev/tree/main",
          onInlineAuthors: "throw",
          onInlineTags: "throw",
          onUntruncatedBlogPosts: "throw",
          showReadingTime: true,
          showLastUpdateTime: true,
        },
        gtag: {
          trackingID: "G-23PB6WRXH9",
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: "date",
          ignorePatterns: [
            "/blog/tags/**",
            "/blog/page/**",
            "/blog/archive",
            "/blog/archive/**",
            "/blog/authors/**",
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/mkobuolys.png",
      navbar: {
        title: "kazlauskas.dev",
        logo: {
          alt: "mkobuolys logo",
          src: "img/mkobuolys.png",
        },
        items: [
          {
            label: "Blog",
            to: "blog",
          },
          {
            label: "Presentations",
            to: "presentations",
          },
          {
            label: "Subscribe 🙏",
            to: "https://pages.kazlauskas.dev/subscribe",
          },
          {
            label: "LinkedIn",
            position: "right",
            to: "https://www.linkedin.com/in/mangirdas-kazlauskas",
          },
          {
            label: "GitHub",
            position: "right",
            to: "https://github.com/mkobuolys",
          },
          {
            label: "X (Twitter)",
            position: "right",
            to: "https://x.com/mkobuolys",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "kazlauskas.dev",
            items: [
              {
                label: "Blog",
                to: "blog",
              },
              {
                label: "Subscribe 🙏",
                to: "https://pages.kazlauskas.dev/subscribe",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/mangirdas-kazlauskas",
              },

              {
                label: "X (Twitter)",
                href: "https://x.com/mkobuolys",
              },
              {
                label: "YouTube",
                href: "https://youtube.com/@mkobuolys",
              },
              {
                label: "Sessionize",
                href: "https://sessionize.com/mangirdas-kazlauskas",
              },
            ],
          },
          {
            title: "Tech",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mkobuolys",
              },
              {
                label: "Sessionize",
                href: "https://sessionize.com/mangirdas-kazlauskas",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/15427566/mkobuolys",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Mangirdas Kazlauskas. Built with Docusaurus & black magic.`,
        logo: {
          alt: "mkobuolys logo",
          src: "img/mkobuolys.png",
          height: 50,
        },
      },
      prism: {
        theme: themes.vsLight,
        darkTheme: themes.vsDark,
        additionalLanguages: ["bash", "dart", "diff", "json"],
      },
      metadata: [],
    }),
};

module.exports = config;
