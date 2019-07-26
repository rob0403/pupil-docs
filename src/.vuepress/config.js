const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
  title: "Pupil Labs",
  description: "Pupil Labs - We build state of the art eye tracking hardware and software. \
                We work hard to bring research ideas out of the lab and into the real world.",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: "Last Updated",
    sidebar: {
      '/invisible/': [
        '',
        'getting-started'
      ],
      '/core/': [
        '',
        'getting-started'
      ],
      '/vr-ar/': [
        '',
      ],
      '/cloud/': [
        '',
      ],
      '/developer/': [
        '',
      ],
    },
    sidebarDepth: 1,
    repo: 'https://github.com/pupil-labs/pupil-docs-website',
    repoLabel: 'See on Github',
    docsRepo: 'https://github.com/pupil-labs/pupil-docs',
    docsDir: 'src',
    docsBranch: 'vuepress-refactor',
    editLinks: true,
    editLinkText: 'Edit this page!',
  },

  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          var date = new Date(timestamp);
          var yy = date.getFullYear();
          var mm = ("0" + (date.getMonth() + 1)).slice(-2);
          var dd = ("0" + date.getDate()).slice(-2);
          return `${yy}-${mm}-${dd}`;
        }
      }
    ],


    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: "UA-40856943-2"
    //   }
    // ]
  ],

  markdown: {
    toc: {
      includeLevel: [3]
    }
  },

  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  },


}