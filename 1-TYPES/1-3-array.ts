{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {
    // readonly: 함수 내에서 fruits 배열을 수정하거나 추가할 수 없음.
  }

  // Tuple: 서로 다른 타입을 가질 수 있는 타입
  // interface, type alias, class 로 대체해서 사용하는 것이 좋다
  let student: [string, number];
  student = ['name', 100];
  student[0]; // name
  student[1]; // 100
  // index로 값을 확인해야하기 때문에 불편함
  // object 타입으로 student.name, student.age과 같이 쓰는 것을 더 권장한다

  // 구조분해 할당을 사용해서 쓸 수 있지만, 데이터를 정의하는 곳이 아니라 사용하는 곳에서 결정해야함
  const [name, age] = student;
}
