<br />
<br />
<div style="text-align:center">
<b style="font-size:30px">dcbmui</b>
<p>基于Vite4+TypeScript的Vue3组件库</p>
</div>

**dcbmui**是一个 **Vue3** 组件库,采用最新的 `Vite4+TypeScript` 为技术栈,支持`按需加载`,`单元测试`,`自动打包与发布`等功能,让我们能更专注于业务组件的开发。

## 快速使用



- 安装依赖

```
npm i dcbmui
```

- 使用组件

```javascript
import { createApp } from 'vue';
import dcbmui from 'dcbmui';
const app = createApp(App);
app.use(dcbmui);
```