<template>
  <div class="tables">
    <div v-for="item in list" :key="item.id" class="desc">
      <!-- 用户图标 -->
      <div class="images">
        <img :src="item.author.avatar_url" alt />
      </div>
      <!-- 访问量 -->
      <div class="visited">
        <span>{{item.reply_count}}</span> /
        <span>{{item.visit_count}}</span>
      </div>
      <div>[dddd]</div>
      <div class="title">{{item.title}}</div>
      <div class="date">{{itm.last_reply_at|Formate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  filters: {
      'Formate'(val){

      }
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
  line-height: 30px;
  position: relative;
}
.images {
  width: 45px;
  height: 30px;
}
img {
  margin-left: 10px;
  width: 30px;
  height: 30px;
}
.visited {
  width: 85px;
}
.title {
  margin-left: 10px;
}
.date {
  position: absolute;
  right: 10px;
}
</style>