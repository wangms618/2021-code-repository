import { createStore } from 'vuex'
import {getCart} from '../api/service/cart'
export default createStore({
  state: {
    cartCount:0 // 购物车商品数量
  },
  mutations: {
    addCart(state,payload) { // 添加购物车记录
      state.cartCount = payload.count
    }
  },
  actions: {
    // 更新购物车数据
    // 这里接口请求
    async updateCart({ commit }) {
      // 拿到最新的购物车数据
      const { data } = await getCart()
      commit('addCart', {
        count:data.length || 0 
      })
    }
  },
  modules: {
  }
})
