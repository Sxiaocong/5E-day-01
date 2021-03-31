<template>
  <div class="login_container">
    <div class="login">
      <headers></headers>
      <a href="#" @click="changeBackColor">切换主题</a>
      <loginInput></loginInput>
    </div>
  </div>
</template>

<script>
import headers from "../components/heades";
import loginInput from "../components/loginInput";
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeBackColor"]),
  },
  components: {
    headers,
    loginInput,
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