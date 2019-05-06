/**
 * @author wangyongcun
 * Date: 19/4/30
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;