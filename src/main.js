

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/scss/style.scss";
//import jQuery from 'jQuery'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
//------

global.VueCookies = require('vue-cookies')


let crApp =  createApp(App) ;


crApp.use(store).use(router).mount('#app')


