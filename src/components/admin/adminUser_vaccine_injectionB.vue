<template>
  <div>
    <h3>注射安排，第二针</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
    <Modal
      v-model="modal"
      title="安排时间"
      @on-ok="asyncOK">
      <p>请选择注射时间</p>
      <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间"  v-model='date' style="width: 200px" @on-change="date=$event"></Date-picker>
    </Modal>
    <Modal
      v-model="modal2"
      title="修改时间"
      @on-ok="asyncOK2">
      <p>请选择注射时间</p>
      <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间"  v-model='date' style="width: 200px" @on-change="date=$event"></Date-picker>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { adminUserVaccineInjection, jiezhongFis, updateVa, over } from '../../interface';

  export default {
    name: 'adminUser_vaccine_injectionB',
    data() {
      return {
        modal: false,
        modal2: false,
        opdationID: '',
        userID: '',
        date: '',
        user: '',
        times: '',
        columns1: [
          {
            title: '姓名',
            key: 'userName',
          },
          {
            title: '接种时间',
            key: 'vaccinateDate',
            render: (a, b) => {
              if (b.row.vaccinateDate === null) {
                return '未安排时间';
              }
              return b.row.vaccinateDate.substring(0, 16);
            },
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
            render: (a, b) => {
              if (b.row.res === '0') {
                return a('div', [
                  a('Button', {
                    props: {
                      type: 'text',
                      size: 'small',
                    },
                    on: {
                      click: () => {
                        this.changeData(b.row.id, b.row.vaccinateDate);
                      },
                    },
                  }, '修改时间'),
                  a('Button', {
                    props: {
                      type: 'text',
                      size: 'small',
                    },
                    on: {
                      click: () => {
                        if(b.row.vaccinateDate != null){
                          this.over(b.row.id);
                        } else {
                          this.$Message.warning('还未设置筛查时间');
                        }
                      },
                    },
                  }, '完成注射'),
                ]);
              }
              if (b.row.res === null) {
                return a('div', [
                  a('Button', {
                    props: {
                      type: 'text',
                      size: 'small',
                    },
                    on: {
                      click: () => {
                        this.newDate(b.row.id, b.row.userID);
                      },
                    },
                  }, '设置时间'),
                ]);
              }
              return '';
            },
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
        const par = '?time=2';
        this.$ajax({
          method: 'get',
          url: adminUserVaccineInjection() + par,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      newDate(vid, userID) {
        this.modal = true;
        this.userID = userID;
      },
      changeData(vid, date) {
        this.modal2 = true;
        this.date = date;
        this.opdationID = vid;
      },
      asyncOK() {
        this.$ajax({
          method: 'POST',
          url: jiezhongFis(),
          data: { vaID: this.userID, date: this.date, times: 2 },
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            location.reload();
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      over(vid) {
        const message = confirm('确认该用户已完成注射');
        if (message === true) {
          const par = '?vaccID=';
          this.$ajax({
            method: 'get',
            url: over() + par + vid.toString(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 1) {
              location.reload();
            }
          }).catch(() => {
            this.error('服务器有点忙，请稍后再试');
          });
        }
      },
      asyncOK2() {
        this.$ajax({
          method: 'POST',
          url: updateVa(),
          data: { vaID: this.opdationID, date: this.date, times: 2 },
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            location.reload();
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
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
