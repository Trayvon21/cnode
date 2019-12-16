<template>
  <div>
    <!-- 登录注册界面的关于 -->
    <div class="aside-box" v-if="$route.path==='/login'">
      <div class="title">关于</div>
      <div>CNode：Node.js专业中文社区</div>
      <div>在这里你可以：</div>
      <div>向别人提出你遇到的问题</div>
      <div>帮助遇到问题的人</div>
      <div>分享自己的知识</div>
      <div>和其它人一起进步</div>
    </div>
    <!-- 登录注册前界面 -->
    <div class="aside-box" v-if="$route.path==='/'">
      <div class="title">CNode:Node.js专业中文社区</div>
      <div class="desc">
        您可以
        <span @click="$router.push('/login')">登录</span>或
        <span>注册</span>,也可以
      </div>
      <el-button type="primary" class="btn" @click="$router.push('/login')">通过GitHub登录</el-button>
    </div>
    <!-- 关于作者 -->
   <about/>
    <!-- 广告 -->
    <div class="aside-box" v-if="$route.path!=='/login'">
      <div>
        <img src="../../assets/images/aside-ad1.jpg" alt />
      </div>
      <div>
        <img src="../../assets/images/aside-ad2.jpg" alt />
      </div>
      <div>
        <img src="../../assets/images/aside-ad3.jpg" alt />
      </div>
    </div>
    <!-- 无人回复话题 -->
    <div class="aside-type" v-if="$route.path!=='/login'">
      <div class="title">无人回复的话题</div>
      <div class="desc">
        <div>demo</div>
        <div>demo</div>
        <div>demo</div>
        <div>demo</div>
        <div>demo</div>
      </div>
    </div>
    <!-- 积分榜 -->
    <div class="aside-type" v-if="$route.path==='/'">
      <div class="title">积分榜 TOP 100 &gt;&gt;</div>
      <div class="desc">
        <div>demo</div>
        <div>demo</div>
        <div>demo</div>
        <div>demo</div>
        <div>demo</div>
      </div>
    </div>
    <!-- 友情社区 -->
    <div class="aside-type" v-if="$route.path==='/'">
      <div class="title">友情社区</div>
      <div class="desc">
        <div>
          <img src="../../assets/images/friend1.png" alt />
        </div>
        <div>
          <img src="../../assets/images/friend2.png" alt />
        </div>
        <div>
          <img src="../../assets/images/friend3.png" alt />
        </div>
        <div>
          <img src="../../assets/images/friend4.png" alt />
        </div>
      </div>
    </div>
    <!-- 二维码 -->
    <div class="aside-type" v-if="$route.path==='/'">
      <div class="title">客户端二维码</div>
      <div class="desc">
        <div class="rcode">
          <img src="../../assets/images/rcode.jpg" alt />
        </div>
        <div class="center">客户端源码地址</div>
      </div>
    </div>
  </div>
</template>

<script>
import about from "./aside/About-auth"
export default {
  data() {
    return {
      pattern: true
    };
  },
  components: {
    about
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
  
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
.aside-type {
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .title {
    background: rgb(228, 228, 228);
    height: 20px;
    font-size: 14px;
    padding: 10px;
    line-height: 20px;
  }
  img {
    width: 150px;
  }
  .desc {
    padding: 10px;
    background: white;
    div {
      margin-bottom: 10px;
    }
    .rcode {
      width: 150px;
      margin: 0 auto;
    }
    .center {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>