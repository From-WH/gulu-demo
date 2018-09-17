import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-content', Content);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-toast', Toast);
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading1: false,
    loading2: false,
    message: '张三'
  },
  created() {

  },
  methods: {
    showToast() {
      this.$toast('很多文字很多文字很多文多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字多文字很多文字很多文字很多文字很多文字字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字', {
        inableHtml:true
      })
    }
  }
});