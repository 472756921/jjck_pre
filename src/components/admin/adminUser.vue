<template>
  <div>
    <h3>用户管理</h3>
    <RadioGroup v-model="disabledGroup" @on-change="changetype">
      <Radio label="0">所有用户</Radio>
      <Radio label="2">已筛查未预约注射用户</Radio>
      <Radio label="3">已未预约注射未购买疫苗用户</Radio>
      <Radio label="6">完成用户</Radio>
      <Radio label="7">已预约普媚研2基因检测用户</Radio>
    </RadioGroup>
    <div v-if="disabledGroup == 7">
      <Table :columns="columns2" :data="data1" on-row-click="clickList"></Table>
      <Page :page="page" v-if="over" v-on:pageChange="getData2"/>
    </div>
    <div v-else>
      <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
      <Page :page="page" v-if="over" v-on:pageChange="getData"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserStatus, updateUserVaccineConfirmation, getGoodsOrders} from '../../interface';
  import Page from './page';

  export default {
    name: 'adminUser',
    components: { Page },
    data() {
      return {
        over: false,
        disabledGroup: '0',
        page: '',
        user: '',
        columns1: [
          {
            title: '姓名',
            key: 'userName',
          },
          {
            title: '身份证号码',
            key: 'numberID',
          },
          {
            title: '电话号码',
            key: 'phone',
          },
          {
            title: '状态',
            key: 'status',
          },
        ],
        columns2: [
          {
            title: '姓名',
            key: 'userName',
          },
          {
            title: '身份证号码',
            key: 'idNumber',
          },
          {
            title: '电话号码',
            key: 'phoneNumber',
          },
          {
            title: '购买时间',
            key: 'payDate',
          },
        ],
        data1: [],
      };
    },
    created() {
      this.getData(1);
    },
    methods: {
      changetype() {
//        alert('disabledGroup'+this.disabledGroup);
        if( this.disabledGroup == 7 ){
          this.getData2(1);
        } else{
          this.getData(1);
        }
      },
      getData2(page){
        this.$ajax({
          mathod: 'get',
          url: getGoodsOrders() + '?page=' + page + '&status=1',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.users;
          this.over = true;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
        }).catch((e) => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
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
    },
  };
</script>

<style scoped>

</style>
