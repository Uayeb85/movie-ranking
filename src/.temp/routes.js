const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--movie-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/Movie.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--ranking-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Ranking.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--recien-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Recien.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--movies-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Movies.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--alfabetico-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Alfabetico.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/movie-ranking/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Index.vue")

export default [
  {
    path: "/tags/:id/",
    component: c1
  },
  {
    path: "/movies/:title/",
    component: c2
  },
  {
    path: "/ranking/",
    component: c3
  },
  {
    path: "/recien/",
    component: c4
  },
  {
    path: "/movies/",
    component: c5
  },
  {
    path: "/alfabetico/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
