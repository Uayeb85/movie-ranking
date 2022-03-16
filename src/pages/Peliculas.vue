<template>
    <layout>
    <!-- TOPS Peliculas inicio -->
<section class="text-gray-600 body-font">
  <div class="sm:flex sm:items-center sm:justify-center flex justify-center pt-8 pb-8">
      <h2 class="sm:text-4xl text-3xl text-black">Peliculas</h2>
  </div>
  <div class="container px-5 pb-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <g-image class="lg:h-64 md:h-64 w-full object-cover object-top" src="../assets/the_batman.jpg" alt="2022" />
          <div class="p-6">
            <h2 class="tracking-widest text-4xl title-font font-medium text-black mb-1">2022</h2>
            <div class="flex items-center flex-wrap ">
              <a class="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0">Conoce más
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <g-link to="/2021">
             <g-image class="lg:h-64 md:h-64 w-full object-cover object-top" src="../assets/spider_man_no_way_home.jpg" alt="2021"/>
          </g-link>
          <div class="p-6">
            <h2 class="tracking-widest text-4xl title-font font-medium text-black mb-1">2021</h2>
            <div class="flex items-center flex-wrap ">
              <g-link to="/2021" class="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0">Conoce más
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <g-link to="/Movies">
            <g-image class="lg:h-64 md:h-64 w-full object-cover object-top" src="../assets/ya_no_estoy_aqui.jpg" alt="2020"/>
          </g-link>
          <div class="p-6">
            <h2 class="tracking-widest text-4xl title-font font-medium text-black mb-1">2020</h2>
            <div class="flex items-center flex-wrap ">
              <g-link to="/Movies" class="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0">Conoce más
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- TOPS Peliculas FIN -->
    </layout>
</template>

<style scoped>

.years{
  height: 450px;
}

.font{
  font-size: 130px;
}


</style>