import SVG from 'svg.js'
import SVGPath from '@/packages/svg.path.js'

// import MainSvg from '@/plugins/base/MainSvg'
// import BaseLine from '@/plugins/line/BaseLine'

export default {
  install: function (Vue) {
    SVGPath()
    Object.defineProperty(Vue.prototype, '$svg', { value: SVG })

    // Vue.component(MainSvg.name, MainSvg)
    // Vue.component(BaseLine.name, BaseLine)
    // Vue.mixin({
    //   mounted () {
    //     console.log(this.$svgMain)
    //   }
    // })
  }
}
