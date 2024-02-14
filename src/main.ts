import { createApp } from 'vue'
// 默认文件引入注释
// import './style.css'
// import App from './App.vue'

// 增加改动的文件
import 'normalize.css/normalize.css'
import Index from './Index.vue'

createApp(Index).mount('#app')
