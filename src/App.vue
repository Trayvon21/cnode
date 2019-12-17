<template>
  <div class="wraper">
    <template>
      <el-backtop target=".wraper">
        <div
          style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
        >UP</div>
      </el-backtop>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    getJSON() {
      if (localStorage.getItem("username")) {
        this.$store.commit("SET_USER", localStorage.getItem("username"));
      }
    }
  },
  mounted() {
    this.getJSON();
  },
  watch: {},
  computed: {}
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
ol,
ul li {
  list-style: none;
}
.wraper {
  height: 100vh;
  overflow-x: hidden;
}
</style>