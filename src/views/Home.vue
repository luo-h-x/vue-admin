<template>
  <div style="height: 100%; overflow: hidden">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>GitHub</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-breadcrumb>
    <el-scrollbar>
      <div class="main-show">
        <div class="nav_ui">
          <ul>
            <li v-for="(v, i) in list" :key="i"><router-link :to="v.path">{{v.name}}</router-link></li>
          </ul>
        </div>
        <router-view/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: 'Button按钮', path: '/Button' },
        { name: 'Form表单', path: '/Form' },
        { name: 'Loading加载', path: '/Loading' },
        { name: '消息提示', path: '/Info' },
        { name: '走马灯', path: '/Carousel' },
        { name: '弹窗提示', path: '/ToolTip' },
        { name: '日历', path: '/Calendar' },
        { name: 'icon图标', path: 'Icon' }
      ]
    }
  }
}
</script>

<style scoped>
.el-submenu {
  background-color: rgb(95, 217, 205);
}
.el-container {
  height: 100%;
}
.el-breadcrumb {
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  padding: 0 50px;
  background: #FFDDDE;
}
.el-dropdown {
  float: right;
}
.el-menu {
  width: 200px;
}
.nav_ui{
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  height: 100%;
  background-color: #FFDDDE;
}
.nav_ui ul {
  padding: 0;
  margin: 0;
  overflow: hidden;
  list-style: none;
}
.nav_ui ul li {
  text-align: center;
  line-height: 40px;
}
.nav_ui ul li a {
  text-decoration:none;
  color: #444;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  display: block;
}
.nav_ui ul li a:hover, a:active {
  color: #409eff
}
.main-show{
  padding: 0;
  margin-top: 0;
  height: 100%;
  min-height: auto;
}
.el-scrollbar{
  height: calc(100% - 80px);
}
</style>
