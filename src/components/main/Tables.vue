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
      <div :class="checkclass(item)?'green':'gray'" class="label">{{checkLabel(item)}}</div>
      <div class="title" @click="goto(item.id)">{{item.title}}</div>
      <div class="date">{{Formate(item.last_reply_at)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null
    };
  },
  filters: {},
  components: {},
  methods: {
    checkLabel(item) {
      if (item.top) return "置顶";
      else if (item.good) return "精华";
      else if (item.tab === "share") return "分享";
      else if (item.tab === "ask") return "问答";
    },
    checkclass(item) {
      if (item.top || item.good) return true;
      else return false;
    },
    goto(id) {
      this.$router.push(`topic/${id}`);
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
    }
  },
  mounted() {
    this.date = new Date();
  },
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
.desc:hover {
  background: rgb(230, 229, 229);
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
  width: 100px;
}
.title {
  margin-left: 10px;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title:hover {
  text-decoration: underline;
  cursor: pointer;
}
.date {
  position: absolute;
  right: 10px;
}
.label {
  width: 45px;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
}
.green {
  background: green;
  color: white;
}
.gray {
  background: lightgray;
}
</style>