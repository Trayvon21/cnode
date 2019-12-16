<template>
  <div>
    <div class="aside-box" v-if="auth.githubUsername">
      <div class="title">作者</div>
      <div>
        <img :src="auth.avatar_url" alt />
        {{auth.githubUsername}}
      </div>
    </div>
    <div class="aside-box" v-if="auth.githubUsername">
      <div class="title">作者其他话题</div>
      <div class="desc" v-for="item in auth.recent_topics.slice(0,5)" :key="item.id">
          {{ item.title }}
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
</style>