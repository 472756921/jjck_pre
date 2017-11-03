<template>
  <div>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :page="page" v-if="over" v-on:pageChange="getData"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page from './page';

  export default {
    name: 'questionList',
    components: { Page },
    data(){
      return {
        page: '',
        over: false,
        columns1: [
          {
            title: '用户',
            key: 'userName',
          },
          {
            title: '提问医生',
            key: 'doctorName',
          },
          {
            title: '时间',
            key: 'create_date',
          },
          {
            title: '状态',
            key: 'status',
          },
          {
            title: '操作',
            key: 'action',
            render: (h, p)=> {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                  },
                  on: {
                    click: () => {
                      this.datiel(p.row.id);
                    },
                  },
                }, '详情'),
              ]);
            }
          },
        ],
        data1: [
          {userName: '123', doctorName: '222', create_date: '2012-12-12', status: '未回复',id: 12},
        ],
      };
    },
    created() {
      this.getData(1);
    },
    methods: {
      getData(page) {
        this.$ajax({
          method: 'get',
          url: getUserStatus() + '?page='+ page + '&type='+this.disabledGroup,
          dataType: 'JSON',
          data: { page: page, userName: '' },
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.users;
          this.over = true;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      datiel(id) {
        this.$router.push({ path: 'questionDa/'+id});
      },
    },
  };
</script>

<style scoped>

</style>
