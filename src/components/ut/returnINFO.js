/**
 * Created by Benson on 2017/8/8.
 */

const error1201 = '身份证号码已经被注册';
const error1202 = '手机号码已经被注册';
const error1203 = '注册成功';
const error1204 = '注册失败，请稍后再试';
const error1205 = '修改成功';
const error1206 = '修改失败，请稍后再试';

export const mackINFO = (data) => {
  switch (data) {
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
    default:
      return '';
  }
};

export const test = '';

