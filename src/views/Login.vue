<template>
<div style="overflow: hidden;">
  <div class="container" @mouseenter="spani" @mouseleave="spanl">
    <h3>欢迎登录</h3>
    <el-form ref="form" label-width="80px" :model="form" >
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
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
    </el-form>
    <el-alert
      title="用户名: admin 密码: any"
      type="info"
      close-text="知道了">
    </el-alert>
    <span :class="{'in': isIn, 'out': isOut}" ref="animate"></span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: 'admin',
        password: '123'
      },
      passwordType: 'password',
      isOut: true,
      isIn: false,
      inx: '',
      iny: ''
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
    },
    spani (e) {
      if (this.isOut) { // 如果进去的门时打开的，就可以执行这个函数
        // 获取进入的鼠标位置
        // 生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
        this.inx = e.clientX - e.target.offsetLeft
        this.iny = e.clientY - e.target.offsetTop

        // 创建一个span元素，并且给它对应的出生坐标
        const el = this.$refs.animate
        el.style.left = this.inx + 'px'
        el.style.top = this.iny + 'px'

        this.isIn = true // 关闭进来的门（不能使用进入的方法）
        this.isOut = false // 打开出去的门（可以使用出去的方法）
      }
    },
    spanl (e) {
      if (this.isIn) {
        this.inx = e.clientX - e.target.offsetLeft
        this.iny = e.clientY - e.target.offsetTop

        const el = this.$refs.animate
        el.style.left = this.inx + 'px'
        el.style.top = this.iny + 'px'

        this.isOut = true
        this.isIn = false
      }
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
  position: relative;
  overflow: hidden;
}
h3 {
  text-align: center;
}
.el-button {
  width: calc(100% - 80px);
  margin: 0 80px 20px 80px;
}
/* 设置鼠标进入的样式 */
.container .in{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: #ededed;
    transform: translate(-50%,-50%);
    /* 使用in动画，持续0.5s,缓出的时间函数，停留在最后一帧 */
    animation: in 0.5s ease-out forwards;
    z-index:-1;
}
/* 设置鼠标离开的样式 */
.container .out{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1300px;
    height: 1300px;
    border-radius: 50%;
    background: #ededed;
    transform: translate(-50%,-50%);
    animation: out 0.5s ease-out forwards;
    z-index:-1;
}
/* 设置鼠标进入时，元素的动画 */
@keyframes in{
    /* 初始关键帧 */
    0%{
        width: 0;
        height: 0;
    }
    /* 结尾关键帧 */
    100%{
        width: 1300px;
        height: 1300px;
    }
}
/* 设置鼠标离开时，元素的动画 */
@keyframes out{
    /* 初始关键帧 */
    0%{
        width: 1300px;
        height: 1300px;
    }
    /* 结尾关键帧 */
    100%{
        width: 0;
        height: 0;
    }
}
</style>
