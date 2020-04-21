<template>
  <div class="page-icon">
    <h2>Icon 图标</h2>
    <p>提供了一套常用的图标集合。</p>
    <h3>使用方法</h3>
    <p>直接通过设置类名为 el-icon-iconName 来使用即可。例如：</p>
    <div class="source">
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="highlight" style="width: 100%;">
      <pre>
        <code class="hljs">
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-type">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-type">"el-icon-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        </code>
      </pre>
    </div>
    <h3>图标集合</h3>
    <div class="icon-list">
      <ul>
        <li v-for="(v, i) in iconList" :key="i">
            <i :class="v"></i>
            <span class="icon-name">{{v}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        'el-icon-platform-eleme',
        'el-icon-delete-solid',
        'el-icon-delete',
        'el-icon-s-tools',
        'el-icon-user-solid',
        'el-icon-phone',
        'el-icon-more',
        'el-icon-star-on',
        'el-icon-s-goods',
        'el-icon-warning',
        'el-icon-question',
        'el-icon-remove',
        'el-icon-success',
        'el-icon-zoom-in',
        'el-icon-remove-outline',
        'el-icon-circle-check']
    }
  }
}
</script>

<style scoped>
.page-icon {
  padding: 0 100px 100px 300px;
}
.page-icon h3 {
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
.source i {
  margin: 0 20px;
  font-size: 1.5em;
  vertical-align: middle;
}
.icon-list {
  list-style: none;
  padding: 0!important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  overflow: hidden;
}
.icon-list ul {
  margin: 10px 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  /* line-height: 120px; */
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
  list-style: none;
  overflow: hidden;
}
.icon-list li i {
  display: block;
  font-size: 32px;
  margin: 15px 0 15px 0;
}
.icon-name {
  display: inline-block;
  padding: 0 3px;
  line-height: normal;
}
</style>
