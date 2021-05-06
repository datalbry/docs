/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docs DataLbry',
  tagline: 'All your knowledge accessible, anytime and anywhere.',
  url: 'https://docs.datalbry.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'datalbry',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'DataLbry Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'home',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            // Add items if necessary
          ],
        },
        {
          title: 'More',
          items: [
            // Add items if necessary
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Datalbry.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
