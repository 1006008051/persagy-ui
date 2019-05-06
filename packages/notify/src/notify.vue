<template>
	<transition name="fade">
    <div class="p-notify" :class="type" v-show="show">
      <i><p-icon style="font-size:16px;color: inherit;">{{type=='success' ? 'Z':'x'}}</p-icon></i>
      <span class="text">{{text}}</span>
    </div>
</transition>
</template>

<script>
	export default {
		name: 'PNotify',
		props: {
			  type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
				//['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    }
	}
</script>

<style lang="less">
	@import '../../theme-default/index.less';
	@import 'notify';
</style>
