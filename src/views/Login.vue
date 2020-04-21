<template>
<div style="overflow: hidden;">
  <div class="container">
    <h3>欢迎登录</h3>
    <el-form ref="form" label-width="80px" :model="form">
      <el-form-item
        label="用户名"
        prop="name"
        :rules="{ required: true, message: '请输入用户名', trigger: 'blur' }"
      >
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="{ required: true, message: '密码不能为空', trigger: 'blur' }"
      >
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span> -->
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
    </el-form>
    <el-alert
      title="用户名: admin 密码: any"
      type="info"
      close-text="知道了">
    </el-alert>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: 'admin',
        password: ''
      },
      passwordType: 'password'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        // var vm = this
        if (valid) {
          this.axios({
            method: 'post',
            url: '/api/login',
            data: {
              name: this.form.name,
              password: this.form.password
            }
          }).then(res => {
            // console.log(res.data.message)
            if (res.data.status === 200) {
              this.$message({
                message: res.data.message,
                type: 'success',
                duration: 600
              })
              this.$router.push('/Home')
            } else {
              this.$message({
                message: '用户名或密码错误！！ ',
                type: 'error',
                duration: 1000
              })
            }
          })
        } else {
          this.$message({
            message: '用户名或密码错误！！ ',
            type: 'error',
            duration: 1000
          })
        }
      })
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 150px auto 0;
  padding: 20px;
  width: 500px;
  height: 320px;
  border: 1px solid #ebeef5;
  border-radius: 20px;
  box-shadow: 0 0 20px #ebeef5;
}
h3 {
  text-align: center;
}
.el-button {
  width: calc(100% - 80px);
  margin: 0 80px 20px 80px;
}
</style>
