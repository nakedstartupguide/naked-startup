// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Naked Startup Guide',
  tagline: 'For founders, CEOs and operators who struggle with finding the right and timely advice for their early-stage startup problems.',
  url: 'https://nakedstartup.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.jpeg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nakedstartupguide', // Usually your GitHub org/user name.
  projectName: 'naked-startup', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-JD3LHLQS5B',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Naked Startup Guide',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          { 
            type: 'doc',
            docId: 'foundation/foundation',
            position: 'left',
            label: 'Foundation',
          },
          {
            type: 'doc',
            docId: 'fundraising/fundraising',
            position: 'left',
            label: 'Fundraising',
          },
          {
            type: 'doc',
            docId: 'path-to-pmf/path-to-pmf',
            position: 'left',
            label: 'Path to PMF',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'},
          {
            href: 'https://twitter.com/NkdStartupGuide ',
            label: 'Subscribe on Newsletter ',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            // title: "Community",
            items: [
              {
                label: "Follow us on Twitter",
                href: "https://twitter.com/NkdStartupGuide",
              },
              // {
              //  label: "Check us out on Instagram",
              //  href: "https://instagram.com/nakedstartup.guide",
              //},
              {
                label: "Contribute to this Guide on Github",
                href: "https://github.com/nakedstartupguide/naked-startup",
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} // Feel free to share with your fellow founders :) `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
