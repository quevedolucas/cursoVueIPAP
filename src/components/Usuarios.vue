<template>
  <div class="container">
    <h1>Listado de Usuarios</h1>
    <ul id="usuarios">
      <li v-for="us in usuarios" :key="us.id">
        <router-link
          :to="{
            name: 'posts',
            params: { idUser: us.id, nombreUser: us.nombre },
          }"
          >{{ us.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsuariosList",
  components: {},
  data() {
    return {
      usuarios: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.usuarios = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
