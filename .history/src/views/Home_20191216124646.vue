<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">top</div>
      </el-col>
    </el-row>
    <router-view></router-view>
    <div>bottom</div>
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
</style>