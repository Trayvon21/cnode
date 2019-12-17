<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    getJSON() {
      if (localStorage.getItem("username")) {
        this.$store.commit("SET_USER", localStorage.getItem("username"));
      }
    }
  },
  mounted() {
    this.getJSON();
  },
  watch: {},
  computed: {}
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
ol,
ul li {
  list-style: none;
}
</style>