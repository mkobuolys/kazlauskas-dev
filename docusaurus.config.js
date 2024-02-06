// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mangirdas Kazlauskas, Expert Flutter Developer",
  tagline:
    "Mangirdas Kazlauskas personal blog about Flutter, Dart, and tech in general.",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "Mangirdas Kazlauskas is the first Google Developer Expert for Flutter & Dart technlogies in Lithuania, who crafts high-performance cross-platform apps & frameworks using a product-centric approach. He actively shares his expertise through articles, YouTube videos, and engaging conference talks, empowering businesses and the Flutter community to excel in the digital world. Explore his work and see how he can help you achieve your goals!",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "Mangirdas Kazlauskas is the first Google Developer Expert for Flutter & Dart technlogies in Lithuania, who crafts high-performance cross-platform apps & frameworks using a product-centric approach. He actively shares his expertise through articles, YouTube videos, and engaging conference talks, empowering businesses and the Flutter community to excel in the digital world. Explore his work and see how he can help you achieve your goals!",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "twitter:description",
        content:
          "Mangirdas Kazlauskas is the first Google Developer Expert for Flutter & Dart technlogies in Lithuania, who crafts high-performance cross-platform apps & frameworks using a product-centric approach. He actively shares his expertise through articles, YouTube videos, and engaging conference talks, empowering businesses and the Flutter community to excel in the digital world. Explore his work and see how he can help you achieve your goals!",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "Mangirdas Kazlauskas, Google Developer Expert, GDE, Expert Flutter Developer, Flutter Development, Dart Development, Cross-platform App Development, Mobile App Development",
      },
    },
  ],
  url: "https://kazlauskas.dev",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenAnchors: "throw",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
            "Mangirdas Kazlauskas personal blog about Flutter, Dart, and tech in general.",
          blogSidebarTitle: "All blog posts",
          blogSidebarCount: "ALL",
          editUrl: "https://github.com/mkobuolys/kazlauskas-dev/tree/main/",
          showReadingTime: true,
        },
        gtag: {
          trackingID: "G-23PB6WRXH9",
          anonymizeIP: true,
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
            label: "Subscribe 🙏",
            to: "https://pages.kazlauskas.dev/subscribe",
          },
          {
            href: "https://github.com/mkobuolys",
            position: "right",
            className: "navbar-icon navbar-icon-github",
            "aria-label": "GitHub repository",
            html: `<svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>`,
          },
          {
            href: "https://x.com/mkobuolys",
            position: "right",
            className: "navbar-icon navbar-icon-x",
            "aria-label": "X profile",
            html: `<svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 462.799"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
            </svg>`,
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
