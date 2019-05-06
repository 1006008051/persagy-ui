# Button 按钮
----
### 基础用法
使用```type```、```plain```和```isborder```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <p-button type="blue">我是按钮</p-button>
    <p-button type="red">我是按钮</p-button>
		<p-button type="blue" plain>我是按钮</p-button>
		<p-button type="red" plain>我是按钮</p-button>
		<p-button type="blue" plain isborder>我是按钮</p-button>
		<p-button type="red" plain isborder>我是按钮</p-button>
  </div>
</div>

::: demo
```html

  <div>
    <p-button type="blue">我是按钮</p-button>
    <p-button type="red">我是按钮</p-button>
		<p-button type="blue" plain>我是按钮</p-button>
		<p-button type="red" plain>我是按钮</p-button>
		<p-button type="blue" plain isborder>我是按钮</p-button>
		<p-button type="red" plain isborder>我是按钮</p-button>
  </div>

```
:::

### 按钮形状

通过shape属性将按钮显示为正方形或者圆形。

<div class="demo-block">
  <div>
    <p-button type="blue" plain shape="square" icon="A"></p-button>
    <p-button type="red" shape="round" icon="B"></p-button>
  </div>
</div>

::: demo
```html

 <div>
    <p-button type="blue" shape="square"></p-button>
    <p-button type="red" shape="round"></p-button>
  </div>
  
```
:::


### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<div class="demo-block">
  <p-button type="blue" loading>我是按钮</p-button>
	<p-button type="red" plain loading>我是按钮</p-button>
</div>

::: demo
```html

<div class="demo-block">
  <p-button type="blue" loading>加载中</p-button>
	<p-button type="red" plain loading>加载中</p-button>
</div>

```
:::

### 禁用

按钮不可用状态。

<div class="demo-block">
  <p-button type="blue" disabled>我是禁用按钮</p-button>
	<p-button type="red" disabled>我是禁用按钮</p-button>
</div>

::: demo
```html

<div class="demo-block">
   <p-button type="blue" disabled>我是禁用按钮</p-button>
  <p-button type="red" disabled>我是禁用按钮</p-button>
</div>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| loading  | 是否显示加载按钮    | boolean   | —   | false   |
| shape  | 按钮形状 | string   |  square,round  |  —  |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
