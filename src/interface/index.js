/**
 * Created by Benson on 2017/8/7.
 */

  const Host = 'http://www.bensonchen.cn/jjck';
 //const Host = 'http://localhost:8080';

// 用户注册
export const userReg = function () {
  const URL = '/user/register';
  const API = Host + URL;
  return API;
};
// 获取用户状态
export const getUserStep = function () {
  const URL = '/user/getUserStep';
  const API = Host + URL;
  return API;
};
export const tjiaoguo = function () {
  const URL = '/user/tjiaoguo';
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

// 获取团队列表
export const getTeamTeamDate = function () {
  const URL = '/public/getTeamStatistics';
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
  const URL = '/user/weixinPay';
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

// 专家登录
export const expertLogin = function () {
  const URL = '/expert/expertLogin';
  const API = Host + URL;
  return API;
};

// 专家获取问题列表
export const expertGetQuestionList = function () {
  const URL = '/expert/expertGetQuestionList';
  const API = Host + URL;
  return API;
};

// 专家回答
export const docAnwser = function () {
  const URL = '/expert/docAnwser';
  const API = Host + URL;
  return API;
};

// 管理员登录
export const adminLogin = function () {
  const URL = '/public/adminLogin';
  const API = Host + URL;
  return API;
};

// 管理员获取筛查人数
export const screeningList = function () {
  const URL = '/public/getNeedScreeningUsers';
  const API = Host + URL;
  return API;
};

// 管理员获取预约注射人数
export const injection = function () {
  const URL = '/public/getNeedInjectionServiceUsers';
  const API = Host + URL;
  return API;
};

// 管理员获取购买疫苗人数
export const adminvaccine = function () {
  const URL = '/public/getNeedVaccineConfirmationUsers';
  const API = Host + URL;
  return API;
};
// 确认疫苗费用
export const updateUserVaccineConfirmation = function () {
  const URL = '/public/updateUserVaccineConfirmation';
  const API = Host + URL;
  return API;
};

// 管理员获取购买疫苗人数
export const adminUserVaccineInjection = function () {
  const URL = '/public/jiezhong';
  const API = Host + URL;
  return API;
};
export const jiezhongFis = function () {
  const URL = '/public/jiezhongFis';
  const API = Host + URL;
  return API;
};
export const updateVa = function () {
  const URL = '/public/updateVa';
  const API = Host + URL;
  return API;
};
export const over = function () {
  const URL = '/public/over';
  const API = Host + URL;
  return API;
};

// 创建筛查
export const createScreening = function () {
  const URL = '/public/createScreening';
  const API = Host + URL;
  return API;
};
// 修改筛查
export const updateScreeningDate = function () {
  const URL = '/public/updateScreeningDate';
  const API = Host + URL;
  return API;
};

// 录入筛查结果
export const updateScreeningRes = function () {
  const URL = '/public/updateScreeningRes';
  const API = Host + URL;
  return API;
};
// 确认用户付款
export const updateUserInjectionService = function () {
  const URL = '/public/updateUserInjectionService';
  const API = Host + URL;
  return API;
};
// 修改团队信息
export const updataTeam = function () {
  const URL = '/public/updataTeam';
  const API = Host + URL;
  return API;
};

export const newTeam = function () {
  const URL = '/public/newTeam';
  const API = Host + URL;
  return API;
};

export const adminList = function () {
  const URL = '/public/getAdmins';
  const API = Host + URL;
  return API;
};
export const delAdmin = function () {
  const URL = '/public/deleteAdmin';
  const API = Host + URL;
  return API;
};
export const updateAdminStatus = function () {
  const URL = '/public/updateAdminStatus';
  const API = Host + URL;
  return API;
};
export const resetAdminPassWord = function () {
  const URL = '/public/resetAdminPassWord';
  const API = Host + URL;
  return API;
};
export const registerAdmin = function () {
  const URL = '/public/registerAdmin';
  const API = Host + URL;
  return API;
};
export const bankList = function () {
  const URL = '/public/getBanks';
  const API = Host + URL;
  return API;
};
export const getRate = function () {
  const URL = '/public/getRate';
  const API = Host + URL;
  return API;
};
export const updateRate = function () {
  const URL = '/public/updateRate';
  const API = Host + URL;
  return API;
};
export const updateBanksStatus = function () {
  const URL = '/public/updateBanksStatus';
  const API = Host + URL;
  return API;
};
export const deleteBank = function () {
  const URL = '/public/deleteBank';
  const API = Host + URL;
  return API;
};
export const saveBank = function () {
  const URL = '/public/saveBank';
  const API = Host + URL;
  return API;
};
