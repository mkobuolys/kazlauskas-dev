// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "kazlauskas.dev",
  tagline: "Welcome to my personal blog",
  url: "https://kazlauskas.dev",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
          blogDescription: "Mangirdas Kazlauskas personal blog.",
          blogSidebarTitle: "All blog posts",
          blogSidebarCount: "ALL",
          editUrl: "https://github.com/mkobuolys/kazlauskas-dev/tree/main/",
          routeBasePath: "/",
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
            label: "About me",
            to: "/about-me",
          },
          {
            label: "Subscribe 🙏",
            to: "https://pages.kazlauskas.dev/subscribe",
          },
          {
            label: "Flutter Design Patterns",
            href: "https://flutterdesignpatterns.com",
            position: "right",
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
                label: "About me",
                to: "/about-me",
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
                href: "https://www.linkedin.com/in/mangirdas-kazlauskas",
              },

              {
                label: "Twitter",
                href: "https://twitter.com/mkobuolys",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCrB9OPnif64THkzQd_S9ptg",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["dart"],
      },
    }),
};

module.exports = config;
