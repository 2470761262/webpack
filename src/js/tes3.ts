//接口定义可选参数，而外扩展参数,只读参数
//而外扩展定义的参数需要比完全确定的参数类型大或者一样
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: string | number;
}
let tom: Person = {
  id: 3535, //只读类型在第一次赋值之后不能再次修改
  name: "Tom",
  age: 25,
  sg: 5, //这里是而外定义的参数 类型需要比已经确定大或者一样
};
console.log(tom);

let args = {};

//定义类数组  typescript 提供默认 IArguments, NodeList, HTMLCollection
interface IsArg {
  [index: number]: number;
  length: number;
  callee: Function;
}

function sum(a, b, c) {
  let arg: IArguments | IsArg = arguments;
  console.log(arg);
}
sum(1, 2, 3);

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (str: string, sub: string): boolean {
  return false;
};

//默认可选参数 设置默认值，暂未知可选参数如何设置默认值
let defaultArg = (firstName: string = "hello", lastName?: string) => {
  //骇客一下 暂未知可选参数如何设置默认值
  if (!lastName) {
    lastName = "ssss";
  }
  console.log(firstName, lastName);
};

defaultArg("22");

//剩余参数
function push1(array, ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}
//或者指定剩余参数类似
function push(array: Array<any>, ...items: Array<string | number>) {
  items.forEach((element) => {
    array.push(element);
  });
  console.log(array, "array");
}
push([1, 2], "3", "2", "2", 2, 5);

//返回类型也可以指定联合类型,但是返回的时候需要指定返回的类型
function result(str: string | number, str2: string | number): string | number {
  if (typeof str == "string" || typeof str2 == "string") {
    return (str as string) + (str2 as string);
  }
  return (str as number) + (str2 as number);
}
console.log(result(5, "1"));
console.log(result(5, 1));

interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function getName(animal: Cat | Fish) {}
class CatCat {
  name: 1;
}
class FishFish extends CatCat {
  age: 55;
}
/**
 * function ttts1(cls:CatCat){}
 * ttts1(new FishFish); true
 * ttts1(new CatCat); true
 */
//------------------------------
/**
 * function ttts1(cls:FishFish){}
 * ttts1(new FishFish); true
 * ttts1(new CatCat); false
 */
interface go {
  gg: number;
}
function sts(ss: go) {
  console.log(ss);
}
//  其实只是定义了一个形状，只要满足了接口的形状就行，但是这样写跳过了类型定义的意义
// let aaa = { gg: 11, dgd: 22 };
//  sts(aaa);
sts({ gg: 11, dgd: 22 } as go);

//类型推断 当 Animal 兼容 Cat 时，它们就可以互相进行类型断言了：
interface Animal22222222 {
  name: string;
}
interface Cat222222222 {
  name: string;
  run(): void;
}
function testAnimal(animal: Animal22222222) {
  return animal as Cat222222222;
}
function testCat(cat: Cat222222222) {
  return cat as Animal22222222;
}
//任何类型可以推断为any
//any也可以被推断为任何类型
//这样是可以使用双重断言 双重断言的接口10有八九是错误的结果
interface Animal222222223 {
  name: string;
}
interface Cat222222223 {
  age: number;
}
let ss3333x: Animal222222223 = {
  name: "34",
};
//除非迫不得已 不要使用双重断言
console.log(((ss3333x as any) as Cat222222223).age, "undefined"); //undefined
// 断言不是类型转换 不会改变类型
function toBoolean(something: any): boolean {
  return something as boolean;
}
toBoolean(1);
// 返回值为 1 真的需要改变类型结果Boolean(something) 使用 string number 等方法来改变

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: "tom",
};
let tomg = animal as Cat;
console.log(tomg);
// const tom1 = getCacheData("tom") as Cat;
// console.log(tom1, "cat");
