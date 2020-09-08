<template>
  <header class="bg-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-4">
      <div class="flex items-center justify-between px-4 py-4 sm:p-0">
        <div>
            <h1 class="text-white text-lg font-bold">I Am Uayeb</h1>
        </div>
        <div class="sm:hidden">
            <button @click="isOpen = !isOpen"  type="button" class=" block text-white focus:text-orange-500 focus:outline-none hover:text-orange-600">
                <svg class="h-6 w-6 fill-current"  viewBox="0 0 510 510">
                    <path v-if="isOpen" fill-rule="evenodd" d="M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0L256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567c-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567c8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z"/>
                    <path v-if="!isOpen" fill-rule="evenodd" d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667C514.096,145.416,514.096,131.933,505.755,123.592z"/>
                </svg>
            </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="px-4 pt-2 pb-4 sm:flex sm:p-0"  >
        <g-link to="/" class="block px-2 py-1 text-white font-semibold rounded hover:text-black hover:bg-orange-500 ">Inicio</g-link>      
        <g-link to="/movies/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:text-black hover:bg-orange-500 sm:mt-0 sm:ml-2">Películas</g-link>
      </div> 
  </header>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{
            isOpen:false,
        }
    }
}
</script>