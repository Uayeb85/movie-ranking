<template>
    <div class="bg-teal-500 rounded-lg m-1" id="footer">
      <div>
        <div class="pt-20 pl-20">
          <h1 class="text-white text-6xl font-bold" >I Am Uayeb</h1>
          <h3 class="text-white text-xl ">Contact me at: <span class="font-bold"> <a href="mailto:hello@iamuayeb.com" class="hover:text-purple-700">hello@iamuayeb.com </a>  </span>  </h3>
       </div> 
       <div class="pt-5 pl-20 flex items-center">
          <a href="https://medium.com/@gustavo.regucom06" class=""> 
            <g-image src="../assets/medium-iamuayeb.svg"  alt="" class="h-8 w-8 mr-5" />
          </a>
          <a href="https://twitter.com/uayeb"> 
            <g-image src="../assets/twitter-iamuayeb.svg" alt="" class="h-8 w-8 mr-5" />
          </a>
          <a href="https://www.linkedin.com/in/gustavo-arciniega-alonso/"> 
            <g-image src="../assets/linkedin-iamuayeb.svg" alt="" class="h-8 w-8 mr-5" />
          </a>
       </div>
       <div class="foot md:flex md:flex-col md:items-end md:pr-20 pb-20">
         <h4 class="text-white text-lg md:text-xl"> Made with 
             <span> 
           <i class="fa fa-heart" aria-hidden="true"></i> 
           </span> love in
           <span> <a href="https://en.wikipedia.org/wiki/Mexico_City" class="hover:text-purple-700 font-semibold cursor-pointer">  CDMX  </a> </span> 
           </h4>  
         <p class="text-white  text-lg md:text-xl">{{getCurrentYear}}</p>
       </div>

      </div>



    </div>



</template>

<script>
export default {
  computed: {
    getCurrentYear(){
      return new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 0px)  and (max-width: 768px) {

a{
  text-decoration: none;
}

.foot{
  margin-top: 30px;
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  padding-left: 81px;
}


}



@media only screen and (min-width: 769px)  and (max-width: 2900px) {

a{

text-decoration: none;

} 


}




</style>