import App from './App';
import io from 'weapp.socket.io';

const socketUrl = process.env.VUE_APP_SOCKET_URL || 'http://localhost:8082';
const serverUrl = process.env.VUE_APP_SERVER_URL || 'http://localhost:3000';

// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';

Vue.config.productionTip = false;
Vue.prototype.socket = io(socketUrl);
Vue.prototype.serverUrl = serverUrl;
App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';

export function createApp() {
  const app = createSSRApp(App);
  app.provide('socket', io(socketUrl));
  app.provide('serverUrl', serverUrl);
  return {
    app
  };
}
// #endif