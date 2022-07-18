<template>
  <div class="container-fluid" id="divContainer">
    <input type="number" name="cantidad" v-model="cantidad" />
  </div>
</template>

<script>
export default {
  name: "PruebaComponent",
  data() {
    return {
      cantidad: 1,
    };
  },
  watch: {
    cantidad(newValor, oldValor) {
      console.log(`Nuevo Valor: ${newValor} Valor anterior: ${oldValor}`);
    },
  },
};
</script>

<style></style>
