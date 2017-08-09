/**
 * Created by Benson on 2017/8/7.
 */

const Host = 'http://localhost:8080';

// 用户注册
export const userReg = function () {
  const URL = '/user/register';
  const API = Host + URL;
  return API;
};

// 获取用户信息
export const getUserInfo = function () {
  const URL = '/user/userInfo';
  const API = Host + URL;
  return API;
};

// 修改用户信息
export const changeUserInfo = function () {
  const URL = '/user/userChange';
  const API = Host + URL;
  return API;
};
// 获取团队列表
export const getTeamList = function () {
  const URL = '/team/list';
  const API = Host + URL;
  return API;
};


// 用户获取用户个人提问列表
export const getUserQusetionList = function () {
  const URL = '/expert/getUserQusetionList';
  const API = Host + URL;
  return API;
};

// 用户提交问题
export const postUserQusetion = function () {
  const URL = '/expert/getQuestion';
  const API = Host + URL;
  return API;
};

// 获取专家列表
export const getExpertList = function () {
  const URL = '/expert/getExpert';
  const API = Host + URL;
  return API;
};

// 预约筛查服务
export const screening = function () {
  const URL = '/user/makeANAppointment';
  const API = Host + URL;
  return API;
};

// 预约注射服务
export const payLast = function () {
  const URL = '/user/payLast';
  const API = Host + URL;
  return API;
};
// 预约注射服务申请确认
export const payLastGO = function () {
  const URL = '/user/payLastGO';
  const API = Host + URL;
  return API;
};
// 查看服务状态
export const getShopType = function () {
  const URL = '/user/getShopType';
  const API = Host + URL;
  return API;
};

// 购买疫苗
export const vaccine = function () {
  const URL = '/user/vaccine';
  const API = Host + URL;
  return API;
};
// 购买疫苗申请确认
export const vaccineGO = function () {
  const URL = '/user/vaccineGO';
  const API = Host + URL;
  return API;
};

// 获取用户筛查结果
export const getScreeningRes = function () {
  const URL = '/user/screeningRes';
  const API = Host + URL;
  return API;
};

// 获取用户流程状态
export const getUserAllStatus = function () {
  const URL = '/user/getUserAllStatus';
  const API = Host + URL;
  return API;
};
