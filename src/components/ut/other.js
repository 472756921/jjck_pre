/**
 * Created by Benson on 2017/8/8.
 */

export const getSex = (sexNUm) => {
  let sex = '未知性别';
  if (sexNUm === 1) {
    sex = '男';
  } else if (sexNUm === 0) {
    sex = '女';
  }
  return sex;
};

export const sex = '';
