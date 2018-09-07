const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  });
  it('可以接受value', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        value: '1234'
      }
    }).$mount();
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.value).to.equal('1234');
    vm.$destroy()
  });
  it('接受disabled', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    }).$mount();
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.disabled).to.equal(true);
    vm.$destroy()
  });
  it('接受readonly', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        readonly: true,
      }
    }).$mount();
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.readOnly).to.equal(true);
    vm.$destroy()
  });
  it('接受error', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        error: '你错啦',
      }
    }).$mount();
    const useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
    const errorMessage = vm.$el.querySelector('.errorMessage')
    expect(errorMessage.innerText).to.equal('你错啦');
    vm.$destroy()
  });

});
describe('事件', () => {
  it('change事件', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({}).$mount();
    const callback = sinon.fake();
    vm.$on('change', callback)
    //触发input,change事件
    let event = new Event('change')
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(event);
    expect(callback).to.have.been.called
    vm.$destroy()
  });
  it('input', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({}).$mount();
    const callback = sinon.fake();
    vm.$on('input', callback)
    //触发input,change事件
    let event = new Event('input')
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(event);
    expect(callback).to.have.been.called
    vm.$destroy()
  });
  it('focus', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({}).$mount();
    const callback = sinon.fake();
    vm.$on('focus', callback)
    //触发input,change事件
    let event = new Event('focus')
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(event);
    expect(callback).to.have.been.called
    vm.$destroy()
  });
  it('blur', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({}).$mount();
    const callback = sinon.fake();
    vm.$on('blur', callback)
    //触发input,change事件
    let event = new Event('blur')
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(event);
    expect(callback).to.have.been.called
    vm.$destroy()
  });
})

// 这几行可以替换上面的事件监测
// describe('事件', () => {
//   it('change/input/focus/blur事件', () => {
//     ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
//       const Constructor = Vue.extend(Input);
//       const vm = new Constructor({}).$mount();
//       const callback = sinon.fake();
//       vm.$on(eventName, callback)
//       //触发input,change事件
//       let event = new Event(eventName)
//       const inputElement = vm.$el.querySelector('input');
//       inputElement.dispatchEvent(event);
//       expect(callback).to.have.been.called
//       vm.$destroy()
//     });
//   })