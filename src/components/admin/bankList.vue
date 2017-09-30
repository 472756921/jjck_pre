<template>
  <div>
    <h3>银行账号管理</h3>
    汇率：<input  v-model='hl'> <button @click="updateRates">修改</button>
    免疫服务费：<input  v-model='zsf.service_price'> <button @click="updateRates2(0)">修改</button>
    疫苗费：<input  v-model='ymf.service_price'> <button @click="updateRates2(1)">修改</button>
    <br/>
    <br/>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { bankList, updateBanksStatus, deleteBank, getRate, updateRate, getThePrices, updatePrice } from '../../interface';

  export default {
    name: 'bankList',
    data() {
      return {
        user: '',
        hl: '',
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
        zsf: '',
        ymf: '',
      };
    },
    created() {
      this.getData();
      this.gethl();
      this.getfy();
    },
    methods: {
      getfy(){
        this.$ajax({
          method: 'get',
          url: getThePrices(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.zsf = res.data[0];
          this.ymf = res.data[1];
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
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
      gethl() {
        this.$ajax({
          method: 'get',
          url: getRate(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.hl = res.data;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      updateRates() {
        this.$ajax({
          method: 'post',
          url: updateRate(),
          dataType: 'JSON',
          data: { rate: this.hl },
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 603) {
            this.success('修改成功');
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      updateRates2(type) {
        let data;
        if(type == 0) {
          data = {id: 1, service_price: this.zsf.service_price}
        }
        if(type == 1) {
          data = {id: 2, service_price: this.ymf.service_price}
        }
        this.$ajax({
          method: 'post',
          url: updatePrice(),
          dataType: 'JSON',
          data: data,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 603) {
            this.success('修改成功');
          }
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
      success(data) {
        this.$Message.success(data);
      },
    },
  };
</script>

<style scoped>

</style>
