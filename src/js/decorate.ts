import { say } from "./decorator2";
interface Animal {
  name: string;
  eat(): void;
}
class Dog implements Animal {
  name: string;
  constructor() {}
  @say([
    "今天就吃老八秘制小汉堡",
    "即实惠，还管饱。凑豆腐，腐掳，加柠檬",
    "你看这汉堡做的行不行",
  ])
  eat() {
      console.log("5555");
  }
}
const dog = new Dog();
dog.eat();

