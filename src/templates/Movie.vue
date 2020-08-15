<template>
    <Layout>
        <section class="text-gray-700 body-font overflow-hidden">                 
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <g-image alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="$page.movie.posterImage" />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">{{$page.movie.genre}}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{$page.movie.title}} <span class="text-base text-gray-600"> ({{$page.movie.release}}) </span> </h1>
                    <p class="leading-relaxed">Calificación: <span class="font-bold"> {{$page.movie.ranking}} / 10 </span></p>
                    <p class="leading-relaxed">Fecha que la vi: <span class="font-bold"> {{$page.movie.view}} </span></p>
                    <p class="leading-relaxed">Tags: <span class="font-bold"> # </span></p>

                    <div class="flex">
                        <span class="title-font font-medium text-xl text-gray-900">  <br> 
                        {{$page.movie.description}}
                        </span>
                    </div>
                    <div class="flex trailer-desktop">
                        <span class="title-font font-medium text-xl text-gray-900">  <br> 
                            <iframe width="315" height="315" :src="$page.movie.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </span>
                    </div>
                    <g-link to="/movies/"> <button class="flex ml-right text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-4">Regresar</button> </g-link>

                </div>
                </div>
            </div>
        </section>

    </Layout>
</template>

<page-query>

query ($path: String!){
  movie(path: $path){
    title
    id
    genre
    release
    ranking
    view
    description
    path
    trailer
    posterImage
  }
}

</page-query>

<style scoped>
@media screen 
  and (device-width: 641px) 
  and (-webkit-min-device-pixel-ratio: 1) { 

.trailer-desktop{
    display: none;
}
}






</style>