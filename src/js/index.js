/*
 * @Author: your name
 * @Date: 2020-04-20 10:01:41
 * @LastEditTime: 2020-04-29 16:38:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\src\js\index.js
 */
import test, { age } from './test';
import tstest from './tstest.ts';
import '../css/test1.css';
import '../css/test.less';

console.log(test, age);


const av = () => {
  let a = 55;
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
