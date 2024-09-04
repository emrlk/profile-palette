import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ScalingSquaresSpinner } from 'epic-spinners'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(faPalette)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('scaling-squares-spinner', ScalingSquaresSpinner)
app.use(router)
app.mount('#app')
