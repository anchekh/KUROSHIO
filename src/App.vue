<template>
  <NavBar />
  <router-view/>
  <Footer />
</template>

<script>
import NavBar from "@/components/AppNavbar.vue"
import Footer from "@/components/AppFooter.vue"

export default {
  name: "App",
  components: { NavBar, Footer },
}
</script>

<style>
#app {
  font-family: 'Instrument Sans', sans-serif;
  margin: 0;
  padding: 0;
}
/* .content {
  margin-top: 60px;
  margin-bottom: 120px;
  padding: 20px;
} */
</style>