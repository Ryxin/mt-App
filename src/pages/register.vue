<template>
  <!-- 注册页面 -->
  <div class="page-register">
    <div class="header">
      <header>
        <router-link :to="{name: 'index'}" class="site-logo">美团</router-link>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>

    <div class="content">
      <el-form
        :model="regisiterForm"
        status-icon
        :rules="rules"
        ref="regisiterForm"
        label-width="100px"
        class="demo-regisiterForm"
      >
        <el-form-item label="手机号" prop="userName">
          <el-input type="text" v-model="regisiterForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="短信动态码" prop="num">
          <el-input v-model.number="regisiterForm.num"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="regisiterForm.password"
            autocomplete="off"
            @input="input"
          ></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar' , strengthClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="regisiterForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="submit" @click="submitForm('regisiterForm')" class="btnSubmit">同意以下协议并注册</el-button>
        </el-form-item>
        <p class="status">
          <span>《美团点评用户服务协议》</span>
          <span>《美团点评隐私政策》</span>
        </p>
      </el-form>
    </div>
    <footer>©meituan.com 京ICP证070791号 京公网安备11010502025545号</footer>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.regisiterForm.rePassword !== "") {
          this.$refs.regisiterForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regisiterForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regisiterForm: {
        userName: "",
        password: "",
        rePassword: "",
        // 短信动态码
        num: "",
        // 动态添加密码强度class 
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
        console.log(this.regisiterForm.password);
        console.log(this.strengthClass)

        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.getregisiter({
                params:{
                    userName : this.regisiterForm.userName,
                    password : this.regisiterForm.password,
                    rePassword : this.regisiterForm.rePassword
                }
            }).then(res =>{
                if(res.data.status == 'success'){
                    this.$router.push({name : 'login'});
                }else{
                    alert(res.data.msg);
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    input() {
       
      if (this.regisiterForm.password.length > 12) {
        this.strengthClass = "strong";
      } else if (this.regisiterForm.password.length >= 8) {
        this.strengthClass = "normal";
      }else if (this.regisiterForm.password.length >= 2) {
        this.strengthClass = "week";
      }else if(!this.regisiterForm.password.length){
           this.strengthClass = "";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>