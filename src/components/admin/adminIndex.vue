<template>
  <div class="layout">
    <Row type="flex">
      <i-col span="5" class="layout-menu-left">
        <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" @on-select="push">
          <div class="layout-logo-left">
            <div class="tw">久佳辰康后台系统</div>
          </div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              数据
            </template>
            <Menu-item name="adminData">总体数据</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="person"></Icon>
              用户
            </template>
            <Menu-item name="adminUser">用户管理</Menu-item>
            <Menu-item name="adminUser_screening">筛查</Menu-item>
            <Menu-item name="adminUser_injection">注射</Menu-item>
            <Menu-item name="adminUser_vaccine">疫苗</Menu-item>
            <Menu-item name="adminUser_vaccine_injectionA">第一次接种</Menu-item>
            <Menu-item name="adminUser_vaccine_injectionB">第二次接种</Menu-item>
            <Menu-item name="adminUser_vaccine_injectionC">第三次接种</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="person-stalker"></Icon>
              团队
            </template>
            <Menu-item name="adminTeamList">团队列表</Menu-item>
            <Menu-item name="adminTeamNew">新增团队</Menu-item>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="gear-a"></Icon>
              管理员
            </template>
            <Menu-item name="adminList">管理员列表</Menu-item>
            <Menu-item name="adminNew">新增管理员</Menu-item>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="document-text"></Icon>
              银行账号
            </template>
            <Menu-item name="bankList">账号费用管理</Menu-item>
            <Menu-item name="bankNew">新增账号</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col span="19">
        <div class="layout-header">
          <br/>
          <h2>&nbsp;&nbsp;&nbsp;久佳辰康</h2>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; 久佳辰康
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'adminIndex',
      data() {
        return {
          admin: '',
        };
      },
      created() {
        const admin = sessionStorage.getItem('admin');
        if (admin === '' || admin == null) {
          this.$router.push({ name: 'adminLogin' });
        }
      },
      methods: {
        push(names) {
          this.$router.push({ path: names });
        },
      },
    };
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 800px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .tw {
    color: #fff;
    font-size: 1.2rem;
    padding: 3px 10px;
  }
</style>
