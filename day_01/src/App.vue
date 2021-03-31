<template>
  <div id="app">
    <transition name="ani">
      <router-view class="page" />
    </transition>
  </div>
</template>

<style lang="scss">
// 过度动画的类名：
//   v-enter
//   表示动画进入的初始状态
//   v-enter-active
//   动画过程
//   v-enter-to表示动画结束的状态
//   v-leave
//   表示动画离开的初始状态
//   v-leave-active
//   离开的动画过程
//   v-leave-to
//   表示动画离开结束的状态
//   v将会被name的值替换掉
* {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
}
.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.ani-enter {
  transform: translate(100%);
}
.ani-enter-active {
  transition: all 1s;
}
.ani-leave-active {
  transition: all 1s;
}
.ani-leave-to {
  transform: translate(-100%) scale(0) rotate(180deg);
  opacity: 0;
}
</style>
