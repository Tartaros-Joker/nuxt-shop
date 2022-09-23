<template>
  <div class="container">
  <el-header class="bg-gray-700 text-white flex items-center p-0 m-0 fixed" >
    <span class="text-xl">后台管理系统</span>
    <el-button type="danger" class="absolute right-3.5 h-10 w-16 ">退出</el-button>
  </el-header>
  <el-container>
    <el-aside :width="isCollapse ? '65px': '200px'">
    <el-menu    
    :collapse="isCollapse"
    :collapse-transition="false"
    :router="true">
      <div class="text-center font-mono" @click="toogle">|||</div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">商品管理</span>
        </template>
          <el-menu-item index="/splist">商品列表</el-menu-item>
          <el-menu-item index="/spmanagement">商品管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
          </template>
            <el-menu-item index="/ordermanagement">订单查询</el-menu-item>
          </el-submenu>
    </el-menu>
  </el-aside>
    <!-- 主要内容 -->
    <el-main>
    <nuxt-child></nuxt-child>
      </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData({ redirect }) {
    redirect('/splist')
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    // 缩放按钮
    toogle () {
      this.isCollapse = !this.isCollapse
      }
  },}
</script>
<style  lang="less" scoped>
html,body,#__nuxt,#__layout{
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-header{
top: 0;
right: 0;
left:0;
width: 100%;
}
.el-button{
    padding:12px 18px
  }
 .container{
  height: 100%;
  max-width: 100%
}
.custom-page,
.el-container,
.el-aside,
.el-menu {
  height: 100%;
}
.el-container{
  padding-top: 60px;
}
</style>
