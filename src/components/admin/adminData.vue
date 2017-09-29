<template>
  <div>
    <div id="main" class="am-u-sm-12 am-margin-top-sm" style="height:400px">
      <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getTeamList } from '../../interface';

  export default {
    name: 'adminData',
    data() {
      return {
        columns1: [
          {
            title: '团队',
            key: 'name',
          },
          {
            title: '累计销售',
            key: 'num',
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
      this.getList();
    },
    methods: {
      getList() {
        this.$http.get(getTeamList()).then((res) => {
          this.data1 = res.body;
        }).catch((error) => {
          console.log(error);
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
          }, '详情'),
        ]);
      },
      sure(ids) {
        this.$router.push({ name: 'adminDataDati', params: { id: ids } });
      },
    },
  };
</script>

<style scoped>

</style>
