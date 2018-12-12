<template>
  <div class="app-contener">
    <!--顶部header区域-->
    <mt-header fixed title="Vue练习2018.12.11"></mt-header>
    <!--中部router-view区域-->
    <transition >
      <router-view></router-view>
    </transition>


    <!--底部tabber区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="menu">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>


</template>

<script>

</script>

<style>
  .v-enter,
  .v-leave-to{
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.4s;
  }


.app-contener{
  margin-top: 40px;
  overflow-x: hidden;
}

</style>
