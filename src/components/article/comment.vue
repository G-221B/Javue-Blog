<template>
  <div class="comment">
    <h3>评论</h3>
    <p>
      <textarea
        name
        id
        cols="30"
        rows="10"
        placeholder="想对作者说点什么"
        v-model="comment.content"
        maxlength="1000"
      ></textarea>
    </p>
    <p class="comment-handle">
      <span>你还能输入{{num}}字</span>
      <el-button type="primary">发表评论</el-button>
    </p>
    <div class="comment-list">
      <ul>
        <li class="clearfix" v-for="item in commentList" :key="item.id">
          <div class="msg">
            <img :src="item.img" alt />
            <span class="name">{{item.master}}</span>
            <span class="time">{{item.time}}</span>
          </div>
          <div class="handle">
            <span>
              <a href="#">查看回复( {{item.answerNum}})</a>
              <a href="#">回复</a>
              <a href="#">
                <i class="iconfont icon-dianzan"></i>
                &nbsp; {{item.parise}}
              </a>
            </span>
          </div>
          <div class="content">
            <p>{{item.content}}</p>
          </div>
          <div class="watch">
            <ul>
              <li class="clearfix" v-for="minList in item.minList" :key="minList.id">
                <div class="msg">
                  <img :src="minList.img" alt />
                  <span class="name">
                    {{minList.master}}&nbsp;&nbsp;&nbsp;
                    <span>回复</span>
                    &nbsp;&nbsp;&nbsp;{{minList.visitor}}:
                  </span>
                  <span class="time">{{minList.time}}</span>
                </div>
                <div class="handle">
                  <span>
                    <a href="#">回复</a>
                    <a href="#">
                      <i class="iconfont icon-dianzan"></i>
                      &nbsp;{{minList.parise}}
                    </a>
                  </span>
                </div>
                <div class="content">
                  <p>{{minList.content}}</p>
                </div>
              </li>
            </ul>
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
      // textarea里面的评论内容
      comment: {
        content: ''
      },
      // 回复的input是否可见
      answer: true,
      // 评论消息
      commentList: [
        {
          id: 1,
          img: require('../../assets/image/avatar-default.png'),
          master: '章鱼哥',
          time: '3个月前',
          answerNum: 11,
          parise: 11,
          content: '这个人很懒，什么也没留下来',
          minList: [
            {
              id: 1,
              img: require('../../assets/image/avatar-default.png'),
              master: '章鱼哥',
              visitor: '海绵宝宝',
              time: '3个月前',
              parise: 12,
              content: '这个人很懒，什么也没留下来'
            }
          ]
        },
        {
          id: 2,
          img: require('../../assets/image/avatar-default.png'),
          master: '章鱼哥',
          time: '3个月前',
          answerNum: 11,
          parise: 11,
          content: '这个人很懒，什么也没留下来',
          minList: [
            {
              id: 1,
              img: require('../../assets/image/avatar-default.png'),
              master: '章鱼哥',
              visitor: '海绵宝宝',
              time: '3个月前',
              parise: 12,
              content: '这个人很懒，什么也没留下来'
            }
          ]
        },
        {
          id: 3,
          img: require('../../assets/image/avatar-default.png'),
          master: '章鱼哥',
          time: '3个月前',
          answerNum: 11,
          parise: 11,
          content: '这个人很懒，什么也没留下来',
          minList: [
            {
              id: 1,
              img: require('../../assets/image/avatar-default.png'),
              master: '章鱼哥',
              visitor: '海绵宝宝',
              time: '3个月前',
              parise: 12,
              content: '这个人很懒，什么也没留下来'
            }
          ]
        }
      ]
    }
  },
  components: {

  },
  methods: {
  },
  computed: {
    num () {
      return 1000 - this.comment.content.length
    }
  }
}
</script>

<style scoped lang="less">
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.comment {
  margin-top: 10px;
  h3 {
    color: #409eff;
  }
  p {
    margin-top: 10px;
    textarea {
      width: 750px;
      height: 60px;
      padding: 10px 10px 10px 10px;
      border-radius: 8px;
      border: 1px solid #c1c1c1;
      font-size: 15px;
      resize: none;
      outline: none;
    }
    ::placeholder {
      font-size: 13px;
    }
  }
  .comment-handle {
    text-align: right;
    span {
      padding-right: 10px;
      font-size: 13px;
      color: #999;
    }
  }
  .comment-list {
    margin-top: 20px;
    li {
      width: 100%;
      padding-bottom: 15px;
      border-bottom: 1px dashed #e0e0e0;
      .msg {
        float: left;
        img {
          width: 24px;
          margin-right: 8px;
          border-radius: 50%;
          vertical-align: bottom;
        }
        .time {
          margin-right: 15px;
          color: #999999;
          font-size: 13px;
        }
        .name {
          margin-right: 15px;
          color: #2e2e2e;
          font-size: 15px;
          font-weight: 700;
        }
        .content {
          font-size: 15px;
        }
      }
      .handle {
        float: right;
        a {
          margin-right: 10px;
          color: #a6a6a6;
          font-size: 15px;
        }
        a:hover {
          color: #409eff;
        }
      }
      .content {
        margin-top: 30px;
        p {
          text-indent: 2em;
        }
      }
      .watch {
        margin-top: 5px;
        margin-left: 40px;
        padding-left: 5px;
        border-left: 4px solid #c5c5c5;
        li {
          border: 0;
          .msg {
            span {
              color: #2e2e2e;
              span {
                color: #999999;
              }
            }
          }
          .content {
            margin-top: 25px;
          }
        }
      }
    }
  }
}
</style>
