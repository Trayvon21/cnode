<template>
  <div>
    <div class="form">
      <div class="form-title">欢迎来到cNode社区</div>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入账号" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="passwd">
            <el-input v-model="ruleForm.passwd"></el-input>
          </el-form-item>
          <el-form-item label="请确认密码" prop="repasswd">
            <el-input v-model="ruleForm.repasswd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
            <el-button type="warning" @click="cancel('ruleForm')">重置</el-button>
            <el-button @click="goto('/')">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var flag = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        passwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        passwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        repasswd: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { validator: flag, trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    login(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel(ruleForm) {
      this.$refs[ruleForm].resetFields();
    },
    goto(path){
      this.$router.push(path)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.form {
  width: 600px;
  margin: 50px auto;
  text-align: center;
  background: white;
  .form-title {
    font-size: 24px;
    width: 600px;
    line-height: 30px;
    height: 30px;
    padding: 20px 0;
    border-bottom: 1px solid lightgray;
  }
  .demo-ruleForm {
    margin-top: 20px;
    padding: 0 120px 20px 10px;
  }
}
</style>