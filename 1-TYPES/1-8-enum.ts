{
  /**
   * Enum: 상수값 관리
   */
  // JavaScript에서는 지원하지 않는다. 대체로 Object.freeze({})를 사용한다
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Friday;
  day = 100; // problem: 어떠한 숫자를 할당해도 오류가 나지 않는다(타입이 보장되지 않는다)
  console.log(day);

  /**
   * Union type으로 대체할 수 있으니 Enum을 지양하는 것이 좋다!
   */
  type DaysOfWeek = 'Monday' | 'Tuesday';
}
