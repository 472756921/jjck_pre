<template>
  <div>
    <h3>注射服务</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { bankList, updateBanksStatus, deleteBank } from '../../interface';

  export default {
    name: 'bankList',
    data() {
      return {
        user: '',
        columns1: [
          {
            title: '账号',
            key: 'number',
          },
          {
            title: '状态',
            key: 'status',
          },
          {
            title: '开户行',
            key: 'openName',
          },
          {
            title: '户主',
            key: 'openUserName',
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
          url: bankList(),
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
        ]);
      },
      del(ido) {
        const message = confirm('删除该账号？');
        if (message === true) {
          this.$ajax({
            method: 'post',
            url: deleteBank(),
            dataType: 'JSON',
            data: { ID: ido },
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 607) {
              location.reload();
            }
            if (res.data === 608) {
              this.error('激活状态下的账户不能删除');
            }
          }).catch(() => {
            this.error('服务器有点忙，请稍后再试');
          });
        }
      },
      jinyon(ido) {
        const message = confirm('修改状态？');
        if (message === true) {
          this.$ajax({
            method: 'post',
            url: updateBanksStatus(),
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
