/*
通过mutation间接更新state的多个方法的对象
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

import {
  reqAddress,
  reqGoodsList,
  reqShops,
  reqUSerNews,
  reqUserLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqMarketList
} from '@/api';

export default {
  // 1、根据经纬度获取位置详情
  async getAddress ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address })
    }
  },

  // 2、获取食品分类列表
  async getGoodsList ({ commit }) {
    const result = await reqGoodsList();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },

  // 3、根据经纬度获取商铺列表
  async getShops ({ commit, state }) {
    const { latitude, longitude } = state;
    const result = await reqShops(latitude, longitude);
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops })
    }
  },

  // 同步存贮用户信息
  recordUserInfo ({ commit }, userInfo) {
    commit(RECEIVE_user_info, { userInfo });
  },

  // 获取会话获取用户信息
  async getUserInfo ({ commit }) {
    const result = await reqUSerNews();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECEIVE_user_info, { userInfo });
    }
  },

  // 退出登录
  async resetUserInfo ({ commit }) {
    const result = await reqUserLogout();
    if (result.code === 0) {
      commit(RESET_USER_INFO);
    }
  },

  async getShopGoods ({ commit }, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      callback && callback();
      commit(RECEIVE_SHOPGOODS, { goods });
    }
  },
  async getShopRatings ({ commit }, callback) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_SHOPRATINGS, { ratings });
      callback && callback();
    }
  },
  async getShopInfos ({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_SHOPINFO, { info });
    }
  },

  // 增加/减少cartCount数量
  changeCartCount ({ commit }, { isBool, food }) {
    if (!isBool) {
      commit(INCREMENT_CARTCOUNT, { food })
    } else {
      commit(DECREMENT_CARTCOUNT, { food })
    }
  },

  // 清除购物车
  clearCart ({ commit }) {
    commit(CLEAR_CART);
  },
  // 异步获取商家商品列表
  async searchShops ({ commit, state }, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqMarketList(geohash, keyword);
    if (result.code === 0) {
      const searchShops = result.data;
      console.log(searchShops)
      commit(RECEIVE_SEARCH_SHOPS, { searchShops })
    }
  },
}