<template>
  <div class="title">
    <h3>{{newdata.title}}</h3>
    <p>
      <span>发表时间：{{newdata.addtime|dataFormat}}</span><span>点击：{{newdata.click}}</span>
    </p>
    <hr>
    <p class="text">{{newdata.content}}</p>
    <bbb :bbs="dataid"></bbb>
  </div>
</template>
<script>
  import bb from '../pinglun/bb'

  import {Toast}from'mint-ui'
  export default{
    data(){
      return {
        dataid:this.$route.params.id,
        newdata:{
          id:1,
          title:"学生穿着加拿大鹅等高端品牌羽绒服到校上课",
          click:3,
          addtime:"2015-04-16T04:05:34.000Z",
          content:"从曾经的中老年品牌，变身成为明星带货的潮牌，波司登的逆袭总结起来，或许就是“高端”二字。今年9月的纽约时装周上，邓文迪、安妮·海瑟薇夫妇、“纽约第一名媛”、鹰眼Jeremy Renner等人，出现在了波司登的纽约时装秀场，开场模特则是维密天使Alessandra·Ambrosio。\n" +
            "\n" +
            "\n" +
            "波司登还玩起了联名设计，与三位国际知名设计师的联名款，被抢购一空，成为明星潮人的心头好，从英国的“精灵王子”奥兰多，到国内的新晋流量陈立农，让波司登羽绒服在Instagram和微博上火了一把，联名款更是成了一件难求的网红羽绒服。\n" +
            "\n" +
            "\n" +
            "为了适应“网红”体质，波司登还量身打造了一套提价战略。波司登财务总监朱高峰2018/19年度中期业绩后的电话会议上表示，伴随消费升级，波司登羽绒服售价今年平均提高了20%-30%，未来波司登还将继续提价升档，将主力产品价格定位在1500-2000元，并逐步提高高端产品的占比。"
        },
      }
    },
    methods:{
      newinto(){
        this.$http.get('api/getnew/'+this.id).then(function (res) {
          if (res.body.status===0) {
            this.newdata=res.body.message[0]
          }else {
            Toast("发送失败了")
          }
        })
      }
    },
    components:{
      bbb:bb,
    }

  }
</script>
<style scoped>
  .title{
    margin: 0 4px;
  }
.title h3{
  color: #dd524d;
  font-size: 18px;
  text-align: center;
  padding-top: 4px;
}
  .title p{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .title span{
    color: #4a82d1;
  }
  .text{
    color: #333333;
    font-size: 14px;
  }
</style>
