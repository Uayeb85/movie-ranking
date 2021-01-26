<template>
    <layout>
              <!-- Seccion productos -->
    <section class="bg-white pb-10">
      <div class="flex items-center justify-center pt-8 pb-8">
       <h2 class="text-4xl">Vistas Recientemente</h2>
      </div>
    <!-- Tarjetas -->

      <div class="flex justify-around flex-wrap ">
        <div v-for="edge in $page.allM2021.edges.slice(0,4)"
          :key="edge.node.id"
          class="
                mt-4 mb-4
                ml-2 mr-2 
                lg:w-1/5
                md:w-1/2
                ">
                <div class="flex justify-end">
                  <span class="absolute bg-orange-400 rounded p-2 m-2 flex items-center"> 
                      <g-image src="../assets/estrella.svg" class="estrella"/>

                    {{edge.node.ranking}}
                  </span>  
                </div>           
         <div>
           <g-image :src="edge.node.featuredImage"  class="rounded-t-md size object-cover object-center" />
         </div> 
          <div 
          class="bg-white 
                 border
                 border-gray-600
                 pb-4
                 rounded-b-md">
          <h3 class="text-black
                    text-s 
                    tracking-widest 
                    font-medium
                    mt-2 mb-1 
                    pl-3">
            {{edge.node.title}}
          </h3>          
          <div>
            <g-link v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id">  
            <button 
                 class="mt-2
                           text-xs
                         text-black
                         bg-orange-400
                           border-0
                           py-2 px-6
                           ml-3
                           focus:outline-none
                           rounded
                           hover:bg-white">          
            {{tag.id}}
            </button>
          </g-link>
          </div>
         <g-link :to="edge.node.path"> 
             <button class="mt-3 
                        text-white 
                        bg-black
                        border-0 
                        py-2 px-6 
                        ml-3
                        focus:outline-none 
                        hover:bg-orange-400 
                        rounded">
              Más información
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
  allM2021 (sortBy: "view" , order: DESC){
    edges{
      node{
        id
        view
        code
        title
        ranking
        featuredImage
        path
        tags{
          id
          path
        }
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

.estrella{
  height: 20px;
  width: 12px;
}
</style>
