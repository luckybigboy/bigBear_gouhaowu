<template>
  <div id="app">
    <router-view />
    <FooterNav v-if="$route.meta.showFooter" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data () {
    return {

    }
  },
  created () {
    this.getAddress();
    this.getUserInfo();
  },
  methods: {
    ...mapActions([
      "getAddress",
      "getUserInfo"
    ])
  },
  components: {
    "FooterNav": () => import('@/components/footerNav/footerNav')
  }
}
</script>
<style lang='stylus'>
#app
  width 100%
  height 100%
  // background #f5f5f5
</style>