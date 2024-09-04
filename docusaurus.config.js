// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pabpereza',
  tagline: 'Blog, cursos y documentación de Pabpereza DevSecOps',
  favicon: 'img/logo_icon.png',

  // Set the production url of your site here
  url: 'https://pabpereza.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pabpereza', // Usually your GitHub org/user name.
  projectName: 'pabpereza', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pabpereza/pabpereza/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pabpereza/pabpereza/tree/main/',
          postsPerPage: 3,
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-NBFV5MMS',
        },
        gtag: {
          trackingID: 'G-40PL0BKGD3',
          anonymizeIP: true,
        },

      }),

    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
      },
      navbar: {
        title: 'PPZ - Pabpereza',
        hideOnScroll: true,
        items: [
          {
            to: '/docs', label: 'Cursos', position: 'left'
          },
          {
            to: '/blog', label: 'Blog', position: 'left'
          },
          {
            to: 'https://www.youtube.com/@Pabpereza?sub_confirmation=1',
            position: 'left',
            label: 'Youtube'
          },
          {
            href: 'https://twitter.com/pabpereza',
            className: 'header-x-link',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/pabpereza/',
            className: 'header-instagram-link',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/pablo-p%C3%A9rez-aradros-calvo-516634109/',
            className: 'header-linkedin-link',
            position: 'right',
          },
          {
            href: 'https://www.tiktok.com/@pabpereza',
            className: 'header-tiktok-link',
            position: 'right',
          },
          {
            href: 'https://github.com/pabpereza/pabpereza',
            className: 'test',
            position: 'right',
          },
          {
            href: 'https://github.com/pabpereza/pabpereza',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenido',
            items: [
              {
                label: 'Cursos',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pabpereza/pabpereza',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/pabpereza/',
              },
              {
                label: 'X - Twitter',
                href: 'https://x.com/pabpereza',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pabpereza. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      themeConfig: {
        metadata: [
          { name: 'keywords', content: 'devsecops, devops, programación, docker, kubernetes, seguridad, Blog'},
          { name: 'twitter:card', content: 'summary'},
          { name: 'description', content: 'Blog, cursos y documentación de DevOps, Seguridad, programación, docker, kubernetes y mucho más.'},
          { name: 'google-adsense-account', content: 'ca-pub-2204030225179360'},
        ],
        colorMode: {
          disableSwitch: false,
          respectPrefersColorScheme: true,
         },
      },
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://pabpereza.dev',
          },
        },
        // Declare some json-ld structured data
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Pabpereza.dev',
            url: 'https://pabpereza.dev/',
            logo: 'https://pabpereza.dev/img/logo.png',
          }),
        },
      ],

    }),
  themes: [ '@docusaurus/theme-mermaid'],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    
  ],
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2204030225179360',
      async: true,
      crossorigin: 'anonymous',
    }
  ],
};

export default config;
