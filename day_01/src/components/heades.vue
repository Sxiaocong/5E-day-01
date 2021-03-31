<template>
  <div class="headers_container" v-back="$store.state.backColor">
    <h3>{{ this.$route.meta.title }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: "", //定义变量接收
    };
  },
  created() {},
};
</script>

<style lang="scss">
.headers_container {
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
}
</style>