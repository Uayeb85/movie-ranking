<template>
  <div class="layout">
    <header>
      <NavBar />
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components:{
    NavBar
  }
}
</script>

<style>



</style>
