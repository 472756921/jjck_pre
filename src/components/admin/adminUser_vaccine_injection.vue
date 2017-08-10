<template>
  <div>
    <h3>注射安排</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { adminUserVaccineInjection } from '../../interface';

  export default {
    name: 'adminUser_vaccine_injection',
    data() {
      return {
        user: '',
        columns1: [
          {
            title: '姓名',
            key: 'userName',
          },
          {
            title: '身份证号码',
            key: 'idnumber',
          },
          {
            title: '性别',
            key: 'sex',
          },
          {
            title: '接种时间',
            key: 'injectionDate',
          },
          {
            title: '电话号码',
            key: 'phone',
          },
          {
            title: '操作',
            key: 'action',
            render: this.get,
          },
        ],
        data1: [],
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$ajax({
          method: 'post',
          url: adminUserVaccineInjection(),
          dataType: 'JSON',
          data: { page: 1, userName: '' },
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          console.log(res.data);
          this.data1 = res.data.users;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      get(h, params) {
        return h('div', [
          h('Button', {
            props: {
              type: 'text',
              size: 'small',
            },
            on: {
              click: () => {
                this.show(params.index);
              },
            },
          }, '确认收款'),
        ]);
      },
    },
  };
</script>

<style scoped>

</style>
