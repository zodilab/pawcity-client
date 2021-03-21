/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'xr3ngine',
  tagline: 'An end-to-end solution for hosting humans and AI in a virtual space, built on top of react, three.js and express/feathers.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'jsdoc-docusaurus', // Usually your repo name.
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id:'api-1',
        entryPoints: [
                        '../client-core',
                        '../client'
                    ],
        exclude: '../client-core/components/ui/InteractableModal',
        tsconfig: '../client-core/tsconfig.json',
        exclude: [
            '**/node_modules/**'
        ],
        out: 'docs',
        readme: 'none',
        sidebar: {
           sidebarFile: 'sidebar/typedoc-client-core.js',
        }
      },
    ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     id:'api-2',
    //     entryPoints: ['../engine/src/initialize.ts'],
    //     tsconfig: '../engine/tsconfig.json',
    //     sidebar: {
    //       sidebarFile: 'tsdoc-engine-sidebar.js',
    //     },
    //   },
    // ],
  ],
  themeConfig: {
    navbar: {
      title: 'xr3ngine',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
         customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
