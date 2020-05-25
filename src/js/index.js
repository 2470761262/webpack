/*
 * @Author: your name
 * @Date: 2020-04-20 10:01:41
 * @LastEditTime: 2020-05-25 20:15:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\src\js\index.js
 */
import test, { age } from './test';
import tstest from './tstest.ts';
import good from './good';
import hello from './hello';
import '../css/test1.css';
import '../css/test.less';

if (module.hot) {
  module.hot.accept('./good', () => {
    console.log('godd刷新');
    // good();
  });
}
console.log(test, age);
good();
hello();
const av = () => {
  let a = 5555;
  a += 5;
  return a;
};
av();

const cc = {
  gs: [{
    a: 1,
    b1: 2,
    c: 5
  }]
};
tstest.typeHellow('hello wolrd');
console.log(cc, 3646434);
console.log(process.env.isNow, 'process.env.isNow');
// test.say()
