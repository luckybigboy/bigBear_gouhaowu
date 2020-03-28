/*
 直接更新state的多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_user_info,
  RESET_USER_INFO,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPINFO,
  INCREMENT_CARTCOUNT,
  DECREMENT_CARTCOUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types';
import Vue from 'vue';

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_user_info] (state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {};
  },
  [RECEIVE_SHOPGOODS] (state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_SHOPRATINGS] (state, { ratings }) {
    state.ratings = ratings;
  },
  [RECEIVE_SHOPINFO] (state, { info }) {
    state.info = info;
  },
  [INCREMENT_CARTCOUNT] (state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1); // 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  [DECREMENT_CARTCOUNT] (state, { food }) {
    if (food.count) {
      food.count--;
      if (food.count === 0)
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
    }
  },
  [CLEAR_CART] (state) {
    // 删除food中的count
    state.cartFoods.forEach(item => item.count = 0);
    // 删除cartFoods
    state.cartFoods = [];
  },
  // 搜索
  [RECEIVE_SEARCH_SHOPS] (state, { searchShops }) {
    state.searchShops = searchShops;
  }
}