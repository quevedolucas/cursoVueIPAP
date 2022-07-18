import Vue from "vue";
import Vuex from "vuex";
import http from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarios: [],
    posts: [],
  },
  getters: {
    usuarios(state) {
      return state.usuarios;
    },
    posts(state) {
      return state.posts;
    },
    cantidadPosts(state) {
      return state.posts.length;
    },
  },
  mutations: {
    setUsuarios(state, value) {
      state.usuarios = value;
    },
    setPosts(state, value) {
      state.posts = value;
    },
    agregarPost(state, value) {
      state.posts.push(value);
    },
    eliminarPost(state, value) {
      state.posts = state.posts.filter((valor) => valor != value);
    },
  },
  actions: {
    async fetchUsuarios({ commit }, parametros = {}) {
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/users",
          { params: parametros }
        );
        commit("setUsuarios", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

/* export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
}); */
