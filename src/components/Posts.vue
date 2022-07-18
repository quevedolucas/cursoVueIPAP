<template>
  <div class="container">
    Posts del usuario
    <h3>{{ nombreUser }}</h3>
    <hr />
    <ul id="posts">
      <li v-for="post in posts" :key="post.id">
        ID Post: {{ post.id }} <br />
        Tittle: {{ post.tittle }} <br />
        Body: {{ post.body }} <br />
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
