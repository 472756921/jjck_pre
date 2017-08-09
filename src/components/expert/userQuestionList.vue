<template>
  <div>
    <div>您当前拥有 <span class="red">{{this.userQuestionTime}}</span> 次提问机会</div>
    <br/>
    <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserQusetionList } from '../../interface';
  import expandRow from './expandTable';

  export default {
    name: 'userQuestionList',
    created() {
      this.getList();
      this.userQuestionTime = sessionStorage.getItem('userQuestionTime');
    },
    methods: {
      rowClassName(row) {
        if (row.over === 1) {
          return 'demo-table-info-row';
        }
        return '';
      },
      getList() {
        this.$ajax({
          method: 'get',
          url: getUserQusetionList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data.length === 0) {
            this.data1 = '';
          }
          this.data1 = res.data;
        }).catch((error) => {
          console.log(error);
        });
      },
    },
    data() {
      return {
        userID: '',
        userQuestionTime: '',
        columns1: [
          {
            type: 'expand',
            width: 50,
            render: function a(h, params) {
              return h(expandRow, {
                props: {
                  row: params.row,
                },
              });
            },
          },
          {
            title: '专家姓名',
            key: 'doctorName',
          },
          {
            title: '问题',
            key: 'questionTitle',
          },
          {
            title: '时间',
            key: 'createDate',
          },
        ],
        data1: [],
      };
    },
  };
</script>

<style>
  .red {
    color: #ed3f14;
    font-size: 1.2rem;
  }
  .ivu-table .demo-table-info-row td{
    background-color: #5cadff;
    color: #fff;
  }
  .ivu-table-expanded-cell{
    padding: 1em !important;
  }
</style>
