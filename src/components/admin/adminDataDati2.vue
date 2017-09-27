<template>
  <div>
    <div id="main" class="am-u-sm-12 am-margin-top-sm" style="height:400px">
      <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getStatisticsDetail } from '../../interface';

  export default {
    name: 'adminDataDati2',
    data() {
      return {
        columns1: [
          {
            title: '用户名',
            key: 'userName',
          },
          {
            title: '身份证',
            key: 'idnumber',
          },
          {
            title: '电话',
            key: 'phone',
          },
          {
            title: '性别',
            key: 'sex',
            render: (h, p) => {
              if(p.row.sex == '1') {
                return '男';
              } else if (p.row.sex == '0'){
                return '女';
              } else {
                return '未知';
              }
            },
          },
          {
            title: '注册时间',
            key: 'createDate',
          },
        ],
        data1: [],
      };
    },
    created() {
      const date = this.$route.params.date;
      const tid = this.$route.params.tid;
      this.sure(date, tid);
    },
    methods: {
      sure(date, tid) {
        const par = '?ID='+tid+"&date="+date;
        this.$ajax({
          method: 'GET',
          url: getStatisticsDetail() + par,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.users;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>

</style>
