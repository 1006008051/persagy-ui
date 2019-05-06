# Loading 加载
----
### 全局加载
使用```type='global'```属性来定义 全局加载。

<div class="demo-block">
   <p-button type="blue" @click="showIt()">全局加载</p-button>
   <p-loading type="global" :isShow="showGlobal"></p-loading>
   <script>
   export default {
	 data () {
		return {
			showGlobal: false,
			showPart: false
		} 
	 },
	 methods: {
		 showIt(e) {
			 let _this = this
			 _this.showGlobal = true
			 setTimeout(function(){
				_this.showGlobal = false
			 }, 3000)
		 },
		  showP() {
		 			 let _this = this
		 			 _this.showPart = true
		 			 setTimeout(function(){
		 				_this.showPart = false
		 			 }, 3000)
		 }
	 }  
   }
   </script>
</div>

::: demo
```html

  <p-loading type="global" isShow></p-loading>

```
:::

### 局部加载
使用```type='part'```属性来定义局部加载。

<div class="demo-block">
<p-button type="blue" @click="showP()">局部加载</p-button>
   <p-loading type="part" :isShow="showPart" showText="自定义文字..."></p-loading>
</div>

::: demo
```html

  <p-loading type="part"  isShow showText="自定义文字..."></p-loading>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   global/part |     —    |
| isShow     | 是否显示加载   | Boolean    | true/false | false   |


