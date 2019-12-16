<template>
  <div class="tables">
    <div v-for="item in list" :key="item.id" class="desc">
      <!-- 用户图标 -->
        <div style="width:30px;height:30px">
          <img :src="item.author.avatar_url" alt />
        </div>
      <!-- 访问量 -->
      <div>
        <span>{{item.reply_count}}</span> / 
        <span>{{item.visit_count}}</span>
      </div>
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
  computed: {
    list() {
      return this.$store.state.list;
    }
  }
};
</script>

<style scoped lang='scss'>
.desc {
  width: 100%;
  background: white;
  margin-bottom: 2px;
  height: 30px;
  padding: 10px 0;
  display: flex;
   font-size: 14px;
}
img {
  margin-left:10px;
  margin-right: 5px;
  width: 30px;
  height: 30px;
}
span{
    line-height: 30px;
}
</style>