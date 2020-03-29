<template>
  <div class="left">
    <h2 class="title" v-text="blog.title"></h2>
    <p class="msg">
      <span class="author">
        作者:
        <a href="#" v-text="blog.author"></a>
      </span>
      <span class="time" v-cloak>最后发布于{{blog.time}}</span>
      <span class="parise" v-cloak>点赞数:{{blog.parise}}</span>
    </p>
    <div class="content" v-text="blog.content"></div>
    <Comment></Comment>
  </div>
</template>

<script>
import Comment from '../comment'
export default {
  data () {
    return {
      blog: {
        title: 'Java实现归并排序-有图有真相',
        author: '章鱼哥',
        time: '2018-08-12 23:47:08',
        parise: 18,
        content: `margin+border+padding+content

Content边界/内边界: content边界环绕在由该元素的宽和高决定的一个矩形上,这个尺寸通常由该元素渲染后的内容决定,这四个content边界组成的矩形框就是该元素的content box.

Padding边界:padding边界环绕在该元素的padding区域的四周,顾名思义,填充背景色.如果padding的宽度为零,则padding边界与content边界重合.这四个padding边界组成的矩形就是该元素的padding box.

Border边界:border边界环绕在该元素的border区域的四周.如果border的宽度为零,则border边界与padding边界重合.这四个border边界组成的矩形就是该元素的border box.

Margin边界:margin边界环绕在该元素的margin区域的四周,如果margin的宽度为零,则margin边界与border边界重合.这四个margin边界组成的矩形就是该元素的margin box.

对于行内非替换元素(例如span),垂直方向上的margin不起作用

替换元素：input、textarea、img、video、select
非替换元素：div、span、h1~h6…
margin不适用于table类型的元素,如table-caption,table,inline-table,以及td,th,tr等.

border-style的可用值有：’none’(无样式)，’hidden’(隐藏)，’dotted’(点线)，’dashed’(虚线 )，’solid’(实线)，’double’(双线)，’groove’(3D凹槽轮廓)，’ridge’(3D吐槽轮廓)，’inset’(3D凹边轮廓), ‘outset’(3D凸边轮廓)

行内非替换元素的padding会生效，但不会撑开父级元素（可以利用这个特性用来做一些类似时间轴一样的效果）

垂直方向的相邻的外边距会发生外边距的重叠现象

如果都是正边界，结果的边界宽度是相邻边界宽度中最大的值
如果出现负边界，则在最大的正边界中减去绝对值最大的负边界
如果没有正边界，则从零中减去绝对值最大的负边界
兄弟元素的相邻外边距会取最大值

父子元素的相邻外边距会传递给父元素`
      }
    }
  },
  components: {
    Comment
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
a {
  text-decoration: none;
}
.left {
  float: left;
  width: 770px;
  padding: 30px 30px 10px 30px;
  background-color: #fff;
  .title {
    color: #5c5c5c;
  }
  .msg {
    margin-top: 10px;
    font-size: 13px;
    color: #999;
    span {
      padding-right: 10px;
      a {
        color: #409eff;
      }
    }
  }
  .content {
    margin-top: 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    color: #4d4d4d;
    font-size: 15px;
  }
}
</style>
