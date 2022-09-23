<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-card>
      <el-breadcrumb separator="/" class="mb-10 mt-1 ml-3">
        <el-breadcrumb-item :to="{ path: '/' }" class="text-xl">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="text-xl"><a href="/">商品管理</a></el-breadcrumb-item>
        <el-breadcrumb-item class="text-xl">商品列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 选择器 -->
      <div class="my-8">
        <span class="mx-5">商品筛选</span>
        <el-cascader
         v-model="value"
          :options="splist"
           :props="{ value: 'id', label: 'name', expandTrigger: 'hover', checkStrictly: true }"
           clearable
           class="w-80" 
           @change="getCheckedNodesid"></el-cascader>
      </div>
      <!-- 表格 -->
      <el-table :data="spcategory" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all :tree-props="{ children: 'category', hasChildren: 'hasChildren' }" >
        <el-table-column v-slot="scope" label="商品图片" sortable align="center">
          <img :src="scope.row.image" alt="" />
        </el-table-column>
        <el-table-column prop="name" label="商品名称" sortable align="center"> </el-table-column>
        <el-table-column prop="price" label="售价" sortable align="center"> </el-table-column>
        <el-table-column prop="description" label="商品说明" align="center"> </el-table-column>
        <el-table-column
          prop=" preorderable"
          label="是否可接受预定"
          :filter-method="filterPreorderable"
          :filters="[
            { text: '是', value: 'true' },
            { text: '否', value: 'false' },
          ]"
          align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.preorderable" type="primary">是</el-tag>
            <el-tag v-else type="success">否</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="require_advance"
          label="是否需要付按金"
          :filter-method="filterAdvance"
          :filters="[
            { text: '是', value: 'true' },
            { text: '否', value: 'false' },
          ]"
          align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.require_advance" type="primary">是</el-tag>
            <el-tag v-else type="success">否</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="advance" label="预订按金" sortable align="center"> </el-table-column>
      </el-table>
      <p class="font-mono text-gray-800 align-baseline float-right mr-4 mb-4">共 {{total}} 条数据</p>
    </el-card>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/api/categories')
    // eslint-disable-next-line no-irregular-whitespace, no-template-curly-in-string
    const result = await $axios.get('/api/api/products?category=')
    return { splist: res.data, spcategory: result.data , total:result.data.length}
  },
  data() {
    return {
      splist: [],
      spcategory: [],
      data: [],
      value: '',
      params: '22',
      id: '',
      total:'',
    }
  },
  mounted() {
    this.formatData(this.splist)
  },
  methods: {
    // 表格判断
    filterAdvance(value, row) {
      if (row.require_advance) {
        return value === 'true'
      } else {
        return value === 'false'
      }
    },
    // 表格判断
    filterPreorderable(value, row) {
      if (row.preorderable) {
        return value === 'true'
      } else {
        return value === 'false'
      }
    },
    // 数据处理方法
    formatData(data) {
      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].children.length < 1) {
            data[i].children = undefined
          } else {
            this.formatData(data[i].children)
          }
        }
      }
      return data
    },
    // 筛选id
    getCheckedNodesid() {
      this.getnewlist(this.value.slice(-1))
    },
    // 获取新数据
    async getnewlist(id) {
      const result = await this.$axios.get('/api/api/products?category=' + id)
      this.spcategory = result.data
      this.total=result.data.length
    },

  },
}
</script>
<style lang=""></style>
