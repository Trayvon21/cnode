<template>
  <div>
    <div class="aside-box">
      <div class="title">CNode:Node.js专业中文社区</div>
      <div class="desc">
        您可以
        <span>登录</span>或
        <span>注册</span>,也可以
      </div>
      <el-button type="primary" class="btn">通过GitHub登录</el-button>
    </div>
    <div class="aside-box">
      <div>
        <img src="../../assets/images/aside-ad1.jpg" alt />
      </div>
      <div>
        <img src="../../assets/images/aside-ad2.jpg" alt />
      </div>
      <div>
        <img src="../../assets/images/aside-ad3.jpg" alt />
      </div>
    </div>
    <div class="aside-type">
      <div class="title">无人回复的话题</div>
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
  }
  .btn {
    margin-top: 5px;
  }
  img {
    width: 280px;
  }
}
.aside-type {
    width: 100%;
  .title {
    background: rgb(179, 179, 179);
    height: 20px;
    padding: 10px;
    line-height: 20px;
  }
}
</style>