<template>
  <div class="books_container">
    <div
      class="books"
      v-for="(item, index) in this.$store.state.list1"
      :key="index"
    >
      <div class="books_inside">
        <div class="image_box">
          <img :src="item.img" alt="" />
        </div>
        <div class="title_box">{{ item.desc }}</div>
        <div class="addTo_box">
          <div class="books_name">
            <p>{{ item.name }}</p>
          </div>
          <div
            class="books_add"
            @click="onClickadd(item)"
            v-back="$store.state.backColor"
          >
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commodity: [],
      list: [],
    };
  },
  created() {
    this.$axios.get("/data.json").then((res) => {
      console.log(res);
      this.commodity = res.data;
      this.list = res.data;
      this.$store.commit("com", this.commodity);
      this.$store.commit("lists", this.list);
    });
  },
  methods: {
    onClickadd(item) {
      this.$store.commit("add", item);
    },
  },
};
</script>

<style lang="scss">
.books_container {
  width: 100%;
  //   height: 85vh;
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .books {
    width: 48%;
    height: 300px;
    margin-top: 10px;
    background-color: #fff;
    .books_inside {
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }
    .image_box {
      width: 100%;
      height: 80%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title_box {
      width: 100%;
      height: 10%;
      //   background-color: skyblue;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
    }
    .addTo_box {
      width: 100%;
      height: 10%;
      //   background-color: pink;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .books_name {
        width: 40%;
        height: 100%;
        // background-color: red;
        display: flex;
        align-items: center;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .books_add {
        width: 15%;
        height: 90%;
        background-color: red;
        font-size: 20px;
        text-align: center;
        border-radius: 50%;
        color: #ffff;
      }
    }
  }
}
</style>