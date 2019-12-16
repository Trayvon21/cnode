<template>
  <div class="bgcolor" v-if="item.author">
    <div class="top">
      <span :class="checkclass(item)?'green':'gray'" class="label">{{checkLabel(item)}}</span>
      <span class="title">{{item.title}}</span>
    </div>
    <div
      class="msg"
    >● 发布于 {{Formate(item.create_at)}} ● 作者 {{item.author.loginname}} ● {{item.visit_count}} 次浏览 ● 来自 {{checkLabel1(item)}}</div>
    <div v-html="item.content" class="desc"></div>
    <div class="replies">
      <div class="title">回复</div>
      <div v-for="(desc,index) in item.replies" :key="desc.id">
        <div class="replie">
          <img :src="desc.author.avatar_url" alt />
          {{desc.author.loginname}} ● {{index+1}}楼 {{Formate(desc.create_at)}}
        </div>
        <div v-html="desc.content"></div>
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
  methods: {
    checkLabel(item) {
      if (item) {
        if (item.top) return "置顶";
        else if (item.good) return "精华";
      }
    },
    checkLabel1(item) {
      if (item.tab === "share") return "分享";
      else if (item.tab === "ask") return "问答";
    },
    checkclass(item) {
      if (item) {
        if (item.top || item.good) return true;
        else return false;
      }
    },
    Formate(val) {
      let time = this.$dayjs(this.date).valueOf() - this.$dayjs(val).valueOf();
      if (Number(this.$dayjs(time).format("MM")) > 1) {
        return "一个月以前";
      } else if (Number(this.$dayjs(time).format("DD")) > 1) {
        return `${Number(this.$dayjs(time).format("DD")) - 1}天前`;
      } else if (Number(this.$dayjs(time).format("hh")) > 1) {
        return `${Number(this.$dayjs(time).format("hh")) - 1}小时前`;
      } else if (Number(this.$dayjs(time).format("mm")) > 1) {
        return `${Number(this.$dayjs(time).format("mm")) - 1}分钟前`;
      } else if (Number(this.$dayjs(time).format("ss")) > 1) {
        return `${Number(this.$dayjs(time).format("ss")) - 1}秒前`;
      } else {
        return "错误";
      }
    },
    getDatas() {
      this.$store.dispatch("getList");
      let count = this.$route.path.split("/");
      this.$store.dispatch("getData", count[count.length - 1]);
    }
  },
  created() {
    this.getDatas();
  },
  mounted() {},
  watch: {},
  computed: {
    item() {
      return this.$store.state.detail;
    }
  }
};
</script>

<style scoped lang='scss'>
.bgcolor {
  background: white;
  overflow: hidden;
  .top {
    margin: 20px;
  }
  .title {
    font-size: 30px;
  }
}
.green {
  background: green;
  color: white;
}
.gray {
  background: lightgray;
}
.msg {
  width: 100%;
  border-bottom: 1xp solid gray;
}
.desc {
  padding: 10px;
}
.replie{
  height: 40px;
  img{
    width: 30px;
    height: 30px;
  }
}
</style>