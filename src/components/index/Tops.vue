<template>
  <div class="top">
    <div class="logo">
      <img src="../../assets/images/logo.svg" alt @click="$router.push('/')" />
    </div>
    <div class="search">
      <el-input placeholder></el-input>
    </div>
    <div>
      <ul class="nav">
        <li @click="$router.push('/')">首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
        <li>注册</li>
        <li @click="$router.push('/login')">登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  padding: 10px;
  height: 40px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  img {
    width: 120px;
    cursor: pointer;
  }
  .search {
    margin-left: 10px;
    width: 240px;
  }
  .nav {
    display: flex;
    position: absolute;
    right: 0;
    li {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
}
</style>