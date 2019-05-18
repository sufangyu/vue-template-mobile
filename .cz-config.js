'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     新特性或功能'},
    {value: 'fix',      name: 'fix:      修复Bug'},
    {value: 'docs',     name: 'docs:     文档的变更'},
    {value: 'style',    name: 'style:    不影响代码运行的风格更改(空白、格式、缺少分号等)'},
    {value: 'refactor', name: 'refactor: 代码重构, 注意和feat、fix区分'},
    {value: 'perf',     name: 'perf:     提高性能'},
    {value: 'test',     name: 'test:     添加测试'},
    {value: 'chore',    name: 'chore:    开发工具(构建、脚手架工具等)和库（如文档生成）的更改'},
    {value: 'revert',   name: 'revert:   代码回滚'},
    {value: 'WIP',      name: 'WIP:      进行中开发'}
  ],

  // list of Function Modules
  scopes: [
    {name: '模块1'},
    {name: '模块2'},
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '简短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },


  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100

};
