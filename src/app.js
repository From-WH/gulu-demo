import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading1: false,
    loading2: false,
  }
});


//单元测试  就是放入一个输入，得到一个输出
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);

const expect = chai.expect;
//测试setting
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon :'setting'
    }
  });
  vm.$mount('#test')
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
//测试loading
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon :'setting',
      loading:true
    }
  });
  vm.$mount()
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
//测试order
{
  let div = document.createElement('div');
  document.body.appendChild(div);

  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon :'setting',
    }
  });
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg');
  let order = window.getComputedStyle(svg).order
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon :'setting',
    }
  });
  vm.$mount()
  let spy = chai.spy(function(){})

  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  console.log(button);
  expect(spy).to.have.been.called()
}