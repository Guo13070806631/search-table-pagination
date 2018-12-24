/* eslint-disable vue/no-unused-components */
<template>
  <search-pagination-table :searchParam="searchParam"
                           :tableParam="tableParam"
                           :paginationParam="paginationParam"
                           @tableRowClassName="tableRowClassName"
                           @btnOperate="btnOperate"></search-pagination-table>
</template>

<script>
import SearchPaginationTable from './Search-Table-Pagination'
import config from './config'
export default {
  components: { SearchPaginationTable, config },
  data() {
    return {
      searchParam: {},
      paginationParam: {},
      tableParam: {},
    }
  },
  created() {
    this.searchParam = config.SEARCH_PARAM
    this.paginationParam = config.PAGINATION_PARAM
    this.tableParam = config.TABLE_PARAM
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
    },
    /* 表格btn操作 */
    btnOperate(operatBtn, index, row) {
      switch (operatBtn) {
        case 'delete':
          console.log(`delete row ${index} ----- ${JSON.stringify(row)}`)
          this.delete(index, row)
          break
        default:
          break
      }
    },
    delete(index, row) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: `删除${row.name}节点成功!`
          })
        })
        .catch(() => { })
    }
  }
}
</script>
<style lang="scss">
</style>
