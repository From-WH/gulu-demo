import Toast from './toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOption) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({Vue, message, propsData:toastOption})
    }
  }
}

function createToast({Vue, message, propsData}) {
  var constructor = Vue.extend(Toast)
  let toast = new constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  console.log(message);
  document.body.appendChild(toast.$el)
  return toast
}