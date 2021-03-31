<template>
  <div>
    <div class="login">
      <headers></headers>
      <a href="#" @click="onClicKbooks">我的书架</a>
    </div>
    <bookStoreInput></bookStoreInput>
    <books></books>
  </div>
</template>

<script>
import headers from "../components/heades";
import bookStoreInput from "../components/bookStoreInput";
import books from "../components/books";
export default {
  components: {
    headers,
    bookStoreInput,
    books,
  },
  methods: {
    onClicKbooks() {
      this.$router.push({ path: "/mybookshelf" });
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  position: relative;
}
a {
  text-decoration: none;
  position: absolute;
  top: 18px;
  right: 10px;
}
</style>