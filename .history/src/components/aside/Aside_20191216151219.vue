<template>
  <div>
    <div class="aside-box">
      <div class="title">CNode:Node.js专业中文社区</div>
      <div class="desc">
        您可以
        <span>登录</span>或
        <span>注册</span>,也可以
      </div>
      <el-button type="primary">通过GitHub登录</el-button>
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
.aside-box{
    background: white;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    .title{
        margin:10px 0; 
    }
    .desc{
        font-size: 14px;
    }
}
</style>