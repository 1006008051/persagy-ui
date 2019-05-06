<template>
  <div id="app">
		<mainHeader></mainHeader>
		<div class="container">
			<sideNav class="nav"></sideNav>
			<router-view class="view"></router-view>
		</div>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'		
import sideNav from './components/side-nav.vue'	
export default {
  name: 'app',
  data () {
    return {
    }
  },
	components: {
		sideNav,
		mainHeader
	}
}
</script>

<style lang="less">
	@import "./assets/css/index";
	.container {
    background-color: #fff;
		padding-top: 44px;
    .nav {
      position: fixed;
			left: 0;
			 min-width: 220px;
			padding: 30px 20px 60px 60px;
    }
    .view {
			position: relative;
			margin-left: 320px;
      width: calc(~'90% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }
  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
