import plugin_gridsome_plugin_flexsearch_8 from "/home/uayeb/Escritorio/movie-ranking/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_8,
    options: {"pathPrefix":"","siteUrl":"","flexsearch":{"profile":"match"},"collections":[{"typeName":"Movie","indexName":"Movie","fields":["title","path"]},{"typeName":"Tag","indexName":"Tag","fields":["id","path"]},{"typeName":"M2021","indexName":"M2021","fields":["title","path"]}],"searchFields":["title","handle","tags","id"],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true}
  }
]
