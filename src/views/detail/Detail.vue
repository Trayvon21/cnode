<template>
  <div>
    <!-- 文章 -->
    <div class="article-bgcolor">
      <div class="article-top">
        <span :class="checkclass(detail)?'green':'gray'" class="label">{{checkLabel(detail)}}</span>
        <span class="article-title">{{detail.title}}</span>
      </div>
      <div
        class="article-msg"
      >● 发布于 {{Formate(detail.create_at)}} ● 作者 {{detail.author.loginname}} ● {{detail.visit_count}} 次浏览 ● 来自 {{checkLabel1(detail)}}</div>
      <div v-html="detail.content" class="markdown-body article-desc"></div>
    </div>
    <!-- 回复内容 -->
    <div class="replies">
      <div class="replies-title">{{detail.replies.length}} 条回复</div>
      <div v-if="detail.replies.length>0" class="replies-desc">
        <div
          v-for="(desc,index) in detail.replies.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )"
          :key="desc.id"
        >
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
        class="paging"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="detail.replies.length"
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
      if (time < 60) return `几秒前`;
      else if (time / 60 <= 60) return `${Math.floor(time / 60)}分钟前`;
      else if (time / 60 / 60 <= 60)
        return `${Math.floor(time / 60 / 60)}小时前`;
      else if (time / 60 / 60 / 24 <= 24)
        return `${Math.floor(time / 60 / 60 / 24)}天前`;
      else return "一个月以前";
    }
    //获取数据
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("getData", to.params.id);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.state.detail = "";
    this.$store.state.auth = "";
    next();
  },
  mounted() {},
  watch: {},
  computed: {
    detail() {
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
    .label {
      margin-bottom: 20px;
    }
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
.article-desc /deep/ {
  img {
    display: block;
    margin: 0 auto;
  }
  p {
    text-indent: 2em;
    line-height: 2em;
  }

  padding: 0 30px;
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
      cursor: pointer;
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
.paging {
  background: white;
  margin-bottom: 20px;
}
</style>