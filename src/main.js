import Vue from "vue";
import App from "./App";
import router from "./router/index.js";
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root='http://vue.studyit.io';


import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "../mui/mui-master/dist/css/mui.css";
import '../mui/mui-master/examples/hello-mui/css/icons-extra.css'
Vue.use(MintUI);
Vue.config.productionTip = false;
/*日期格式过滤方法 需要安装cnpm i moment -S*/
import moment from 'moment'
Vue.filter('dataFormat',function (dataStr,pattern='YYY-MM-DD hh:mm:ss') {
return moment(dataStr).format(pattern)
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
