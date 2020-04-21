<template>
  <div class="page-info">
    <h2>Message 消息提示</h2>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <h3>基础用法</h3>
    <p>从顶部出现，3 秒后自动消失。</p>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <div class="description">
      <div>
        <p>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个
          <code>$message</code>方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="html hljs xml">
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-type">"true"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"open"</span>&gt;</span>打开消息提示<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-type">"true"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"openVn"</span>&gt;</span>VNode<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              <span class="hljs-attr">methods</span>: {
                open() {
                  <span class="hljs-keyword">this</span>.$message(<span class="hljs-type">'这是一条消息提示'</span>);
                },

                openVn() {
                  <span class="hljs-keyword">const</span> h = <span class="hljs-keyword">this</span>.$createElement;
                  <span class="hljs-keyword">this</span>.$message({
                    <span class="hljs-attr">message</span>: h(<span class="hljs-type">'p'</span>, <span class="hljs-literal">null</span>, [
                      h(<span class="hljs-type">'span'</span>, <span class="hljs-literal">null</span>, <span class="hljs-type">'内容可以是 '</span>),
                      h(<span class="hljs-type">'i'</span>, { <span class="hljs-attr">style</span>: <span class="hljs-type">'color: teal'</span> }, <span class="hljs-type">'VNode'</span>)
                    ])
                  });
                }
              }
            }
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
        </code>
      </pre>
    </div>
    <h3>不同状态</h3>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
    <div class="description">
      <div>
        <p>当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置
          <code>type</code>字段可以定义不同的状态，默认为<code>info</code>。此时正文内容以
          <code>message</code>的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入
          <code>type</code>字段的情况下像<code>open4</code>那样直接调用。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="html hljs xml">
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-type">"true"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"open2"</span>&gt;</span>成功<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-type">"true"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"open3"</span>&gt;</span>警告<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-type">"true"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"open1"</span>&gt;</span>消息<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-type">"true"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"open4"</span>&gt;</span>错误<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              <span class="hljs-attr">methods</span>: {
                open1() {
                  <span class="hljs-keyword">this</span>.$message(<span class="hljs-type">'这是一条消息提示'</span>);
                },
                open2() {
                  <span class="hljs-keyword">this</span>.$message({
                    <span class="hljs-attr">message</span>: <span class="hljs-type">'恭喜你，这是一条成功消息'</span>,
                    <span class="hljs-attr">type</span>: <span class="hljs-type">'success'</span>
                  });
                },

                open3() {
                  <span class="hljs-keyword">this</span>.$message({
                    <span class="hljs-attr">message</span>: <span class="hljs-type">'警告哦，这是一条警告消息'</span>,
                    <span class="hljs-attr">type</span>: <span class="hljs-type">'warning'</span>
                  });
                },

                open4() {
                  <span class="hljs-keyword">this</span>.$message.error(<span class="hljs-type">'错了哦，这是一条错误消息'</span>);
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
      this.$message('这是一条消息提示')
    },

    openVn () {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      })
    },

    open1 () {
      this.$message('这是一条消息提示')
    },

    open2 () {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },

    open3 () {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },

    open4 () {
      this.$message.error('错了哦，这是一条错误消息')
    }
  }
}
</script>

<style scoped>
.page-info {
  padding: 0 100px 100px 300px;
}
.page-info h3 {
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
