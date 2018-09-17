import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message ,  toastOption) {
      var constructor = Vue.extend(Toast)
      let toast = new constructor({
        propsData:{
          closeButton: toastOption.closeButton
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      console.log(message);
      document.body.appendChild(toast.$el)
    }
  }
}