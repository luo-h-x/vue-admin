<template>
  <div class="page-calendar">
    <h2>Calendar日历</h2>
    <p>显示日期</p>
    <h3>基本</h3>
    <el-calendar v-model="value">
    </el-calendar>
    <div class="description">
      <div>
        <p>设置
          <code>value</code> 来指定当前显示的月份。如果
          <code>value</code> 未指定，则显示当月。<code>value</code> 支持
          <code>v-model</code> 双向绑定。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="hljs ">
          <span class="hljs-tag">&lt;<span class="hljs-name">el-calendar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"value"</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-calendar</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              data() {
                <span class="hljs-keyword">return</span> {
                  <span class="hljs-attr">value</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
                }
              }
            }
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>
.page-calendar {
  padding: 0 100px 100px 300px;
}
.page-calendar h3 {
  margin: 55px 0 20px;
}
.highlight{
  background-color: #fafafa;
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
.hljs-literal {
  color: #31a354;
}
code {
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
}
</style>
