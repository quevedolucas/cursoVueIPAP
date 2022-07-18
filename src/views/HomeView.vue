<template>
  <div class="home">
    <img alt="logo" src="../assets/logoUsers2.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <h2><router-link to="/users">LISTADO DE USUARIOS</router-link></h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
  },
};
</script>
