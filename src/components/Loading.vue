<template>
  <div class="page-loading">
    <h2>Loading 加载</h2>
    <p>加载数据时显示动效。</p>
    <h3>自定义</h3>
    <p>可自定义加载文案、图标和背景色。</p>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div class="description">
      <div>
        <p>在绑定了
          <code>v-loading</code>指令的元素上添加
          <code>element-loading-text</code>属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，
          <code>element-loading-spinner</code>和<code>element-loading-background</code>
          属性分别用来设定图标类名和背景色值。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="hljs">
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
              <span class="hljs-attr">v-loading</span>=<span class="hljs-type">"loading"</span>
              <span class="hljs-attr">element-loading-text</span>=<span class="hljs-type">"拼命加载中"</span>
              <span class="hljs-attr">element-loading-spinner</span>=<span class="hljs-type">"el-icon-loading"</span>
              <span class="hljs-attr">element-loading-background</span>=<span class="hljs-type">"rgba(0, 0, 0, 0.8)"</span>
              <span class="hljs-attr">:data</span>=<span class="hljs-type">"tableData"</span>
              <span class="hljs-attr">style</span>=<span class="hljs-type">"width: 100%"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
                <span class="hljs-attr">prop</span>=<span class="hljs-type">"date"</span>
                <span class="hljs-attr">label</span>=<span class="hljs-type">"日期"</span>
                <span class="hljs-attr">width</span>=<span class="hljs-type">"180"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
                <span class="hljs-attr">prop</span>=<span class="hljs-type">"name"</span>
                <span class="hljs-attr">label</span>=<span class="hljs-type">"姓名"</span>
                <span class="hljs-attr">width</span>=<span class="hljs-type">"180"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
                <span class="hljs-attr">prop</span>=<span class="hljs-type">"address"</span>
                <span class="hljs-attr">label</span>=<span class="hljs-type">"地址"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              data() {
                <span class="hljs-keyword">return</span> {
                  <span class="hljs-attr">tableData</span>: [{
                    <span class="hljs-attr">date</span>: <span class="hljs-type">'2016-05-03'</span>,
                    <span class="hljs-attr">name</span>: <span class="hljs-type">'王小虎'</span>,
                    <span class="hljs-attr">address</span>: <span class="hljs-type">'上海市普陀区金沙江路 1518 弄'</span>
                  }, {
                    <span class="hljs-attr">date</span>: <span class="hljs-type">'2016-05-02'</span>,
                    <span class="hljs-attr">name</span>: <span class="hljs-type">'王小虎'</span>,
                    <span class="hljs-attr">address</span>: <span class="hljs-type">'上海市普陀区金沙江路 1518 弄'</span>
                  }, {
                    <span class="hljs-attr">date</span>: <span class="hljs-type">'2016-05-04'</span>,
                    <span class="hljs-attr">name</span>: <span class="hljs-type">'王小虎'</span>,
                    <span class="hljs-attr">address</span>: <span class="hljs-type">'上海市普陀区金沙江路 1518 弄'</span>
                  }],
                  <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>
                };
              }
            };
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
        </code>
      </pre>
    </div>
    <h3>整页加载</h3>
    <p>页面数据加载时显示。</p>
    <el-button
      type="primary"
      @click="openFullScreen1"
      v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </el-button>
    <el-button
      type="primary"
      @click="openFullScreen2">
      服务方式
    </el-button>
    <div class="description">
      <div>
        <p>当使用指令方式时，全屏遮罩需要添加
          <code>fullscreen</code>修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用
          <code>lock</code>修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="html hljs xml">
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>
              @<span class="hljs-attr">click</span>=<span class="hljs-string">"openFullScreen1"</span>
              <span class="hljs-attr">v-loading.fullscreen.lock</span>=<span class="hljs-string">"fullscreenLoading"</span>&gt;</span>
              指令方式
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
              <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>
              @<span class="hljs-attr">click</span>=<span class="hljs-string">"openFullScreen2"</span>&gt;</span>
              服务方式
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              data() {
                <span class="hljs-keyword">return</span> {
                  <span class="hljs-attr">fullscreenLoading</span>: <span class="hljs-literal">false</span>
                }
              },
              <span class="hljs-attr">methods</span>: {
                openFullScreen1() {
                  <span class="hljs-keyword">this</span>.fullscreenLoading = <span class="hljs-literal">true</span>;
                  setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                    <span class="hljs-keyword">this</span>.fullscreenLoading = <span class="hljs-literal">false</span>;
                  }, <span class="hljs-number">2000</span>);
                },
                openFullScreen2() {
                  <span class="hljs-keyword">const</span> loading = <span class="hljs-keyword">this</span>.$loading({
                    <span class="hljs-attr">lock</span>: <span class="hljs-literal">true</span>,
                    <span class="hljs-attr">text</span>: <span class="hljs-string">'Loading'</span>,
                    <span class="hljs-attr">spinner</span>: <span class="hljs-string">'el-icon-loading'</span>,
                    <span class="hljs-attr">background</span>: <span class="hljs-string">'rgba(0, 0, 0, 0.7)'</span>
                  });
                  setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                    loading.close();
                  }, <span class="hljs-number">2000</span>);
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
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading: true,
      fullscreenLoading: false
    }
  },
  methods: {
    openFullScreen1 () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2 () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>

<style scoped>
.page-loading {
  padding: 0 100px 100px 300px;
}
.page-loading h3 {
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
