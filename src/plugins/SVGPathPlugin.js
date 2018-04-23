import SVG from 'svg.js'
import '@/packages/svg.path.js'

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$svg', { value: SVG })
  }
}
