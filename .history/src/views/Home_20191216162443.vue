<template>
  <div class="bgcolor">
    <el-container>
      <!-- 顶部 Tops -->
      <el-header>
        <Tops />
      </el-header>
      <!-- 中间 -->
      <div class="middle">
      <el-container >
        <el-main>
          <!-- 列表部分 main.vue与login.vue -->
          <router-view />
        </el-main>
        <!-- 侧边栏 Aside -->
        <el-aside>
          <Aside />
        </el-aside>
      </el-container>
      </div>
      <!-- 底部 Footer -->
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/index/Aside";
import Tops from "../components/index/Tops";
import Footer from "../components/index/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Aside,
    Tops,
    Footer
  },
  methods: {},
  mounted() {
    // this.$store.dispatch("getList");
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
  margin-bottom: 20px;
}
.el-main {
  background-color: #e9eef3;
  padding: 0;
  margin: 0 10px;
  color: #333;
}
.el-aside {
  color: #333;
  width: 270px;
}
.middle {
  width: 90%;
  margin: 0 auto;
}
.el-footer {
  color: #333;
  background: white;
}
</style>