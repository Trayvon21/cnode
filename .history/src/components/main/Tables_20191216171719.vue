<template>
  <div class="tables">
    <div v-for="item in list" :key="item.id" class="desc">
      <div v-if="item.author.avatar_url">
        <img :src="item.author.avatar_url" alt />
      </div>
      <div v-else>
        <div></div>
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
.desc{
    width: 100%;
    background: white;
    margin-bottom:2px; 
    height: 30px;
    padding: 10px 0;
}
img{
    width: 20px;
    height: 20px;
}
</style>