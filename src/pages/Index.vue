<template>
    <layout>
              <!-- Seccion productos -->
    <section class="bg-gray-200 pb-10">
      <div class="flex items-center justify-center pt-8 pb-8">
       <h2 class="text-4xl">Vistas Recientemente</h2>
      </div>
    <!-- Tarjetas -->

      <div class="flex justify-around flex-wrap ">
        <div v-for="edge in $page.allMovie.edges.slice(0,4)"
          :key="edge.node.id"
          class="
                mt-4 mb-4
                ml-2 mr-2 
                lg:w-1/5
                md:w-1/2
                w-full">

         <div>
           <g-image :src="edge.node.featuredImage"  class="rounded-t-md size object-cover object-center" />
         </div> 
          <div 
          class="bg-white 
                 border
                 border-gray-600
                 pb-4
                 rounded-b-md">
          <p class="text-s pl-3 text-gray-600 mt-2 mb-1 ">Calificación {{edge.node.ranking}} / 10</p>
          <h3 class="text-gray-700 
                    text-s 
                    tracking-widest 
                    mt-2 mb-1 
                    pl-3">
            {{edge.node.title}}
          </h3>
         <g-link :to="edge.node.path"> 
             <button class="mt-3 
                        text-white 
                        bg-indigo-500 
                        border-0 
                        py-2 px-6 
                        ml-3
                        focus:outline-none 
                        hover:bg-indigo-600 
                        rounded">
          Conoce más
            </button> 
          </g-link> 
          </div>
        </div>
      </div>
    </section>
    </layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Movie Raiting by IAmUayeb'
  }
}
</script>

<page-query>
query{
  allMovie{
    edges{
      node{
        code
        path
        title
        trailer
        release
        view
        genre
        description
        ranking
        featuredImage
      }
    }
  }
}
</page-query>

<style  scoped>

.size{
    height: 300px;
    width: 369px;
}
</style>
