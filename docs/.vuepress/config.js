module.exports = {
  base:'/gulu-demo/',
  title:'车轮滚滚 UI',
  themeConfig: {
    sidebar: [
      {
        title:'入门',
        children:[
          '/install/',
          '/get-started/',
        ]
      },

      {
        title:'组件',
        children:[
          '/components/button',
          '/components/toast',
          '/components/tabs',
          '/components/layout',
          '/components/grid',
          '/components/input',
        ]
      }
    ]
  }
}