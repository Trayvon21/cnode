<template>
  <div>
    <el-container>
      <el-header >
        <div class="top">
          <div class="logo">
            <img src="../assets/images/logo.svg" alt />
          </div>
          <div class="search">
            <el-input placeholder></el-input>
          </div>
          <div>
            <ul class="nav">
              <li>首页</li>
              <li>新手入门</li>
              <li>API</li>
              <li>关于</li>
              <li>注册</li>
              <li>登录</li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-container class="main">
        <el-main>
          <router-view />
        </el-main>
        <el-aside class="aside">
          <Aside />
        </el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/aside/Aside";
export default {
  data() {
    return {};
  },
  components: {
    Aside
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getList");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #333;
  color: white;
  .top {
    margin-top:10px; 
    height: 40px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    line-height: 20px;
    img {
      width: 120px;
    }
    .nav{
      display: flex;
      li{
        
        padding: 10px 15px;
      }
    }
  }
  .search {
    width: 240px;
  }
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  color: #333;
  text-align: center;
  width: 270px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.main {
  width: 80%;
  margin: 0 auto;
}
body {
  background: #e9eef3 !important;
}
</style>