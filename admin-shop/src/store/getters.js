export default {
  totalCount (state) {
    return state.cartFoods.reduce((pre, item) => pre + item.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((pre, item) => pre + item.count * item.price, 0)
  },
  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
} 