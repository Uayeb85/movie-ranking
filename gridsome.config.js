// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));


module.exports = {
  siteName: 'Movie Rank',transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Movie',
        path: 'movies/**/*.md',
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'M2021',
        path: '2021/**/*.md',
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  templates: {
    Movie:[
      {
        path:"/movies/:title",
        component:"./src/templates/Movie.vue",
      }
    ],
    M2021:[
      {
        path:"/2021/:title",
        component:"./src/templates/M2021.vue",
      }
    ],
    Tag:[
      {
        path:"/tags/:id",
        component:"./src/templates/Tag.vue",
      },
    ],
  }
}
