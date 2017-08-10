<template>
  <div>
    <h3>注射安排，第一针</h3>
    <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
    <Modal
      v-model="modal"
      title="安排时间"
      @on-ok="asyncOK">
      <p>请选择注射时间</p>
      <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间"  v-model='date' style="width: 200px" @on-change="date=$event"></Date-picker>
    </Modal>
    <Modal
  </div>
</template>

<script type="text/ecmascript-6">
  import { adminUserVaccineInjection } from '../../interface';

  export default {
    name: 'adminUser_vaccine_injectionA',
    data() {
      return {
        modal: false,
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
                        this.changeData(b.row.id);
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
                        this.over(b.row.id);
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
                        this.newDate(b.row.id);
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
        const par = '?time=1';
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
      newDate(id) {
        this.modal = true;
        console.log(id);
      },
    },
  };
</script>

<style scoped>

</style>
