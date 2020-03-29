<template>
  <div class="editBlog">
    <h3 class="edit-title">我的博客</h3>
    <form action>
      <span>筛选:</span>
      <el-select v-model="value" placeholder="请选择类别" class="select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input
        placeholder="请输入关键字"
        id="year"
        v-model="key"
        class="input"
        @keydown.enter.native="search"
      ></el-input>
      <el-button type="primary" class="btn" @click="search">搜索</el-button>
    </form>
    <div class="blog-list clearfix">
      <ul>
        <li class="clearfix" v-for="item in myblog" :key="item.articleId">
          <h3>
            <router-link v-text="item.articleTitle" :to="'/article/'+item.articleId"></router-link>
          </h3>
          <div class="blog-msg">
            <span class="time" v-cloak>{{item.createTime | format}}</span>
            <span class="parise">
              <a href="#" v-cloak>
                <i class="iconfont icon-dianzan"></i>
                &nbsp;{{item.articleStar}}
              </a>
            </span>
            <span class="comment">
              <a href="#" v-cloak>
                <i class="iconfont icon-pinglun"></i>
                &nbsp;{{item.commentCount}}
              </a>
            </span>
          </div>
          <div class="blog-handle">
            <span class="check">
              <router-link :to="'/article/'+item.articleId">查看</router-link>
            </span>
            <span class="edit">
              <a href="#">修改</a>
            </span>
            <span class="delete">
              <a href="#">删除</a>
            </span>
          </div>
        </li>
        <li v-if="myblog.length === 0" style="color:#409eff">无相关内容</li>
      </ul>
    </div>
    <div class="getmore">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="3"
        :current-page="pageIndex"
        @next-click="getNext"
        @prev-click="getPre"
        @current-change="pageSkip"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 关键字
      key: '',
      // 类别
      options: [{
        value: '0',
        label: '前端'
      }, {
        value: '1',
        label: '后端'
      }, {
        value: '-1',
        label: '全部'
      }],
      // 选择的类别
      value: '',
      // 我的博客列表
      myblog: [
        // {
        //   id: 1,
        //   title: 'css小结：清除float带来的影响',
        //   time: '2020年03月05年 09:55:40',
        //   parise: 32,
        //   comment: 13
        // }
      ],
      // 总页
      total: 1,
      pageIndex: 1,
      pageUrl: ''
    }
  },
  components: {

  },
  methods: {
    // 封装获取文章代码
    getArticle (url) {
      this.axios.get(url)
        .then(res => {
          if (res.data.success) {
            // 页数
            this.total = this.$store.state.pageSize * res.data.data.totalPages
            this.myblog = res.data.data.content
          } else {
            this.$message.error('加载失败')
          }
        })
        .catch(err => {
          console.log(err)
          this.$message.error('加载失败')
        })
    },
    // 搜索功能
    search () {
      if (this.key.trim() === '') {
        this.$message.error('请输入关键字')
      } else {
        this.pageUrl = '/article/condition/select?articleTitle=' + this.key.trim() + '&userId=' + window.sessionStorage.getItem('userId')
        this.getArticle(this.pageUrl)
        this.key = ''
      }
    },
    // 下一页
    getNext () {
      this.pageIndex++
      this.getArticle(this.pageUrl + '&page=' + this.pageIndex)
    },
    // 上一页
    getPre () {
      this.pageIndex++
      this.getArticle(this.pageUrl + '&page=' + this.pageIndex)
    },
    // 跳页
    pageSkip (index) {
      this.pageIndex = index
      this.getArticle(this.pageUrl + '&page=' + this.pageIndex)
    }
  },
  filters: {
    // 处理日期
    format (val) {
      var date = new Date(Date.parse(val))
      var year = date.getFullYear()
      var month = date.getMonth() - 1
      var day = date.getDay()
      var hour = date.getHours()
      var minutes = date.getMinutes()
      var seconde = date.getSeconds()
      return `${year}年${month}月${day}日 ${hour}:${minutes}:${seconde}`
    }
  },
  watch: {
    // 监听类别的变化
    value (val) {
      if (val === '1' || val === '0') {
        this.pageUrl = '/article/condition/select?bigType=' + val + '&userId=' + window.sessionStorage.getItem('userId')
        this.getArticle(this.pageUrl)
      } else {
        this.pageUrl = '/article/condition/select?userId=' + window.sessionStorage.getItem('userId')
        this.getArticle(this.pageUrl)
      }
    }
  },
  created () {
    // 初始化页面
    this.pageUrl = '/article/condition/select?userId=' + window.sessionStorage.getItem('userId')
    this.getArticle(this.pageUrl)
  }
}
</script>

<style scoped lang="less">
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.editBlog {
  float: right;
  width: 860px;
  padding: 10px 30px 10px 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  .edit-title {
    padding-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    color: #409eff;
  }
  form {
    height: 68px;
    padding: 0 40px 0 60px;
    margin-top: 10px;
    background-color: #f2f5f7;
    line-height: 68px;
    color: #999;
    .input {
      width: 220px;
    }
    .input,
    .select {
      padding-left: 30px;
    }
    .btn {
      margin-left: 30px;
    }
  }
  .blog-list {
    margin-top: 10px;
    margin-bottom: 60px;
    li {
      margin-top: 20px;
      padding-bottom: 8px;
      border-bottom: 1px solid #dddddd;
      h3 {
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 8px;
        a {
          color: #4d4d4d;
        }
        a:hover {
          color: #409eff;
        }
      }
      .blog-msg {
        float: left;
        font-size: 12px;
        color: #999999;
        a {
          padding-left: 10px;
          color: #999999;
        }
      }
      .blog-handle {
        float: right;
        font-size: 12px;
        .delete {
          a {
            color: #ca0c16;
          }
        }
        a {
          padding-left: 10px;
          color: #409eff;
        }
      }
    }
  }
  .getmore {
    text-align: center;
  }
}
</style>
