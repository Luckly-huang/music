import 'lib-flexible/flexible.js'

import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


//导入vant ui库
//// import Vant from 'vant'
//
////全局使用vant组件
////导入vant 组件
   import { Button, Switch } from 'vant'
//
////使用Button组件 //使用Switch组件
   Vue.use(Button).use(Switch)

import { Row, Col, Icon, Toast} from 'vant'

Vue.use(Row).use(Col).use(Icon).use(Toast)

Vue.use(VueAxios, axios)

//导入路由
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
