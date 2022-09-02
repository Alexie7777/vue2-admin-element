<template>
  <div class="login-box">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="demo-ruleForm"
    >
      <h2 class="p-5 font-bold text-xl">后台管理系统</h2>
      <div class="flex flex-col justify-center">
        <el-form-item label="帐号: " prop="username">
          <el-input
            class="w-80"
            v-model="ruleForm.username"
            type="text"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item label="密码: " prop="password">
          <el-input
            class="w-80"
            v-model="ruleForm.password"
            type="password"
            @keyup.enter.native="submitForm('ruleForm')"
            autocomplete="off"
          />
        </el-form-item>
      </div>
      <div class="flex justify-center">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </div>
    </el-form>
    <a
      href="https://github.com/Alexie7777/shopping-system-Vue3TS"
      class="github-corner"
      aria-label="View source on GitHub"
      ><svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style="
          fill: #fff;
          color: #151513;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        "
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path></svg
    ></a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginView extends Vue {
  ruleForm = {
    password: "",
    username: "",
  };

  rules = {
    username: [
      { required: true, message: "请输入帐号", trigger: "blur" },
      { min: 3, max: 10, message: "帐号长度必须在3到10之间", trigger: "blur" },
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 3, max: 10, message: "密码长度必须在3到10之间", trigger: "blur" },
    ],
  };

  submitForm = (formName) => {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        this.$http.post("/api/permission", this.ruleForm).then((res) => {
          if (res.data.code === 200) {
            this.$store.commit("updateMenu", res.data.menu);
            this.$store.commit("setToken", res.data.token);
            this.$store.commit("addMenu", this.$router);
            this.$router.push({ name: "HomeView" });
          } else {
            this.$message.warning(res.data.message);
          }
        });
      } else {
        console.log("error submit!");
        return false;
      }
    });
  };
}
</script>

<style lang="less" scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1px;
  text-align: center;
}

.demo-ruleForm {
  width: 500px;
  margin: 200px auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
}

h2 {
  margin-bottom: 5px;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.el-alert {
  position: relative;
  bottom: 40px;
}
</style>
