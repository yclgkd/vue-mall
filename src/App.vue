<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getUser();
    this.getCart();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(() => {
        // Todo:保存到vuex里面
      });
    },
    getCart() {
      this.axios.get("/carts/products/sum").then(() => {
        // Todo:保存到vuex里面
      });
    }
  }
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>