<template>
    <layout>
        <section class="bg-white">
            <div class="flex items-center justify-center pt-8 pb-8">
                <h2 class="text-4xl">{{$page.tag.title}}</h2>
            </div>
                <!-- Tarjetas -->

      <div class="flex justify-around flex-wrap ">
        <div v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          class="
                lg:w-1/5
                md:w-1/1
                md:mt-3
                mt-3
                p-0
                sm:p-2
                sm:mb-0
                mb-4
                lg:mt-0">
                <div class="flex">
                    <span class="absolute bg-teal-400 rounded p-2 flex items-center"> 
                        <g-image src="../assets/estrella.svg" class="estrella"/>
                        {{edge.node.ranking}}
                    </span>  
                </div> 

         <div>
         <g-link :to="edge.node.path">
           <g-image :src="edge.node.featuredImage"  class="rounded-t-md size object-cover object-center" />
         </g-link>    
         </div> 
          <div 
            class="bg-white 
                    pb-4
                    rounded-b-md">
            <h3 class="text-black
                        text-2xl
                        tracking-widest 
                        font-medium
                        mt-3 mb-1 
                        pl-0">
                {{edge.node.title}}
            </h3>  
            <div>
                <g-link v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id">  
                    <button 
                        class="mt-2
                               text-xs
                             text-black
                             bg-teal-400
                               border-0
                               py-2 px-6
                               mr-3
                               focus:outline-none
                               rounded
                             hover:bg-purple-700
                             hover:text-white">          
                        {{tag.id}}
                    </button>
                </g-link>
            </div>
            <g-link :to="edge.node.path"> 
                <button class="mt-3 
                                    text-white 
                                    bg-purple-700
                                    border-0 
                                    py-2 px-6 
                                    focus:outline-none 
                                    hover:bg-teal-400 
                                    hover:text-black
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

<page-query>
query ($id:ID){
    tag(id:$id){
        title
        belongsTo{
            edges{
                node{
                    ... on Movie   {
                            title
                            id
                            ranking
                            path
                            featuredImage
                            tags{
                                id
                                path
                                }
                    }
                }
            }
        }
        belongsTo{
            edges{
                node{
                    ... on M2021 {
                            title
                            id
                            ranking
                            path
                            featuredImage
                            tags{
                                id
                                path
                                }
                    }
                }
            }
        }
        belongsTo{
            edges{
                node{
                    ... on M2022 {
                            title
                            id
                            ranking
                            path
                            featuredImage
                            tags{
                                id
                                path
                                }
                    }
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