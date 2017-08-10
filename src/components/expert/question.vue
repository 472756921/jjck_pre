<template xmlns:v-bind="">
  <Row>
    <Col :sm="24" :md="{ span: 12, offset: 6}">
    <h3>问题详情</h3>
    <div v-if="this.rout == 'userNew'">向刘德华医生提问，您当前拥有 <span class="red">{{this.userQuestionTime}}</span>次提问机会</div>
    <br/>
    <Input v-model="questionTitle" :maxlength=15 v-bind:disabled="isDisabled">
    <span slot="prepend">问题标题<span class="red"> *</span></span>
    </Input>
    <br/>
    <Input v-model="question" v-bind:disabled="isDisabled" type="textarea" :autosize="{minRows: 5,maxRows: 5}" :maxlength=200 placeholder="请输入问题详细描述（200字以内）"></Input>
    <br/>
    <br/>
    <h3 v-if="this.rout == 'userAN' || this.rout == 'd'">专家回复</h3>
    <br/>
    <div v-if="this.rout == 'userAN'">XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    <Input v-if="this.rout == 'd'"  v-model="answer" type="textarea" :autosize="{minRows: 5,maxRows: 5}" :maxlength=200 placeholder="回复问题（200字以内）"></Input> <br/>
    <br/>
    <Button type="success" class="center" v-if="this.rout == 'userNew'" @click="post">提问</Button>
    <Button type="success" class="center" v-if="this.rout == 'd'" @click="back">回复</Button>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
  import { postUserQusetion, docAnwser } from '../../interface';
  import { mackINFO } from '../ut/returnINFO';

  export default {
    name: 'questionNew',
    created() {
      this.rout = this.$route.params.r;
      this.doctorID = this.$route.params.docID;
      if (this.rout === 'd' || this.rout === 'userAN') {
        this.isDisabled = true;
      }
      if (this.rout === 'd') {
        this.questionID = this.$route.params.questisonID;
        const que = JSON.parse(sessionStorage.getItem('qustion'));
        this.questionTitle = que.questionTitle;
        this.question = que.question;
      }
      this.userQuestionTime = sessionStorage.getItem('userQuestionTime');
    },
    data() {
      return {
        questionTitle: '',
        question: '',
        answer: '',
        rout: '',
        doctorID: '',
        userQuestionTime: '',
        isDisabled: false,
        questionID: '',
      };
    },
    methods: {
      back() {
        const question = {
          anwser: this.answer,
          questionID: this.questionID,
        };
        this.$ajax({
          method: 'POST',
          url: docAnwser(),
          dataType: 'JSON',
          data: question,
        }).then((res) => {
          if (res.data === 1) {
            this.success('提交成功');
            this.rout = '123';
          }
        }).catch((error) => {
          console.log(error);
        });
      },
      post() {
        if (this.userQuestionTime <= 0) {
          this.error('对不起，您的咨询次数已经用尽');
          return;
        }
        const question = {
          userID: 3,
          questionTitle: this.questionTitle,
          question: this.question,
          doctorID: this.doctorID,
        };
        this.$ajax({
          method: 'post',
          url: postUserQusetion(),
          dataType: 'JSON',
          data: question,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          const e = 'error';
          if (res.data === 1) {
            this.success(mackINFO('error1302'));
            this.userQuestionTime = this.userQuestionTime - 1;
          } else {
            this.error(mackINFO(e + res.data));
          }
        }).catch((error) => {
          console.log(error);
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
  .center{
    display: block;
    margin: 0 auto;
  }
  .red {
    color: #ed3f14;
  }
</style>
