<template>
  <Row>
    <Col :sm="24" :md="{ span: 20, offset: 2 }">
      <div>{{doc.name}}，您好！</div>
      <div>
        <span>累计咨询量：<span class="red">2003</span>人/次 ， 累计回复量：<span class="green">2003</span>人/次</span>
        <br/>
        <span>本月咨询量：<span class="red">2003</span>人/次 ， 本月回复量：<span class="green">2003</span>人/次</span>
      </div>
      <br/>
      <h3>待回复问题列表</h3>
      <br/>
      <Table :columns="columns1" :data="data1"></Table>
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
        ],
        data1: [],
      };
    },
    methods: {
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
          }).catch((error) => {
            console.log(error);
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
