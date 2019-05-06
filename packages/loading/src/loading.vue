<template>
	<div class="p-loading"
	:class="[
				type ? 'p-loading--' + type : ''
	 ]"
	 showText="showText"
	 v-show="isShow"
	>
		<div class="loading-con" v-if="type=='global'"><div class="per-loading-overall_pic"></div><div class="per-loading-overall_text"></div></div>
		<div class="loading-con" v-if="type=='part'"><svg class="per-loading-nomal_svg" viewBox="25 25 50 50"><circle cx="50" cy="50" r="22" fill="none" class="path"></circle></svg><div class="per-loading-nomal_text" loadingtext="">{{showText}}</div></div>
	</div>
</template>

<script>
	export default {
		name: 'PLoading',
		props: {
			type: {
			  type: String
			},
			showText: {
			  type: String,
				default: '加载中，请稍后'
			},
			isShow: Boolean
    }
	}
</script>

<style lang="less">
	@import 'loading';
</style>
