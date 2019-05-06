/**
 * @author wangyongcun
 * Date: 19/4/30
 */
import PButton from './button/index.js';
import PIcon from './icon/index.js';
import PRow from './row/index.js'
import PCol from './col/index.js'
import PLoading from './loading/index.js'
import PNotify from './notify/index.js'

const components = [
	PRow,
	PCol,
	PButton,
	PIcon,
	PLoading
]

const install = function(Vue) {
	Vue.use(PNotify)
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  PButton,
	PIcon,
	PRow,
	PCol,
	PLoading,
	PNotify
}