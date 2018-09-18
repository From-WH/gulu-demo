import Toast from './toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOption) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData:toastOption,
        onclose:()=>{
          currentToast = null
        }
      })
    }
  }
}

function createToast({Vue, message, propsData,onclose}) {
  var constructor = Vue.extend(Toast)
  let toast = new constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  console.log(message);
  toast.$on(close , onclose)
  document.body.appendChild(toast.$el)
  return toast
}