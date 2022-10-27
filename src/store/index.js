// 状态管理。vuex配置
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  //方法控制数据的改变
  mutations: {
    increment (state,data) {
      state.count+=data
    }
  },
  //计算属性
  getters:{
    //比如计算商品的总价
    totalPrice(state){
      return state.count*9
    }
  },

  action:{
    asyncAdd(store,data){
      setTimeout(()=>{
        store.commit("increment",data);
      },1000)
    }
  }
})

export default store;
