<template>
    <div>
      <img :src='imgsrc' width="115%" class="banner"/>
      <br/>
      <br/>
      <div>
        <h3>HPV介绍</h3>
        <p>HVP人乳头瘤病毒是一种属于乳多空病毒科的乳头瘤空泡病毒A属，是球形DNA病毒，能引起人体皮肤黏膜的鳞状上皮增殖。表现为寻常疣、生殖器疣（尖锐湿疣）等症状。 随着性病中尖锐湿疣的发病率急速上升和宫颈癌、肛门癌等的增多，人乳头瘤病毒（hpv）感染越来越引起人们的关注。</p>
      </div>
      <br/>
      <div>
        <h3>服务内容介绍</h3>
        <p>HVP人乳头瘤病毒是一种属于乳多空病毒科的乳头瘤空泡病毒A属，是球形DNA病毒，能引起人体皮肤黏膜的鳞状上皮增殖。表现为寻常疣、生殖器疣（尖锐湿疣）等症状。 随着性病中尖锐湿疣的发病率急速上升和宫颈癌、肛门癌等的增多，人乳头瘤病毒（hpv）感染越来越引起人们的关注。</p>
      </div>
      <br/>
      <br/>
      <br/>
      <Button :type="status==1?'primary':''" class="center" @click="service('screening')">预约检查</Button>
      <br/>
      <Button :type="status==2||(status==3&&status2!=3)?'primary':''" class="center" @click="service('injection')">开始服务</Button>
      <br/>
      <Button :type="status==4||(status==3&&status2==3)?'primary':''" class="center" @click="service('vaccine')">获取信息</Button>
    </div>
</template>

<script type="text/ecmascript-6">
  import img from '../../assets/banner.png';
  import { getUserAllStatus } from '../../interface';

  export default {
    name: 'service',
    data() {
      return {
        imgsrc: img,
        status: 1,
        status2: 1,
      };
    },
    created() {
      this.getUserAllStatus();
    },
    methods: {
      service(type) {
        this.$router.push({ name: type });
      },
      getUserAllStatus() {
        this.$ajax({
          method: 'get',
          url: getUserAllStatus(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.status = res.data[0];
          this.status2 = res.data[1];
        }).catch((e) => {
          console.log(e);
          this.error('服务器有点忙，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>
  .banner{
    position: relative;
    margin: -18px;
  }
  .no {
    background: red;
  }
  .center{
    width: 200px;
    display: block;
    margin: 0 auto;
  }
</style>
