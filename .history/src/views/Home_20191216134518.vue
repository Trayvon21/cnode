<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
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
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #333;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  background-color: #d3dce6;
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
  width: 1200px;
  margin: 0 auto;
}
body {
  background: #e9eef3 !important;
}
</style>