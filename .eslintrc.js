module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    },
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // //vue
    // 'vue/no-dupe-keys': 2,
    // // 禁止出现语法错误
    // 'vue/no-parsing-error': 2,
    // // 禁止覆盖保留字
    // // 'vue/no-reservered-keys': 2,
    // // 组件的 data 属性的值必须是一个函数
    // // @off 没必要限制
    // 'vue/no-shared-component-data': 2,
    // // 可以让 <template> 使用 key 属性
    // 'vue/no-template-key': 'off',
    // // render 函数必须有返回值
    // 'vue/require-render-return': 2,
    // // prop 的默认值必须匹配它的类型
    // 'vue/require-valid-default-prop': 2,
    // // 计算属性必须有返回值
    // 'vue/return-in-computed-property': 2,
    // // template 的根节点必须合法
    // 'vue/valid-template-root': 2,
    // // v-bind 指令必须合法
    // 'vue/valid-v-bind': 2,
    // // v-cloak 指令必须合法
    // 'vue/valid-v-cloak': 2,
    // // v-else-if 指令必须合法
    // 'vue/valid-v-else-if': 2,
    // // v-else 指令必须合法
    // 'vue/valid-v-else': 2,
    // // v-for 指令必须合法
    // 'vue/valid-v-for': 2,
    // // v-html 指令必须合法
    // 'vue/valid-v-html': 2,
    // // v-if 指令必须合法
    // 'vue/valid-v-if': 2,
    // // v-model 指令必须合法
    // 'vue/valid-v-model': 2,
    // // v-on 指令必须合法
    // 'vue/valid-v-on': 2,
    // // v-once 指令必须合法
    // 'vue/valid-v-once': 2,
    // // v-pre 指令必须合法
    // 'vue/valid-v-pre': 2,
    // // v-show 指令必须合法
    // 'vue/valid-v-show': 2,
    // // v-text 指令必须合法
    // 'vue/valid-v-text': 2,

    // 'vue/html-end-tags': 'off',
    // // 计算属性禁止包含异步方法
    // 'vue/no-async-in-computed-properties': 2,
    // // 禁止出现难以理解的 v-if 和 v-for
    // 'vue/no-confusing-v-for-v-if': 2,
    // // 禁止出现重复的属性
    // 'vue/no-duplicate-attributes': 2,
    // // 禁止在计算属性中对属性修改, 是具体情况而定，有时候可能会用到，列为warn；
    // 'vue/no-side-effects-in-computed-properties': 1,
    // // 禁止在 <textarea> 中出现 {{message}}
    // 'vue/no-textarea-mustache': 2,
    // 'vue/order-in-components': 0,
    "vue/html-self-closing": 0,
    // 组件的属性必须为一定的顺序
    'vue/order-in-components': ['off', {
      order: [
        "el",
        ["name", "parent"],
        "functional",
        "delimiters",
        ["components", "directives", "filters"],
        ["extends", "mixins"],
        ["model", "props", "propsData"],
        ["data", "computed"],
        ["watch", "LIFECYCLE_HOOKS"],
        "methods",
        ["template", "render", "renderError"],
      ]
    }],
    "vue/attributes-order": 1,
    // // <component> 必须有 v-bind:is
    // 'vue/require-component-is': 2,
    // // prop 必须有类型限制
    // 'vue/require-prop-types': 2,
    // // v-for 指令的元素必须有 v-bind:key
    // 'vue/require-v-for-key': 2,
    // // @fixable 限制 v-bind 的风格, 统一简写形式
    // 'vue/v-bind-style': 2,
    // // @fixable 限制 v-on 的风格，统一简写形式
    // 'vue/v-on-style': 2,
  }
}
