<template>
  <div>
    <h3>注射服务</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { adminList, delAdmin, updateAdminStatus, resetAdminPassWord } from '../../interface';

  export default {
    name: 'adminList',
    data() {
      return {
        user: '',
        columns1: [
          {
            title: '账号',
            key: 'account',
          },
          {
            title: '状态',
            key: 'status',
          },
          {
            title: '身份',
            key: 'type',
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
          method: 'get',
          url: adminList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data;
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
                this.del(params.row.id);
              },
            },
          }, '删除'),
          h('Button', {
            props: {
              type: 'text',
              size: 'small',
            },
            on: {
              click: () => {
                this.jinyon(params.row.id);
              },
            },
          }, '禁用/启用'),
          h('Button', {
            props: {
              type: 'text',
              size: 'small',
            },
            on: {
              click: () => {
                this.chongz(params.row.id);
              },
            },
          }, '密码重置'),
        ]);
      },
      del(ido) {
        const message = confirm('删除该管理员？');
        if (message === true) {
          this.$ajax({
            method: 'post',
            url: delAdmin(),
            dataType: 'JSON',
            data: { ID: ido },
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 607) {
              location.reload();
            }
          }).catch(() => {
            this.error('服务器有点忙，请稍后再试');
          });
        }
      },
      jinyon(ido) {
        const message = confirm('修改管理员状态？');
        if (message === true) {
          this.$ajax({
            method: 'post',
            url: updateAdminStatus(),
            dataType: 'JSON',
            data: { ID: ido },
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
      chongz(ido) {
        const message = confirm('重置密码？');
        if (message === true) {
          this.$ajax({
            method: 'post',
            url: resetAdminPassWord(),
            dataType: 'JSON',
            data: { ID: ido },
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
      error(data) {
        this.$Message.error(data);
      },
    },
  };
</script>

<style scoped>

</style>
