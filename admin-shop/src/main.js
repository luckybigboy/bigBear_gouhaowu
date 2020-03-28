import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './mock/mockServer';
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Input, Avatar, Icon, Rate, Form, FormItem, Message, MessageBox } from 'element-ui';
import loading from '../static/images/loading.gif';
import './filters/index';
// import element from './element/index';
// Vue.use(element);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Avatar.name, Avatar);
Vue.component(Icon.name, Icon);
Vue.component(Rate.name, Rate);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Message.install = (Vue) => {
  Vue.prototype.$message = Message;
}
MessageBox.install = (Vue) => {
  Vue.prototype.$confirm = MessageBox.confirm;
}
Vue.use(Message);
Vue.use(MessageBox);


Vue.use(VueLazyload, {
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})