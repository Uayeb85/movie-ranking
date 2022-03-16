<template>
    <div class="flex items-center md:justify-center ">
        <span class="mr-4">Ordenar por</span>
            <div class="relative ">
                        <button @click="isOpen = !isOpen" class="bg-white rounded border appearance-none border-black py-2 focus:outline-none focus:border-purple-700 text-base pl-3 pr-10">
                          <span>A - Z</span>
                        </button>
                        <div v-if="isOpen" class="rounded shadow-md mt-2 absolute bg-teal-400 text-black  pin-t pin-l min-w-full">
                          <g-link to="/az2022/" class="block px-2 py-1 hover:text-white hover:bg-purple-700 ">A-Z</g-link>
                          <g-link to="/za2022/" class="block px-2 py-1 hover:text-white hover:bg-purple-700 ">Z-A</g-link>      
                          <g-link to="/ranking2022" class="block px-2 py-1 hover:text-white hover:bg-purple-700 ">Ranking</g-link>      
                          <g-link to="/2022" class="mt-1 block px-2 py-1 hover:text-white hover:bg-purple-700 ">Recien añadida</g-link>
                        </div>
                        <span  class="absolute right-0 top-0 h-full w-10 text-center text-black  pointer-events-none flex items-center justify-center">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
    </div>                  
                    
</div>      
</template>

<script>
export default {
    name: 'Clasificacion2022',
    data(){
    return{
      isOpen:false
    }
    }
}
</script>