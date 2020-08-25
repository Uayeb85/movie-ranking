const c1 = () => import(/* webpackChunkName: "page--src--templates--movie-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/Movie.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--movies-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Movies.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/movie-ranking/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Index.vue")

export default [
  {
    path: "/movies/:title/",
    component: c1
  },
  {
    path: "/movies/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
