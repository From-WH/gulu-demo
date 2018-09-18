const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  });
  describe('props', function () {
    it('自动关闭 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 1
        }
      }).$mount(div);
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    });
    it('自动关闭 closeButton', () => {
      const callback = sinon.fake()
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton:{
            text: '关闭我',
            callback
          }
        }
      }).$mount();
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭我')
      closeButton.click()
      expect(callback).to.have.called
    });
    it('接受enableHtml', () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
            enableHtml:true
        }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount();
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    });
    it('接受一个position', () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position:'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)

    });
  })

});