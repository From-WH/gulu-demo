const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  });
  it('可以设置position.', (done) => {
    Vue.component('g-popover',Popover)
    const div =document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="top" ref="a">
      <template slot="content">
        <div>我是左边内容<g-button @click="close">关闭</g-button></div>
      </template>
      <button>点击左边弹出</button>
    </g-popover>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-top')).to.be.true
        done()
      })
    })
  });
});