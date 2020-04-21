<template>
  <div class="page-form">
    <h2>Form表单</h2>
    <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
    <h3>典型表单</h3>
    <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="description">
      <div>
        <p>Form 组件提供了表单验证的功能，只需要通过
          <code>rules</code> 属性传入约定的验证规则，并将 Form-Item 的
          <code>prop</code> 属性设置为需校验的字段名即可。校验规则参见
            <a href="https://github.com/yiminghe/async-validator">async-validator</a>
        </p>
      </div>
    </div>
    <div class="highlight">
      <pre>
        <code class="hljs">
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span class="hljs-type">"ruleForm"</span> <span class="hljs-attr">:rules</span>=<span class="hljs-type">"rules"</span> <span class="hljs-attr">ref</span>=<span class="hljs-type">"ruleForm"</span> <span class="hljs-attr">label-width</span>=<span class="hljs-type">"100px"</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"demo-ruleForm"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"活动名称"</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"name"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"活动区域"</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"region"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-type">"请选择活动区域"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"区域一"</span> <span class="hljs-attr">value</span>=<span class="hljs-type">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"区域二"</span> <span class="hljs-attr">value</span>=<span class="hljs-type">"beijing"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"活动时间"</span> <span class="hljs-attr">required</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-type">"11"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"date1"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-type">"date"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-type">"选择日期"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.date1"</span> <span class="hljs-attr">style</span>=<span class="hljs-type">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">class</span>=<span class="hljs-type">"line"</span> <span class="hljs-attr">:span</span>=<span class="hljs-type">"2"</span>&gt;</span>-<span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-type">"11"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"date2"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-type">"选择时间"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.date2"</span> <span class="hljs-attr">style</span>=<span class="hljs-type">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"即时配送"</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"delivery"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.delivery"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"活动性质"</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"type"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.type"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"美食/餐厅线上活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-type">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"地推活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-type">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"线下主题活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-type">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"单纯品牌曝光"</span> <span class="hljs-attr">name</span>=<span class="hljs-type">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"特殊资源"</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"resource"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.resource"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"线上品牌商赞助"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"线下场地免费"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-type">"活动形式"</span> <span class="hljs-attr">prop</span>=<span class="hljs-type">"desc"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span class="hljs-type">"textarea"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-type">"ruleForm.desc"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-type">"primary"</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"submitForm('ruleForm')"</span>&gt;</span>立即创建<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-type">"resetForm('ruleForm')"</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
              data() {
                <span class="hljs-keyword">return</span> {
                  <span class="hljs-attr">ruleForm</span>: {
                  <span class="hljs-attr">name</span>: <span class="hljs-type">''</span>,
                  <span class="hljs-attr">region</span>: <span class="hljs-type">''</span>,
                  <span class="hljs-attr">date1</span>: <span class="hljs-type">''</span>,
                  <span class="hljs-attr">date2</span>: <span class="hljs-type">''</span>,
                  <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
                  <span class="hljs-attr">type</span>: [],
                  <span class="hljs-attr">resource</span>: <span class="hljs-type">''</span>,
                  <span class="hljs-attr">desc</span>: <span class="hljs-type">''</span>
              },
                  <span class="hljs-attr">rules</span>: {
                    <span class="hljs-attr">name</span>: [
                      { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请输入活动名称'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'blur'</span> },
                      { <span class="hljs-attr">min</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">max</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'长度在 3 到 5 个字符'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'blur'</span> }
                  ],
                  <span class="hljs-attr">region</span>: [
                    { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请选择活动区域'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'change'</span> }
                  ],
                  <span class="hljs-attr">date1</span>: [
                    { <span class="hljs-attr">type</span>: <span class="hljs-type">'date'</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请选择日期'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'change'</span> }
                  ],
                  <span class="hljs-attr">date2</span>: [
                    { <span class="hljs-attr">type</span>: <span class="hljs-type">'date'</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请选择时间'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'change'</span> }
                  ],
                  <span class="hljs-attr">type</span>: [
                    { <span class="hljs-attr">type</span>: <span class="hljs-type">'array'</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请至少选择一个活动性质'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'change'</span> }
                  ],
                  <span class="hljs-attr">resource</span>: [
                    { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请选择活动资源'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'change'</span> }
                  ],
                  <span class="hljs-attr">desc</span>: [
                    { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-type">'请填写活动形式'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-type">'blur'</span> }
                  ]
                }
              };
            },
            <span class="hljs-attr">methods</span>: {
              submitForm(formName) {
                <span class="hljs-keyword">this</span>.$refs[formName].validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
                  <span class="hljs-keyword">if</span> (valid) {
                  alert(<span class="hljs-type">'submit!'</span>);
                } <span class="hljs-keyword">else</span> {
                  <span class="hljs-built_in">console</span>.log(<span class="hljs-type">'error submit!!'</span>);
                  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
                  }
                });
              },
              resetForm(formName) {
                <span class="hljs-keyword">this</span>.$refs[formName].resetFields();
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
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.page-form {
  padding: 0 100px 100px 300px;
}
.page-form h3 {
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
