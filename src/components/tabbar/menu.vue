<template>
  <div>
    <!--顶部轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="picture in lunbotuList" :key="picture.id"><img :src="picture.msg"/></mt-swipe-item>
    </mt-swipe>
    <!--九宫格布局-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/menu/newsuccess">
        <img src="../../images/menu1.png"/>
        <div class="mui-media-body">新闻资讯</div>
      </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu2.png"/>
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu3.png"/>
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png"/>
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png"/>
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png"/>
        <div class="mui-media-body">联系我们</div>
      </a></li>

    </ul>


  </div>
</template>
<script>
  import {Toast} from "mint-ui";
  export default {
    data() {
      return {
        lunbotuList: [
          {id:1,msg:'http://e.hiphotos.baidu.com/image/pic/item/7acb0a46f21fbe091f06325a66600c338744ad20.jpg'},
          {id:2,msg:'http://b.hiphotos.baidu.com/image/pic/item/f7246b600c338744aa7be6315c0fd9f9d62aa0c5.jpg'},
          {id:3,msg:'http://a.hiphotos.baidu.com/image/pic/item/267f9e2f070828380fb01559b599a9014c08f13a.jpg'},
          {id:4,msg:'http://h.hiphotos.baidu.com/image/pic/item/86d6277f9e2f070827b8e34de424b899a901f23a.jpg'},
          {id:5,msg:'http://d.hiphotos.baidu.com/image/pic/item/7dd98d1001e9390152a3447376ec54e737d196de.jpg'},
        ],
      };
    },
    created() {
      this.getLunbotu();
    },
    methods: {
      getLunbotu() {

         // 获取轮播图数据的方法
         this.$http.get("api/getlunbo").then(result => {
           // console.log(result.body);
           if (result.body.status === 0) {
             // 成功了
             this.lunbotuList = result.body.message;
           } else {
             // 失败的·
             Toast("加载轮播图失败。。。");
           }
         });
      }
    }
  };
</script>
<style>
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe-item img{
    width: 100%;
    height: 100%;
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }

  img {
    width: 60px;
    height: 60px;
  }

  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
  }
</style>
