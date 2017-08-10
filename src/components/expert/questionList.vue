<template>
  <Row>
    <Col :sm="24" :md="{ span: 20, offset: 2 }">
      <div>{{doc.name}}，您好！</div>
      <div>
        <span>累计咨询量：<span class="red">{{this.totleNum}}</span>人/次 ， 累计回复量：<span class="green">{{this.totleNumAn}}</span>人/次</span>
        <br/>
        <span>本月咨询量：<span class="red">{{this.monthNum}}</span>人/次 ， 本月回复量：<span class="green">{{this.monthNumAn}}</span>人/次</span>
      </div>
      <br/>
      <h3>待回复问题列表</h3>
      <br/>
      <Table :columns="columns1" :data="data1" on-row-click="clickList"></Table>
      <br/>
      <div class="center">
        <Page class="center" :current="1" :total="22" simple></Page>
      </div>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
  import { expertGetQuestionList } from '../../interface';

  export default {
    name: 'questionList',
    created() {
      const doc = sessionStorage.getItem('doc');
      if (doc == null || doc === '') {
        this.error('用户未登录');
      }
      this.doc = JSON.parse(doc);
      this.getData();
    },
    data() {
      return {
        doc: '',
        monthNum: '',
        monthNumAn: '',
        totleNum: '',
        totleNumAn: '',
        columns1: [
          {
            title: '姓名',
            key: 'userName',
          },
          {
            title: '问题',
            key: 'questionTitle',
          },
          {
            title: '时间',
            key: 'createDate',
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
    methods: {
      clickList(data, index) {
        sessionStorage.setItem('qustion', JSON.stringify(this.data1[index]));
        this.$router.push({ name: 'questionNew', params: { r: 'd', questisonID: data } });
      },
      getData() {
        if (this.account === '' || this.pwd === '') {
          this.error('请输入账号和密码');
        } else {
          const exID = this.doc.id;
          const t = '?expertID=';
          const par = t + exID;
          console.log(this.doc);
          this.$ajax({
            method: 'get',
            url: expertGetQuestionList() + par,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.data1 = res.data.question;
            this.monthNum = res.data.monthNum + res.data.monthNumAn;
            this.monthNumAn = res.data.monthNumAn;
            this.totleNum = res.data.totleNum + res.data.totleNumAn;
            this.totleNumAn = res.data.totleNumAn;
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      error(data) {
        this.$Message.error(data);
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
                this.clickList(params.row.id, params.index);
              },
            },
          }, '查看'),
        ]);
      },
    },
  };
</script>

<style scoped>
  .red {
    color: #ed3f14;
    font-size: 1rem;
  }
  .green {
    color: #19be6b;
    font-size: 1rem;
  }
  .center{
    display: block;
    margin: 0 auto;
    width: 160px;
  }
</style>
