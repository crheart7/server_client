// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import ES6Promise from 'es6-promise'; //

ES6Promise.polyfill(); //
Vue.config.productionTip = false

new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components: { App }
})