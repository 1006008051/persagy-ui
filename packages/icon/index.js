/**
 * @author wangyongcun
 * Date: 19/4/30
 */
import PIcon from './src/icon.vue';

PIcon.install = function (Vue) {
  Vue.component(PIcon.name, PIcon);
};

export default PIcon;