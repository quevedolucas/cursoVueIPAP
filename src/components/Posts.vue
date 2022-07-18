<template>
  <div class="container">
    Posts del usuario
    <h2>{{ nombreUser }}</h2>
    <hr />
    <ul id="posts">
      <li v-for="post in posts" :key="post.id" style="list-style-type: none">
        <strong>ID Post:</strong> {{ post.id }} <br />
        <strong>Título:</strong> {{ post.title }} <br />
        <strong>Cuerpo:</strong> {{ post.body }} <br />
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostsUsuario",
  props: ["idUser", "nombreUser"],
  data() {
    return {
      posts: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.$http
      .get(`https://jsonplaceholder.typicode.com/users/${this.idUser}/posts`)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
