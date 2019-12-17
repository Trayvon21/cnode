<template>
  <div v-if="auth">
    <!-- 文章 -->
    <div class="article-bgcolor">
      <div class="article-top">
        <span :class="checkclass(item)?'green':'gray'" class="label">{{checkLabel(item)}}</span>
        <span class="article-title">{{item.title}}</span>
      </div>
      <div
        class="article-msg"
      >● 发布于 {{Formate(item.create_at)}} ● 作者 {{item.author.loginname}} ● {{item.visit_count}} 次浏览 ● 来自 {{checkLabel1(item)}}</div>
      <div v-html="item.content" class="article-desc"></div>
    </div>
    <!-- 回复内容 -->
    <div class="replies">
      <div class="replies-title">{{item.replies.length}} 条回复</div>
      <div v-if="item.replies.length>0" class="replies-desc">
        <div v-for="(desc,index) in item.replies" :key="desc.id">
          <div class="replie">
            <div class="replie-top">
              <div>
                <img :src="desc.author.avatar_url" alt />
              </div>
              <div>{{desc.author.loginname}} ● {{index+1}}楼 {{Formate(desc.create_at)}}</div>
              <div class="ups">
                <div>{{desc.ups.length}}</div>
                <img src="../../assets/images/ups.svg" alt />
              </div>
            </div>
            <div v-html="desc.content" class="replie-desc"></div>
          </div>
        </div>
      </div>
      <div v-else>暂无评论</div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pagesize: 10
    };
  },
  components: {},
  methods: {
    //获取分页栏的数据
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    //置顶和精华标签
    checkLabel(item) {
      if (item) {
        if (item.top) return "置顶";
        else if (item.good) return "精华";
      }
    },
    //分享和问答标签
    checkLabel1(item) {
      if (item.tab === "share") return "分享";
      else if (item.tab === "ask") return "问答";
    },
    //标签的样式
    checkclass(item) {
      if (item) {
        if (item.top || item.good) return true;
        else return false;
      }
    },
    //格式化时间
    Formate(val) {
      let time = Number(this.$dayjs(this.date) - this.$dayjs(val)) / 1000;
      if (time < 60) retrun`几秒前`;
      else if (time / 60 <= 60) return `${Math.floor(time / 60)}分钟前`;
      else if (time / 60 / 60 <= 60)
        return `${Math.floor(time / 60 / 60)}小时前`;
      else if (time / 60 / 60 / 24 <= 24)
        return `${Math.floor(time / 60 / 60 / 24)}天前`;
      else return "一个月以前";
    },
    //获取数据
    getDatas() {
      this.$store.state.detail = {};
      this.$store.dispatch("getList");
      let count = this.$route.path.split("/");
      this.$store.dispatch("getData", count[count.length - 1]);
    }
  },
  mounted() {
    this.getDatas();
  },
  watch: {},
  computed: {
    item() {
      return this.$store.state.detail;
    },
       auth() {
      return this.$store.state.auth;
    }
  }
};
</script>

<style scoped lang='scss'>
.article-bgcolor {
  background: white;
  overflow: hidden;
  .article-top {
    margin: 20px;
  }
  .article-title {
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
.article-msg {
  color: rgb(120, 182, 26);
  padding-left: 20px;
  border-bottom: 1xp solid gray;
}
.article-desc {
  img {
    width: 100%;
  }
  padding: 10px;
}
.replies {
  margin-top: 20px;
  .replies-title {
    background: rgb(228, 228, 228);
    height: 20px;
    font-size: 14px;
    padding: 10px;
    line-height: 20px;
  }
}
.replie {
  background: white;
  margin-bottom: 2px;
  .replie-top {
    display: flex;
    padding-top: 10px;
    position: relative;
    div {
      line-height: 30px;
      margin-left: 10px;
    }
    .ups {
      position: absolute;
      right: 15px;
      height: 30px;
      display: flex;
      div {
        line-height: 30px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-top: 5px;
      }
    }
  }
  .replie-desc {
    padding-left: 50px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
}
@import "../../styles/common";
</style>