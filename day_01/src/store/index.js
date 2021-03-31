import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from "vuex-persist"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list1: [],
    import: {},
    showlist: [],
    booksList: [],
    backColor: 'blue',
    colors: ['red', 'green', 'orange', 'blue', 'yellow', 'purple', 'pink'],
  },
  mutations: {
    lists(state, list) {
      state.list1 = list
      console.log(state.list1);
    },
    changeBackColor(state) {
      let i = Math.round(Math.random() * 6)
      state.backColor = state.colors[i]
    },
    com(state, commodity) {
      state.showlist = commodity
    },
    onImport(state, input) {//模糊搜索
      state.import = input;
      state.list1 = state.showlist.filter((item) => {
        return item.name.includes(state.import)
      })
      console.log(state.import);
      console.log(state.list1, state.showlist);
    },
    add(state, item) {//添加图书
      // state.booksList.push(item)
      let flag = false;
      state.booksList.forEach((i) => {
        if (item.id == i.id) {
          i.num++;
          flag = true;
          return false
        }
      });
      if (!flag == false) {
        alert("已有图书不能重复添加")
      } else {
        item.num = 1;
        state.booksList.push(item)
      }
    },
    onFinish(state, i) {//改变状态 已看完
      state.booksList.forEach((item, index) => {
        if (index == i) {
          if (item.state == 0) {
            item.state = 1
          } else {
            item.state = 0
          }
        }
      })
    },
    LookAgain(state, i) {//改变状态 正在看
      state.booksList.forEach((item, index) => {
        if (index == i) {
          if (item.state == 1) {
            item.state = 0
          } else {
            item.state = 1
          }
        }
      })
    },
    remove(state, index) {//删除图书
      state.booksList.splice(index, 1)
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
  //配置vuex本地存储插件
})
