module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "no-alert": 0,
    "no-console": 0,
    semi: [2, "always"],
    "array-bracket-spacing": [2, "always"],
    "no-unused-vars": [2, { vars: "all", args: "none" }], //不能有声明后未被使用的变量或参数
    "no-use-before-define": 0 //未定义前不能使用
  }
};
