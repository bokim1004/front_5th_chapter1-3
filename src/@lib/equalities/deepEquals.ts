export function deepEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) {
    return true;
  }

  // 1. 기본 타입이거나 null인 경우 처리
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    return objA.every((item, index) => deepEquals(item, objB[index]));
  }

  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);

  //  객체의 키 개수가 다른 경우 처리
  if (keyA.length !== keyB.length) {
    return false;
  }

  return keyA.every((key) => {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    return deepEquals(objA[key as keyof T], objB[key as keyof T]);
  });
}
