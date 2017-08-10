<template>
  <div>
    <h3>注射服务</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { injection, updateUserInjectionService } from '../../interface';

  export default {
    name: 'adminUser_injection',
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
          url: injection(),
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
                this.sure(params.row.id);
              },
            },
          }, '确认已付款'),
        ]);
      },
      sure(id) {
        const message = confirm('确认该用户已付款');
        if (message === true) {
          this.$ajax({
            method: 'post',
            url: updateUserInjectionService(),
            dataType: 'JSON',
            data: { userID: id },
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 603) {
              location.reload();
            }
          }).catch(() => {
            this.error('服务器有点忙，请稍后再试');
          });
        }
      },
    },
  };
</script>

<style scoped>

</style>
