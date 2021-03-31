<template>
  <div class="bookStoreInput">
    <input
      type="text"
      placeholder="输入书名搜索"
      v-model="input"
      @input="oninput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    oninput() {
      this.$store.commit("onImport", this.input);
    },
  },
};
</script>

<style lang="scss">
.bookStoreInput {
  width: 100%;
  height: 40px;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 90%;
    height: 80%;
    border: none;
    outline: none;
    background-color: darkgrey;
  }
}
</style>