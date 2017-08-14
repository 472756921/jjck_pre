/**
 * Created by Benson on 2017/8/8.
 */

const error1200 = '该微信用户已注册';
const error1201 = '身份证号码已经被注册';
const error1202 = '手机号码已经被注册';
const error1203 = '注册成功';
const error1204 = '注册失败，请稍后再试';
const error1205 = '修改成功';
const error1206 = '修改失败，请稍后再试';
const error1302 = '您的问题已经提交';
const error1301 = '对不起，您的咨询次数已经用尽';

export const mackINFO = (data) => {
  switch (data) {
    case 'error1200':
      return error1200;
    case 'error1201':
      return error1201;
    case 'error1202':
      return error1202;
    case 'error1203':
      return error1203;
    case 'error1204':
      return error1204;
    case 'error1205':
      return error1205;
    case 'error1206':
      return error1206;
    case 'error1301':
      return error1301;
    case 'error1302':
      return error1302;
    default:
      return '';
  }
};

export const test = '';

