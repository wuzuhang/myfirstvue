<template>
  <div class="content">
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入要bb的内容，最多吐槽120字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="pl" v-for="bb in getbbb" :key="bb.id">
      <div class="pl-content">
        <span>第{{bb.id}}楼&nbsp&nbsp</span>
        <span>用户：{{bb.user_name}}&nbsp&nbsp</span>
        <span>发表时间：{{bb.add_time|dataFormat('YYY-MM-DD')}}</span>
      </div>
      <div class="pl-name">
        {{bb.content}}
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="page">加载更多</mt-button>
  </div>
</template>

<script>
  import {Toast}from'mint-ui'
export default {
  data(){
    return{
      getbbb:[
        {id:1,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:2,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:3,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:4,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:5,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:6,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:7,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:8,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:9,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:10,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
      ],
      pageindex:1,
      getbbb2:[
        {id:11,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:12,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:13,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:14,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:15,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:16,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:17,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:18,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:19,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
        {id:20,user_name:"匿名用户",add_time:"2018-04-19T20:09:30.000Z",content:"我来评论一下啦"},
      ],
    }
  },
  created(){
    this.getbb()
  },

  methods:{
    getbb(){
      this.$http.get("api/getcomments/"+this.bbs+"?pageindex="+this.pageindex).then(function (res) {
        if (res.body.status===0){
          this.getbbb=res.body.message
        }else {
          Toast("信息获取失败")
        }
      })
    },
    page(){
      this.pageindex++;
      this.getbbb=this.getbbb.concat(this.getbbb2);
      console.log(this.getbbb)
    }
  },
  props:['bbs']
}
</script>
<style>
  .content h4{
    font-size: 18px;
  }
  .content textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .pl{
    margin-top: 5px;
  }
  .pl-content{
    height: 35px;
    font-size: 14px;
    background-color: #CCCCCC;
    line-height: 35px;
  }
  .pl-name{
    text-indent: 2em;
    padding-top: 10px;
  }
</style>
