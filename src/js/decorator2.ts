export function say(arr: Array<string>) {
  return function (tag: any, protoName: string, describe: any) {
    return {
      ...describe,
      value(arg) {
        arr.forEach((i) => {
          console.log(i + "\n");
        });
      },
    };
  };
}
