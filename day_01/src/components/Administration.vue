<template>
  <div>
    <div>
      <div
        class="see_box"
        @click="open = !open"
        v-back="$store.state.backColor"
      >
        <h3>正在看</h3>
        <div class="arrow_box">></div>
      </div>
      <transition name="fade">
        <ul v-show="open">
          <li v-for="(item, index) in this.$store.state.booksList" :key="index">
            <div v-show="item.state == 0">
              <div class="name_box">{{ item.name }}</div>
              <div class="state_box">
                <span class="red" @click="onClickFail(index)">{{ text1 }}</span>
                <span class="dd">|</span>
                <p @click="onClickRemove(index)">{{ text2 }}</p>
              </div>
            </div>
          </li>
        </ul>
      </transition>
    </div>
    <div>
      <div
        class="see_box"
        @click="packup = !packup"
        v-back="$store.state.backColor"
      >
        <h3>已完结</h3>
        <div class="arrow_box">></div>
      </div>
      <transition name="up">
        <ul v-show="packup">
          <li v-for="(item, index) in this.$store.state.booksList" :key="index">
            <div v-show="item.state == 1">
              <div class="name_box">{{ item.name }}</div>
              <div class="state_box">
                <span class="red" @click="onLookAgain(index)">{{ text3 }}</span>
                <span class="dd">|</span>
                <p @click="onClickRemove(index)">{{ text2 }}</p>
              </div>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      packup: false,
      text1: "标记已看完",
      text2: "删除图书",
      text3: "再看一遍",
    };
  },
  methods: {
    onClickRemove(index) {
      //删除
      this.$store.commit("remove", index);
    },
    onClickFail(index) {
      //改变状态已看完
      this.$store.commit("onFinish", index);
    },
    onLookAgain(index) {
      //改变状态正在看
      this.$store.commit("LookAgain", index);
    },
  },
};
</script>

<style lang="scss">
.see_box {
  width: 100%;
  height: 40px;
  background-color: red;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #fff;
    margin-left: 10px;
  }
  .arrow_box {
    width: 30px;
    height: 25px;
    // background-color: skyblue;
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin-right: 10px;
  }
}
ul {
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  overflow: scroll;
  li {
    width: 100%;
    // margin-top: 10px;
    div {
      display: flex;
      justify-content: space-between;
    }
    // line-height: 120px;
    .name_box {
      margin-left: 10px;
      font-weight: 700;
    }
    .state_box {
      margin-right: 10px;
      .red {
        color: red;
        font-size: 16px;
      }
      .dd {
        width: 20px;
        text-align: center;
      }
    }
  }
}
.arrow_box:hover {
  transition: all 1s;
  transform: rotate(90deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 3s;
}
.fade-enter,
.fade-leave-to {
  height: 0px !important;
}
.up-enter-active,
.up-leave-active {
  transition: all 3s;
}
.up-enter,
.up-leave-to {
  height: 0px !important;
}
</style>