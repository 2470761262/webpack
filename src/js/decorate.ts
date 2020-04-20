

class Hello {
    @DefaultValue("world")
    greeting: string;
}
function DefaultValue(value: string) {
    return function (target: any, propertyName: string) {
        target[propertyName] = value;
    }
}
console.log(new Hello().greeting);// 输出: world