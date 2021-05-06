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
        href: 'https://docs.datalbry.io/docs/intro',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
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
      copyright: `Copyright © ${new Date().getFullYear()} Datalbry.io, UG. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/datalbry/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/datalbry/docs/edit/master/website/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
