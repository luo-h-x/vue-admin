<template>
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
      show-icon
      style="margin-top: 20px"
      title="username:  admin password: any"
      type="info">
  </el-alert>
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
                duration: 1000
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
  height: 300px;
  border: 1px solid #ebeef5;
  border-radius: 20px;
  box-shadow: 0 0 20px #ebeef5;
}
/* .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  } */
</style>
