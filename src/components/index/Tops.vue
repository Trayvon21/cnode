<template>
  <div class="top">
    <div class="logo">
      <img src="../../assets/images/logo.svg" alt @click="goto('/')" />
    </div>
    <div class="search">
      <img src="../../assets/images/search.svg" alt />
      <input type="text" />
    </div>
    <div>
      <ul class="nav">
        <li @click="goto('/')">首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
        <li @click="goto('/login')" v-if="!username">登录</li>
        <li @click="exit" v-else>退出</li>
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
  methods: {
    goto(item){
      if(this.$route.path!==item){
        this.$router.push(item)
      }
    },
    exit() {
      this.$store.commit("SET_USER", "");
      localStorage.removeItem("username");
    }
  },
  mounted() {},
  watch: {},
  computed: {
    username() {
      return this.$store.state.username;
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  padding: 10px;
  height: 40px;
  width: 80%;
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
       margin-top: 5px;
      margin-left: 20px;
    position: relative;
    input {
   
      height: 30px;
      border-radius: 15px;
      background: gray;
      outline: none;
      border: 0px;
    }
    input:hover {
      background: white;
    }
    img {
      width: 26px;
      color: black;
      font-weight: bolder;
      line-height: 30px;
      position: absolute;
      left: 5px;
      top: 4px;
    }
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