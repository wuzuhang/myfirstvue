import Vue from "vue";
import App from "./App";
import router from "./router/index.js";
import VueResource from 'vue-resource'
Vue.use(VueResource);

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "../mui/mui-master/dist/css/mui.css";
import '../mui/mui-master/examples/hello-mui/css/icons-extra.css'

Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
