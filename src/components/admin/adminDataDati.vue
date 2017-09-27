<template>
  <div>
    <div id="main" class="am-u-sm-12 am-margin-top-sm" style="height:400px">
      <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getTeamTeamDate } from '../../interface';

  export default {
    name: 'adminDataDati',
    data() {
      return {
        ids: '',
        columns1: [
          {
            title: '时间',
            key: 'statisticsDate',
          },
          {
            title: '销售数量',
            key: 'sales',
          },
          {
            title: '操作',
            key: 'option',
            render: (h, p) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(p.row.statisticsDate)
                    }
                  }
                }, '详细'),
              ]);
            },
          },
        ],
        data1: [],
      };
    },
    created() {
      this.ids = this.$route.params.id;
      this.sure(this.ids);
    },
    methods: {
      show (date) {
        this.$router.push({ name: 'adminDataDati2', params: { date: date, tid: this.ids } });
      },
      sure(ids) {
        const par = '?ID=';
        this.$ajax({
          method: 'GET',
          url: getTeamTeamDate() + par + ids,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>

</style>
