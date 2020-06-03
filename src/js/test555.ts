interface xixi {
   name:string;
   say():void;
}
interface haha {
   age:string;
   say():void;
}

interface haha1 extends xixi {
   age:string;
   say():void;
}


function use( xiao:xixi | haha){
   

  //  if(isxixi(xiao)){
  //   console.log(xiao.age,xiao.name);
  //  }else{
  //   console.log(xiao.age,xiao.name);
  //  }
  if(isxixi(xiao)){
    console.log(xiao.age,xiao.name);
  }
 
}

function isxixi(obj: xixi | haha ): obj is haha1{
  return  true;//(obj as haha1).name !== undefined;
}


function join<T>(obj:Array<string>,obj1:T) : Array<string>{
    console.log(obj,obj1);
    return Object.assign({},obj,obj1);
}

console.log( join<number>(["1"],1));