import { createStore } from 'vuex'

export default createStore({
  // 定义所需要的状态的
  state: {
    // name: 'jack'
    list: [
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: true
      },
      {
        title: '敲代码',
        complete: true
      }
    ]
  },
  getters: {
  },
  // 同步修改state,都是方法
  // 第一个参数state 第二个参数是需要修改的值
  mutations: {
    // setName(state, payload){
    //   state.name = payload
    // }
    // 添加任务列表
    addTodo(state, payload){
      state.list.push(payload)
    },

    // 删除任务
    delTodo(state, payload) {
      state.list.splice(payload,1)
    },

    clear(state, payload){
      // 把过滤之后的数组传进来
      state.list = payload
    }
  },
  // 异步提交mutation
  // 第一个参数store 第二个参数是修改的值
  actions: {
    // asyncSetName(){
    //   setTimeout((store, params) => {
    //     // commit是提交mutation   调用mutation的方法
    //     store.commit('setName', params)
    //   },2000)
    // }
  },
  // 模块化
  modules: {
    
  }
})
