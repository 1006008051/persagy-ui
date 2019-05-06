# notify 提示
----
### 成功失败提示
PersagyUI注册了$notify全局方法，使用```type'```属性来区分提示类型，默认显示时长2s,动画时长是0.5s。
<div class="demo-block">
   <p-button type="blue" @click="success()">成功提示</p-button>
   <p-button type="red" @click="error()">失败提示</p-button>
   <script>
   export default {
	 data () {
		return {
		} 
	 },
	 methods: {
		 success() {
			 this.$pnotify.success('成功啦！')
		},
		  error(){
			  this.$pnotify.error('失败啦！')
		  }
   }
   }
   </script>
</div>

::: demo
```html

  <p-button type="blue" @click="success()">成功提示</p-button>
  <p-button type="red" @click="error()">失败提示</p-button>
  <script>
  export default {
  	 data () {
  		return {
  		} 
  	 },
  	 methods: {
  		 success() {
  			 this.$pnotify.success('成功啦！')
  		},
  		  error(){
  			  this.$pnotify.error('失败啦！')
  		  }
  }
  }
  </script>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   success/error |     —    |
| text     | 提示文字   | string    |     —    |     —    |