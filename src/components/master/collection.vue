<template>
  <div class="collection">
    <h3 class="edit-title">我的收藏</h3>
    <div class="blog-list clearfix">
      <ul>
        <li v-for="item in collections" :key="item.id">
          <h3>
            <a href="#" v-text="item.title"></a>
          </h3>
          <div class="blog-msg">
            <span class="time" v-text="item.time"></span>
            <span class="parise">
              <a href="#" v-cloak>
                <i class="iconfont icon-dianzan"></i>
                &nbsp;{{item.parise}}
              </a>
            </span>
            <span class="comment">
              <a href="#" v-cloak>
                <i class="iconfont icon-pinglun"></i>
                &nbsp;{{item.comment}}
              </a>
            </span>
          </div>
          <div class="blog-handle">
            <span class="check">
              <a href="#">查看</a>
            </span>
            <span class="delete">
              <a href="#">删除</a>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collections: [
        {
          id: 1,
          title: 'css小结：清除float带来的影响',
          time: '2020年03月05年 09:55:40',
          parise: 32,
          comment: 13
        },
        {
          id: 2,
          title: 'css小结：清除float带来的影响',
          time: '2020年03月05年 09:55:40',
          parise: 32,
          comment: 13
        },
        {
          id: 3,
          title: 'css小结：清除float带来的影响',
          time: '2020年03月05年 09:55:40',
          parise: 32,
          comment: 13
        },
        {
          id: 4,
          title: 'css小结：清除float带来的影响',
          time: '2020年03月05年 09:55:40',
          parise: 32,
          comment: 13
        },
        {
          id: 5,
          title: 'css小结：清除float带来的影响',
          time: '2020年03月05年 09:55:40',
          parise: 32,
          comment: 13
        }
      ]
    }
  },
  components: {

  },
  methods: {

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
.collection {
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
  .blog-list {
    margin-top: 10px;
    margin-bottom: 60px;
    li {
      height: 60px;
      border-bottom: 1px solid #dddddd;
      margin-top: 20px;
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
}
</style>
