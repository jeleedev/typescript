{
  /**
   * Type Assertions 💩 (타입 표명.단언)
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // 만약 2를 return 한다면..? "undefined"
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // TypeError: wrong.push is not a function

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // (!) 값이 있음을 장담할 때
}
