<template>
  <div class="container">
    <h1>Listado de Usuarios</h1>
    <ul id="usuarios">
      <li v-for="us in usuarios" :key="us.id" style="list-style-type: none">
        <hr />
        <router-link
          :to="{
            name: 'posts',
            params: { idUser: us.id, nombreUser: us.name },
          }"
          ><h3>{{ us.name }}</h3></router-link
        >
        <strong>Username:</strong> {{ us.username }} <br />
        <strong>Email:</strong> {{ us.email }} <br />
        <strong>Dirección:</strong> {{ us.address.street }},
        {{ us.address.suite }} ({{ us.address.city }}) <br />
        <strong>Teléfono:</strong> {{ us.phone }} <br />
        <strong>Website:</strong> {{ us.website }} <br />
        <hr />
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
