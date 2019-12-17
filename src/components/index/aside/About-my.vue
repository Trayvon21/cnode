<template>
  <div >
    <div class="aside-box">
      <div class="title">欢迎登陆</div>
      <div class="desc">
        <div>{{username}}</div>
        <el-button class="btn" @click="exit">退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    username:{
      type:String,
      default:null,
    }
  },
  components: {},
  methods: {
    exit() {
       this.$store.commit("SET_USER", '');
       localStorage.removeItem('username')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.aside-box {
  background: white;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .title {
    margin: 10px 0 30px;
  }
  .desc {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 30px;
    height: 80px;
  }
  .btn {
    height: 30px;
    margin-top: 5px;
  }
  img {
    width: 30px;
    line-height: 30px;
  }
}
</style>