<template>
  <div class="tables">
    <div v-for="(item,index) in show" :key="item.id" class="desc">
      <!-- 用户图标 -->
      <div class="images">
        <img :src="item.author.avatar_url" alt />
      </div>
      <!-- 访问量 -->
      <div class="visited">
        <span style="color:purple">{{item.reply_count}}</span>/
        <span style="color:lightgray">{{item.visit_count}}</span>
      </div>
      <!-- 标签 -->
      <div :class="checkclass(item)?'green':'gray'" class="label">{{checkLabel(item)}}</div>
      <!-- 标题 -->
      <div class="title" @click="goto(item.id)">{{item.title}}</div>
      <div class="replie-icon">
        <img :src="arr[index]" alt />
      </div>
      <!-- 时间 -->
      <div class="date">{{Formate(item.last_reply_at)}}</div>
    </div>
    <!-- 分页栏 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 15, 20, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      arr: [],
      list: []
    };
  },
  filters: {},
  components: {},
  methods: {
    // 分页栏的js
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    //判断标签的js
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
    //跳转到详情页
    goto(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    },
    //时间格式化
    Formate(val) {
      let time = Number(this.$dayjs() - this.$dayjs(val)) / 1000;
      if (time < 60) retrun`几秒前`;
      else if (time / 60 <= 60) return `${Math.floor(time / 60)}分钟前`;
      else if (time / 60 / 60 <= 60)
        return `${Math.floor(time / 60 / 60)}小时前`;
      else if (time / 60 / 60 / 24 <= 24)
        return `${Math.floor(time / 60 / 60 / 24)}天前`;
      else return "一个月以前";
    },
    getList() {
      this.$axios.req("/topics").then(res => {
        if (res.success === true) {
          this.list = res.data;
          res.data.map(item => {
            this.$axios.req(`/topic/${item.id}`).then(re => {
              if (re.success === true) {
                let coust = re.data.replies;
                if (coust.length>0) {
                  this.arr.push(coust[0].author.avatar_url);
                } else {
                  this.arr.push("");
                }
              }
            });
          });
        }
      });
    }
  },

  mounted() {
    this.getList();
  },
  watch: {},
  computed: {
    //获取列表文件
    show() {
      return this.list.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
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
.replie-icon {
  position: absolute;
  right: 100px;
  img {
    width: 24px;
    height: 24px;
  }
}
</style>