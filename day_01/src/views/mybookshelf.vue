<template>
  <div>
    <div class="my_books">
      <heades></heades>
      <div class="return" @click="onClickGo">⬅</div>
      <Administration></Administration>
    </div>
  </div>
</template>

<script>
import heades from "../components/heades";
import Administration from "../components/Administration";
export default {
  components: {
    heades,
    Administration,
  },
  methods: {
    onClickGo() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.my_books {
  width: 100%;
  position: relative;
  .return {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 25px;
    color: #ffff;
  }
}
</style>