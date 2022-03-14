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
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'M2022',
        path: '2022/**/*.md',
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
      use: 'gridsome-plugin-flexsearch',
      options: {
        flexsearch: {
          profile: 'match'
        },
        collections: [
          {
            typeName: 'Movie',
            indexName: 'Movie',
            fields: ['title', 'path']
          },
          {
            typeName: 'Tag',
            indexName: 'Tag',
            fields: ['id', 'path']
          },
          {
            typeName: 'M2021',
            indexName: 'M2021',
            fields: ['title', 'path']
          }
        ],
        searchFields: ['title', 'handle', 'tags', 'id']
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
    M2022:[
      {
        path:"/2022/:title",
        component:"./src/templates/M2022.vue",
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
