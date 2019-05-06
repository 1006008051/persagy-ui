<template>
	<button
	class="p-button"
	@click="handleClick"
	 :class="[
			type ? 'p-button--' + type : '',
      shape ? 'p-button--' + shape : '',
			icon ? 'p-icon--' + icon : '',
      { 
        'is-loading': loading,
				'is-plain': plain,
        'is-border': isborder,
				 'is-disabled': disabled
      }
    ]"
	>
	<i class="per-bloading" v-if="loading">
		<svg class="per-loading-verysmall_svg" viewBox="25 25 50 50"><circle cx="50" cy="50" r="22" fill="none" class="path"></circle></svg>
	</i>
   <p-icon v-if="icon && !loading" style="color:inherit">{{icon}}</p-icon>
	<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
	export default {
		name: 'PButton',
		props: {
			type: {
			  type: String
			},
      shape: {
        type: String
      },
      icon: {
        type: String,
        default: ''
      },
			disabled: Boolean,
      plain: Boolean,
      loading: Boolean,
      isborder: Boolean
    },
		methods: {
			handleClick (evt) {
				this.$emit('click', evt);
			}
		}
	}
</script>

<style lang="less">
	@import 'button';
</style>
