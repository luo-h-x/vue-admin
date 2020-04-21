<template>
  <div class="page-tip">
    <h2>MessageBox 弹框</h2>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容</p>
    <h3>消息提示</h3>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <el-button type="text" @click="open" plain>点击打开 Message Box</el-button>
    <div class="description">
      <div>
        <p>调用
          <code>$alert</code>方法即可打开消息提示，它模拟了系统的
          <code>alert</code>，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，
          <code>message</code>和
          <code>title</code>。值得一提的是，窗口被关闭后，它默认会返回一个
          <code>Promise</code>对象便于进行后续操作的处理。若不确定浏览器是否支持
          <code>Promise</code>，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="html hljs xml">
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"open"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              <span class="hljs-attr">methods</span>: {
                open() {
                  <span class="hljs-keyword">this</span>.$alert(<span class="hljs-string">'这是一段内容'</span>, <span class="hljs-string">'标题名称'</span>, {
                    <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
                    <span class="hljs-attr">callback</span>: <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> {
                      <span class="hljs-keyword">this</span>.$message({
                        <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                        <span class="hljs-attr">message</span>: <span class="hljs-string">`action: <span class="hljs-subst">${ action }</span>`</span>
                      });
                    }
                  });
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
  methods: {
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.page-tip {
  padding: 0 100px 100px 300px;
}
.page-tip h3 {
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
