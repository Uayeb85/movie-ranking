<template>
    <layout>
              <!-- Seccion productos -->
    <section class="bg-white pb-10">
      <div class="flex items-center justify-center pt-8 pb-8">
       <h2 class="text-4xl">Ranking</h2>
      </div>

                    <!-- Ordenar POR -->
    <Clasificacion />
    <!-- Tarjetas -->

      <div class="flex justify-around flex-wrap ">
        <div v-for="edge in $page.allM2021.edges"
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
          <p class="text-s pl-3 text-black font-thin mt-2 mb-1 ">Calificación {{edge.node.ranking}} / 10</p>
          <h3 class="text-black
                    text-s 
                    font-medium
                    tracking-widest 
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
      <div class="mt-10">
        <Pager :info="$page.allM2021.pageInfo" linkClass="pager" class="text-center"/>
      </div>
    </section>
    </layout>
</template>

<page-query>
query ($page: Int){
  allM2021 (sortBy: "ranking" , order: DESC, perPage:8, page: $page) @paginate{    
    pageInfo{
          totalPages
          currentPage 
        }

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

<script>

import { Pager} from 'gridsome'
import Clasificacion from '~/components/Clasificacion.vue'


export default {
  data(){
    return{
      isOpen:false
    }
  },
    components: {Pager,
    Clasificacion
    }
}
</script>

<style  scoped>

.size{
    height: 300px;
    width: 369px;
}

.pager{
  letter-spacing: 2px;
  padding: 10px;
  margin-right: 8px;
  background-color: black;
  color: #fff;
}

.pager:hover{
  background: white;
  color: black;
}
</style>