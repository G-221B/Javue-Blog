<template>
  <div class="editPassword">
    <h3 class="edit-title">修改密码</h3>
    <form action>
      <p>
        <label for="oldPassword">旧密码:</label>
        <el-input
          show-password
          placeholder="请输入旧密码"
          id="oldPassword"
          v-model="oldPassword"
          class="input"
        ></el-input>
      </p>
      <p>
        <label for="newPassword">新密码:</label>
        <el-input
          show-password
          placeholder="请输入旧密码"
          id="newPassword"
          v-model="newPassword"
          class="input"
        ></el-input>
      </p>
      <p>
        <label for="confirm">确认密码:</label>
        <el-input
          show-password
          placeholder="请输入旧密码"
          id="confirm"
          v-model="confirm"
          class="input"
          @blur="checkPassword"
        ></el-input>
        <span v-if="errorText === '两次输入密码不一致'" class="error">
          <i class="iconfont icon-shibai"></i>
          {{errorText}}
        </span>
        <span v-if="successText === 'ok'" class="success">
          <i class="iconfont icon-chenggong"></i>
          {{successText}}
        </span>
      </p>
      <p class="btns">
        <el-button type="primary" class="btn">保存</el-button>
        <el-button type="info" @click="reset" class="btn">重置</el-button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirm: '',
      errorText: '',
      successText: ''
    }
  },
  components: {

  },
  methods: {
    reset () {
      this.oldPassword = ''
      this.newPassword = ''
      this.confirm = ''
    },
    checkPassword () {
      if (this.confirm !== this.newPassword) {
        this.errorText = '两次输入密码不一致'
        this.successText = ''
      } else {
        this.successText = 'ok'
        this.errorText = ''
      }
      if (this.confirm === '') {
        this.errorText = ''
        this.successText = ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.editPassword {
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
    p {
      margin-top: 15px;
      label {
        width: 85px;
        height: 40px;
        line-height: 40px;
        float: left;
      }
      .input {
        width: 200px;
      }
    }
    .btns {
      margin-left: 70px;
      margin-bottom: 60px;
      .btn {
        margin-right: 20px;
      }
    }
    span {
      font-size: 13px;
      padding-left: 8px;
    }
    .success {
      color: #88d260;
    }
    .error {
      color: #e84335;
    }
  }
}
</style>
