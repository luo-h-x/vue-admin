<template>
  <div class="page-button">
    <h2>Button 按钮</h2>
    <p>常用的操作按钮</p>
    <h3>基础用法</h3>
    <p>基础的按钮用法</p>
    <div class="el-row" v-for="(v1, i1) in isStatus" :key="i1">
      <button type="button"
        v-for="(v, i) in list"
        :key="i"
        :class="['el-button', `el-button--${v.className}`, v1 ]">
        <span v-if="i1<3">{{v.title}}</span>
        <i v-else :class="v.icon"></i>
      </button>
    </div>
    <div class="description">
      <div>
        <p>使用
          <code>type</code>、
          <code>plain</code>、
          <code>round</code>和
          <code>circle</code>属性来定义 Button 的样式。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="hljs">
          <span class="hljs-tag">&lt;<span >el-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"info"</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span >el-row</span>&gt;</span>

          <span class="hljs-tag">&lt;<span >el-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >plain</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"primary"</span> <span >plain</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"success"</span> <span >plain</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"info"</span> <span >plain</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"warning"</span> <span >plain</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"danger"</span> <span >plain</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span >el-row</span>&gt;</span>

          <span class="hljs-tag">&lt;<span >el-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >round</span>&gt;</span>圆角按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"primary"</span> <span >round</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"success"</span> <span >round</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"info"</span> <span >round</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"warning"</span> <span >round</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"danger"</span> <span >round</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span >el-row</span>&gt;</span>

          <span class="hljs-tag">&lt;<span >el-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >icon</span>=<span class="hljs-type">"el-icon-search"</span> <span >circle</span>&gt;</span><span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"primary"</span> <span >icon</span>=<span class="hljs-type">"el-icon-edit"</span> <span >circle</span>&gt;</span><span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"success"</span> <span >icon</span>=<span class="hljs-type">"el-icon-check"</span> <span >circle</span>&gt;</span><span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"info"</span> <span >icon</span>=<span class="hljs-type">"el-icon-message"</span> <span >circle</span>&gt;</span><span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"warning"</span> <span >icon</span>=<span class="hljs-type">"el-icon-star-off"</span> <span >circle</span>&gt;</span><span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span >el-button</span> <span >type</span>=<span class="hljs-type">"danger"</span> <span >icon</span>=<span class="hljs-type" >"el-icon-delete"</span> <span >circle</span>&gt;</span><span class="hljs-tag">&lt;/<span >el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span >el-row</span>&gt;</span>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { className: '', title: '默认按钮', icon: 'el-icon-search' },
        { className: 'primary', title: '主要按钮', icon: 'el-icon-edit' },
        { className: 'success', title: '成功按钮', icon: 'el-icon-check' },
        { className: 'info', title: '信息按钮', icon: 'el-icon-message' },
        { className: 'warning', title: '警告按钮', icon: 'el-icon-star-off' },
        { className: 'danger', title: '危险按钮', icon: 'el-icon-delete' }
      ],
      isStatus: ['', 'is-plain', 'is-round', 'is-circle']
    }
  }
}
</script>

<style scoped>
.page-button {
  padding: 0 100px 100px 300px;
}
.page-button h3 {
  margin: 55px 0 20px;
}
.el-row {
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
.description {
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: #fff;
}
pre {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0px;
    color: black;
}
.highlight{
  background-color: #fafafa;
}
.hljs {
  line-height: 2;
  font-size: 12px;
}
.hljs-tag{
  color: #3182bd;
}
.hljs-type {
  color: #756bb1
}
code {
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
}
</style>
