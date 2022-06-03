{
  /**
   * JavaScript
   * primitive(원시타입-7가지): number, string, boolean, bigint, null, undefined, symbol
   * Object: function, array ...
   */

  // number: -,+, 소수점 가능
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean: true or false
  const boal: boolean = true;

  // undefined: 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 💩 name에 undefined만 할당할 수 있음
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null: 명확하게 비어 있는 것을 의미
  let person: null; // 💩 person에 null만 할당할 수 있음
  let person2: string | null;

  /**
   * someType | undefined vs someType | null
   * 보편적으로는 "someType | undefined" 이렇게 더 많이 쓴다
   * 특정타입이거나 아직 결정되지 않았거나
   * null은 값이 있거나 없거나
   */

  // unknown: 💩 어떤 종류의 데이터가 담길 지 알 수 없는 타입
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any: 💩 어떤 것이든 담을 수 있는 타입
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩 undefined밖에 할당할 수 없다

  // never: 함수에서 절대 리턴되지 않는 경우
  function throwError(message: string): never {
    // 1. error를 던지는 경우
    // message -> server(log)
    throw new Error(message);

    // 2. while(true)와 같이 끝나지 않는 경우
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object: 원시타입을 제외한 모든 object타입을 담을 수 있다
  let obj: object; // 💩 가능하면 object도 어떤 타입인지 명시해서 쓸 것
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
