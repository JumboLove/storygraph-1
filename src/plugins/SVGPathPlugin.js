import SVG from 'svg.js'
import SVGPath from '@/packages/svg.path.js'

export default {
  install: function (Vue) {
    SVGPath()
    Object.defineProperty(Vue.prototype, '$svg', { value: SVG })
  }
}
