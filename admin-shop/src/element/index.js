import { Button, Input, Avatar, Icon, Rate, Form, FormItem, Message, MessageBox } from 'element-ui';
const element = {
  install: (Vue) => {
    Vue.use(Button),
      Vue.use(Input),
      Vue.use(Avatar),
      Vue.use(Icon),
      Vue.use(Rate),
      Vue.use(Form),
      Vue.use(FormItem),
      Vue.use(Message),
      Vue.use(MessageBox)
  }
};

export default element;