<template>
  <div>
    <h3>筛查</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
    <Modal
      v-model="modal"
      title="安排时间"
      @on-ok="asyncOK">
      <p>请选择筛查时间</p>
      <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间"  v-model='date' style="width: 200px" @on-change="date=$event"></Date-picker>
    </Modal>
    <Modal
      v-model="modal2"
      title="录入结果"
      @on-ok="asyncOK2">
      <Radio-group v-model="screeningRes">
        <Radio label="1">可以接种</Radio>
        <Radio label="2">不能接种</Radio>
        <Radio label="3">咨询医生</Radio>
      </Radio-group>
    </Modal>

    <Page :page="page" v-if="over" v-on:pageChange="getData"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { screeningList, createScreening, updateScreeningDate, updateScreeningRes } from '../../interface';
  import Page from './page';

  export default {
    name: 'adminUser_screening',
    components: { Page },
    data() {
      return {
        over: false,
        page: '',
        userID: '',
        isUpdate: '',
        user: '',
        modal: false,
        modal2: false,
        date: '',
        screeningRes: 1,
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
            title: '已安排筛查',
            key: 'isScreening',
          },
          {
            title: '筛查时间',
            key: 'screeningDate',
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
      this.getData(1);
    },
    methods: {
      getData(page) {
        this.$ajax({
          method: 'post',
          url: screeningList(),
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
      get(h, params) {
        return h('div', [
          h('Button', {
            props: {
              type: 'text',
              size: 'small',
            },
            on: {
              click: () => {
                this.show(params.row.id, params.row.isScreening);
              },
            },
          }, '安排/修改筛查时间'),
          h('Button', {
            props: {
              type: 'text',
              size: 'small',
            },
            on: {
              click: () => {
                this.scres(params.row.id, params.index);
              },
            },
          }, '录入结果'),
        ]);
      },
      show(id, type) {
        if (type === 1) {
          this.isUpdate = 1;
        }
        this.userID = id;
        this.modal = true;
      },
      asyncOK() {
        let urlLo = createScreening();
        if (this.isUpdate === 1) {
          urlLo = updateScreeningDate();
        }
        this.modal = false;
        this.$ajax({
          method: 'post',
          url: urlLo,
          dataType: 'JSON',
          data: { date: this.date, userID: this.userID },
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 605 || res.data === 603) {
            location.reload();
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      scres(id) {
        this.userID = id;
        this.modal2 = true;
      },
      asyncOK2() {
        this.$ajax({
          method: 'post',
          url: updateScreeningRes(),
          dataType: 'JSON',
          data: { screeningRes: this.screeningRes, userID: this.userID },
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 603) {
            location.reload();
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>

</style>
