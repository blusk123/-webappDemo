## 使用方法
  因为项目使用Mock作为后端的模拟数据，所以需要 npm run mock
  把服务先跑起来，再npm start查看页面效果


## 线上环境下，代码优化方案
  1. 把需要的依赖打包成vendor.js, 把自己的代码打包成bundle.js。
      凭借vendor.js基本不需要更新。靠浏览器缓存提升性能。

  2. webpack.DefinePlugin将React编译时的提示，报错等消除。
      吧React压缩到最小

  3. 代码压缩 -- webpack.optimze.UglifyJsPlugin().变量变成
      a,b,c...

  


## react性能优化
  1. 最基本的方案。--PureRenderMixin--重写组件的shouldComponentUpdate函数。
      当state和props不发生改变时。return false。尽量开发的每个组件都使用。

## 心得
	程序中所有的等于判断都用"==="(按照jq)
	除了要得到null与undefined 用'==null'

## 坑
  1.  ios safari 无痕模式下，直接使用localStorage.setItem会报错
      解决方法： try ... catch(error) ....

  2.  开发时页面的图片一直没加载，看代码，图片确实已经被base64转码了。但显示为空，
      经过几个小时的坐立不安。才意识到是webpack版本太低的缘故。。。


## 问题
  1.  当搜索时搜索组件联动改变url，页面不会刷新。应把方法在componentdidUpdate中调
      取一次。并把状态数据相同的给排除且重置state