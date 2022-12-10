import { createApp } from 'vue'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

import hyRequest from './service'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// registerApp(app)
app.use(registerApp)

setupStore()

app.use(store).use(router).mount('#app')

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config) => {
//       // console.log('单独请求的config')
//       config.headers['token'] = '123'
//       return config
//     },
//     responseInterceptor: (res) => {
//       // console.log('单独响应的response')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     // console.log(res.data)
//     // console.log(res.returnCode)
//     // console.log(res.success)
//   })
