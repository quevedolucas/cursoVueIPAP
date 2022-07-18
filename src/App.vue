<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
//import PruebaComponent from "@/components/PruebaComponent";
//import UsuariosList from "@/components/Usuarios";

export default {
  components: { Header /* UsuariosList */ },
};
</script>

<style></style>
