<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <div>
    <el-card class="h-screen ">
      <el-breadcrumb separator="/" class="mb-10 mt-1 ml-3">
        <el-breadcrumb-item :to="{ path: '/' }" class="text-xl">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="text-xl"> <a href="/">订单管理</a></el-breadcrumb-item>
        <el-breadcrumb-item class="text-xl">订单查询</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>
<script>
export default {
  created() {
  },
  methods: {
    }
}
</script>
<style lang="scope">

</style>
