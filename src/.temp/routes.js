const c1 = () => import(/* webpackChunkName: "page--src--pages--ranking-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Ranking.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--ranking2021-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Ranking2021.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--recien-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Recien.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--recien2021-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Recien2021.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/Tag.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--movies-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Movies.vue")
const c7 = () => import(/* webpackChunkName: "page--src--templates--movie-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/Movie.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--alfabetico-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Alfabetico.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--alfabetico2021-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Alfabetico2021.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--2021-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/2021.vue")
const c11 = () => import(/* webpackChunkName: "page--src--templates--m2021-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/M2021.vue")
const c12 = () => import(/* webpackChunkName: "page--src--templates--m2022-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/templates/M2022.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--peliculas-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Peliculas.vue")
const c14 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/movie-ranking/node_modules/gridsome/app/pages/404.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/movie-ranking/src/pages/Index.vue")

export default [
  {
    path: "/ranking/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/ranking2021/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/recien/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/recien2021/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/tags/:id/",
    component: c5
  },
  {
    path: "/movies/:page(\\d+)?/",
    component: c6
  },
  {
    path: "/movies/:title/",
    component: c7
  },
  {
    path: "/alfabetico/:page(\\d+)?/",
    component: c8
  },
  {
    path: "/alfabetico2021/:page(\\d+)?/",
    component: c9
  },
  {
    path: "/2021/:page(\\d+)?/",
    component: c10
  },
  {
    path: "/2021/:title/",
    component: c11
  },
  {
    path: "/2022/:title/",
    component: c12
  },
  {
    path: "/peliculas/",
    component: c13
  },
  {
    name: "404",
    path: "/404/",
    component: c14
  },
  {
    name: "home",
    path: "/",
    component: c15
  },
  {
    name: "*",
    path: "*",
    component: c14
  }
]
