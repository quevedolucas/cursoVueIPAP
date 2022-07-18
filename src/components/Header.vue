<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/">Sistema de usuarios y posts</router-link>
      <!-- <div class="d-flex">
        <input
          v-model="busqueda"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          @click="fetchProductos({ nombre: busqueda })"
          class="btn btn-outline-success"
          type="button"
        >
          Search
        </button>
      </div>
      <div>
        <button
          @click="$router.push('/favoritos')"
          type="button"
          class="btn btn-secondary btn-sm me-2"
        >
          <i class="bi bi-heart-fill">Favoritos</i> {{ cantidadFavoritos }}
        </button>
        <button
          @click="$router.push('/carrito')"
          type="button"
          class="btn btn-secondary btn-sm"
        >
          <i class="bi bi-cart-fill">Cant. Productos</i>
          {{ cantidadProductosCarrito }}
        </button>
      </div> -->
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header-app",
  data() {
    return {
      busqueda: null,
    };
  },
  computed: {
    ...mapGetters(["cantidadProductosCarrito", "cantidadFavoritos"]),
  },
  methods: {
    ...mapActions(["fetchProductos"]),
  },
};
</script>

<style></style>
