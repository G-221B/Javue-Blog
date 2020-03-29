<template>
  <div class="master clearfix">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './index/header'
import Main from './master/main'
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    Main
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.master {
  background-color: #f5f6f7;
}
</style>
