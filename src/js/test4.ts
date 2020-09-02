interface dome{
  readonly name:string;
  sayName(time:string):string;
}
interface dome1{
  name:string;
  [popName:string]:string | number | Function;
  sayName(time:string):string;
}

//字面量的类型指定的话，指定要跟定义的一样，如果需要扩展需要改接口
//或者接口已经定义可以扩展类型
const go:dome = {
  name:"好玩呢",
  sayName(time:string):string{
    return this.name + time;
  }

}
const go1:dome1 = {
  name:"好玩呢",
  sayName(){
    return "5";
  },
  xoxo:1,
  xpxp2:5
}

//类实现接口是可以随便扩展属性 ,只要该有的都有就行，在属性也不需要改接口
class gogo implements dome{
  name = "还行";
  sayName(time:string):string{
    return this.name + time;
  }
  haha(){
    this.sayName(new Date().toString());
  }
}

function so():dome{
  return new gogo();
}
