<template>
  <div>
    <el-container>
      <el-header>
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
      <el-footer>
        RSS | 源码地址
CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。

服务器赞助商为 ucloud ，存储赞助商为 七牛云存储 ，由 alinode 提供应用性能服务。

新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</el-footer>
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
      }
    }
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
  width: 90%;
  margin: 20px auto;
}
</style>