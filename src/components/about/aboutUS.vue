<template>
    <div>
      <img :src='imgsrc' width="115%" class="banner"/>
      <br/>
      <br/>
      <h2>关于我们</h2>
      <div>重庆久佳辰康健康科技有限公司</div>
      <br/>
      <p>
        「佳辰科技發展有限公司」 是瑞士工業安全協會(TÜV SÜD Process Safety (Swissi)- Commercial Office in Taiwan)在台連絡辦事處及商務總代理， 提供安全及化學品合規諮詢服務(包括製程安全、爆炸防護、防火、風險分析、化工安全、化學物質註冊/測試、及GHS等)，為目前在台除官方機構外最早執行 REACH實務訓練課程之中文諮詢顧問， 也是具有累積多年歐盟境外的台灣製造商/出口商(Non-EU companies)針對REACH實務影響經驗的交流平台。
      </p>
    </div>
</template>

<script type="text/ecmascript-6">
  import img from '../../assets/banner.png';

  export default {
    name: 'aboutUS',
    data() {
      return {
        imgsrc: img,
      };
    },
  };
</script>

<style scoped>
  .banner{
    position: relative;
    margin: -18px;
  }
</style>
