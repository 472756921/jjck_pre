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


// 获取专家列表
export const getExpertList = function () {
  const URL = '/expert/getExpert';
  const API = Host + URL;
  return API;
};
