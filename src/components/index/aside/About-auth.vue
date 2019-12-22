<template>
  <div v-if="$route.path.length>10&&auth">
    <div class="aside-box">
      <div class="title">作者</div>
      <div class="auth-desc">
        <div>
          <img :src="auth.avatar_url" alt />
          {{auth.githubUsername}}
        </div>
      </div>
      <div>积分：{{auth.score}}</div>
    </div>
    <div class="aside-box">
      <div class="title">作者其他话题</div>
      <div
        class="desc"
        v-for="item in auth.recent_topics"
        :key="item.index"
        @click="goto(item.id)"
      >{{ item.title }}</div>
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
    goto(item) {
      if (item !== this.$route.params.id) {
        this.$router.push({ name: "detail", params: { id: item } });
        this.$router.go(0)
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {
    auth() {
      return this.$store.state.auth;
    }
  }
};
</script>

<style scoped lang='scss'>
.aside-box {
  background: white;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .title {
    margin: 10px 0 10px;
  }
  .auth-desc {
    line-height: 30px;
    margin: 10px 0;
  }
  .desc {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
  }
  .btn {
    margin-top: 5px;
  }
  img {
    width: 30px;
  }
}
</style>