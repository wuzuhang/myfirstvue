<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="nth in massage" :key="nth.id">
        <router-link :to="'/menu/newinto/'+ nth.id">
          <img class="mui-media-object mui-pull-left" :src="nth.img_url">
          <div class="mui-media-body">
            {{nth.title}}
            <p class='mui-ellipsis'><span>发表时间：{{nth.add_time |dataFormat}}</span><span>点击：{{nth.click}}</span></p>
          </div>
        </router-link>
      </li>


    </ul>
  </div>
</template>
<script>
  import {Toast}from 'mint-ui'
  export default{
    data(){
      return{
        newdata:[],
        massage:[
          {id:1,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:2,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:3,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:4,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:5,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:6,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:7,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:8,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:9,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:10,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:11,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:12,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
          {id:13,title:"一季度房企阿斯蒂芬你说地方呢",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"房企一季度也就已经公布稍等给你看了功能都发给你的方式不能",click:1,img_url:'http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg'},
        ]
      }
    },
    created(){
      this.getnews()
    },
    methods:{
      getnews(){
        this.$http.get("api/getlunbo").then(function (res) {
          if (res.body.status == 0) {

            this.newdata=res.body.message

          }else {
            Toast("获取数据失败..")
          }
        })
      }
    }
  }
</script>
<style>
  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
  }
</style>
