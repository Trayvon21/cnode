<template>
  <div class="bgcolor">
    <el-container>
      <el-header>
        <Tops />
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
        <div class="foot">
          <div>RSS | 源码地址</div>
          <div>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
          <div>
            服务器赞助商为
            <img src="../assets/images/foot-1.jpg" />，存储赞助商为
            <img src="../assets/images/foot-2.jpg" class="foot-img" />，由
            <img src="../assets/images/foot-3.jpg" />提供应用性能服务。
          </div>
          <div>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/index/Aside";
import Tops from "../components/index/Tops";
export default {
  data() {
    return {};
  },
  components: {
    Aside,Tops
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
.bgcolor {
  background-color: #e9eef3;
}
.el-header {
  background-color: #333;
  color: white;
  
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
}
.el-aside {
  color: #333;
  width: 270px;
}
.main {
  width: 90%;
  margin: 20px auto;
}
.el-footer {
  color: #333;
  background: white;
  .foot {
    padding: 10px;
    height: 190px;
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    div {
      margin: 5px 0;
    }
    .foot-img {
      width: 110px;
    }
  }
}
</style>