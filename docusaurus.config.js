// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "kazlauskas.dev",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/mkobuolys/kazlauskas-dev/tree/main/",
        },
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "kazlauskas.dev",
        logo: {
          alt: "mkobuolys logo",
          src: "img/mkobuolys.png",
        },
        items: [{ to: "/blog", label: "Blog", position: "left" }],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "kazlauskas.dev",
            items: [
              {
                label: "Blog",
                to: "/blog",
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
                label: "Sessionize",
                href: "https://sessionize.com/mangirdas-kazlauskas",
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
      },
    }),
};

module.exports = config;
