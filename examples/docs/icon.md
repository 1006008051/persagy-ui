<script>
  export default {
    data() {
      return {
        icons: [
		'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
		'+','-','%','（','）','＊','^','<','>','→','↓','↑','←','$','#','*','@','!','~','?','`','&','"','1','2','¨',
		'﹂','﹁','︶',':','\{','α','β','γ','∩','∈','(','\'']
      };
    }
  }
</script>
<style lang="less">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 10%;
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      color: #99a9bf;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #3f536e;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

# Icon 图标

### 如何使用

使用 ```p-icon"``` 标签来声明图标，具体图标的名称请 ```copy``` 相应的文字

<div class="demo-block">
  <p-icon>A</p-icon>
  <p-icon>S</p-icon>
	<p-icon>α</p-icon>
	<p-icon>M</p-icon>
	<p-icon>K</p-icon>
	<p-icon>?</p-icon>
</div>

::: demo
```html

<p-icon>A</p-icon>
<p-icon>S</p-icon>
<p-icon>α</p-icon>
<p-icon>M</p-icon>
<p-icon>K</p-icon>
<p-icon>?</p-icon>

```
:::

### 全部图标示例

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <p-icon>{{name}}</p-icon>
      <P>{{name}}</P>	
    </span>
  </li>
</ul>