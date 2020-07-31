/*
 * @Author: your name
 * @Date: 2020-04-20 10:01:41
 * @LastEditTime: 2020-07-31 10:57:16
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
// import Providejshh from './Providejshh';
import './test4.ts';
import './test555.ts';

setTimeout(() => {
  import('./good').then((e) => {
    e.default();
  });
}, 500);
if (module.hot) {
//   module.hot.accept('./good', () => {
//     console.log('godd刷新');
//     // good();
//   });
  module.hot.accept();
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
console.log(Providejshh);
test.say();
