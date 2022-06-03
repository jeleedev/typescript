{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TypeScript ✨
  function FetchNum(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
    console.log('----------');
  }
  printName('Steve', 'Jobs');
  printName('Steve');
  printName('Anna', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter: 동일한 타입의 param을 갯수에 상관없이 전달할 때
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
