<template>
  <div class="nav">
    <div @click="recolor(1)" :class="{'actived':actived===1}">全部</div>
    <div @click="recolor(2)" :class="{'actived':actived===2}">精华</div>
    <div @click="recolor(3)" :class="{'actived':actived===3}">分享</div>
    <div @click="recolor(4)" :class="{'actived':actived===4}">问答</div>
    <div @click="recolor(5)" :class="{'actived':actived===5}">招聘</div>
    <div @click="recolor(6)" :class="{'actived':actived===6}">客户端测试</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: 1
    };
  },
  components: {},
  methods: {
    recolor(n) {
      console.log(n);
      this.actived = n;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  display: flex;
  height: 20px;
  width: 100%;
  padding: 10px;
  background: #f6f6f6;
  div {
    margin: 0 10px;
    color: #80bd01;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
  }
  .actived {
    background: #80bd01;
    color: white;
  }
}
</style>