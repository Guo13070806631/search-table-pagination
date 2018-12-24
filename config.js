/** 组件参数配置文件 */

// 搜索框参数
const searchParam = {
  searchLabel: 'name', //搜索框默认值
  searchContent: '', //搜索默认内容
  searchOptions: [
    //搜索下拉列表内容
    {
      value: 'name',
      label: '名称'
    },
    {
      value: 'sex',
      label: '性别'
    },
    {
      value: 'age',
      label: '年龄'
    },
    {
      value: 'job',
      label: '工作'
    }
  ]
}

// 分页参数
const paginationParam = {
  currentPage: 1, //当前页数
  pageSize: 5, //每页显示条目个数
  pageSizes: [5, 10, 15, 20] //每页显示个数选择器的选项设置
}

// 表格参数
const tableParam = {
  multipleSelection: [], //checked data
  cols: [
    {
      type: 'selection', //checkbox
      width: 30,
      reserve: true
    },
    //row header
    {
      propName: 'name',
      labelName: '名称',
      sortable: true
    },
    {
      propName: 'sex',
      labelName: '性别',
      sortable: true
    },
    {
      propName: 'age',
      labelName: '年龄',
      sortable: true
    },
    {
      propName: 'job',
      labelName: '工作',
      sortable: true
    }
  ],
  //表格数据
  table_data: [
    {
      id: 0,
      name: '张三',
      sex: '男',
      age: '20',
      job: '程序猿'
    },
    {
      id: 1,
      name: '李四',
      sex: '女',
      age: '18',
      job: '模特'
    }
  ],
  //表格数据(用于搜索过滤后展示)
  table_data_copy: [
    {
      id: 0,
      name: '张三',
      sex: '男',
      age: '20',
      job: '程序猿'
    },
    {
      id: 1,
      name: '李四',
      sex: '女',
      age: '18',
      job: '模特'
    }
  ],
  operationCloWidth: 210,
  operateBtns: [
    //操作列按钮
    {
      name: '删除',
      operate: 'delete',
      type: 'danger',
      icon: 'el-icon-delete'
    }
  ]
}

export default {
  SEARCH_PARAM: searchParam,
  PAGINATION_PARAM: paginationParam,
  TABLE_PARAM: tableParam
}
