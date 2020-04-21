<template>
  <div class="page-Carousel">
    <h2>Carousel 走马灯</h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法。</p>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="description">
      <div>
        <p>结合使用
          <code>el-carousel</code>和
          <code>el-carousel-item</code>标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在
          <code>el-carousel-item</code>标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置
          <code>trigger</code>属性为<code>click</code>，可以达到点击触发的效果。
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="html hljs xml">
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"block"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"demonstration"</span>&gt;</span>默认 Hover 指示器触发<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">height</span>=<span class="hljs-type">"150px"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-type">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-type">"item"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"small"</span>&gt;</span>item<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"block"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"demonstration"</span>&gt;</span>Click 指示器触发<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">trigger</span>=<span class="hljs-type">"click"</span> <span class="hljs-attr">height</span>=<span class="hljs-type">"150px"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-type">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-type">"item"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"small"</span>&gt;</span>item<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
            <span class="hljs-selector-class">.el-carousel__item</span> <span class="hljs-selector-tag">h3</span> {
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#475669</span>;
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
              <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>;
              <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
            }

            <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n)</span> {
               <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#99a9bf</span>;
            }

            <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n+1)</span> {
               <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#d3dce6</span>;
            }
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page-Carousel {
  padding: 0 100px 100px 300px;
}
.page-Carousel h3 {
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
.hljs-attribute {
  color: #e6550d;
}
.hljs-selector-class {
  color: #3182BD;
}
code {
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  }
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.block {
  padding: 30px;
  border: 1px solid #ebebeb;
  text-align: center;
}
</style>
