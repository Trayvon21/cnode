<template>
  <div>
    <Navs />
    <Tables />
    <!-- <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div> -->
  </div>
</template>

<script>
import Navs from "../../components/main/Navs";
import Tables from "../../components/main/Tables";
export default {
  data() {
    return {};
  },
  components: {
    Navs,Tables
  },
  methods: {},
  mounted() {
      this.$store.dispatch("getList");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>