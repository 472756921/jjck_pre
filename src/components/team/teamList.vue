<template>
  <div>
    <br/>
    <Button-group>
      <Button @click="getin(item, index)" :type="chooes==index?'primary':' '" v-for="(item, index) in list">{{item.name}} ({{item.count}}人)</Button>
    </Button-group>
    <br/>
    <div v-if="chooes!='3'">简介 : {{ this.list[this.chooes].introduction }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getTeamList } from '../../interface';

  export default {
    name: 'TeamList',
    data() {
      return {
        list: '',
        chooes: 3,
        modal: false,
        index: '',
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.$http.get(getTeamList()).then((res) => {
          this.list = res.body;
        }).catch((error) => {
          console.log(error);
        });
      },
      getin(item, index) {
        this.chooes = index;
        sessionStorage.setItem('UCTID', JSON.stringify({ teamID: item.id, teamName: item.name }));
      },
    },
  };
</script>

<style scoped>
  .limi{
    color: #2d8cf0;
  }
  .co{
    background: #e9eaec;
    border: 1px solid #2d8cf0;
  }
</style>
