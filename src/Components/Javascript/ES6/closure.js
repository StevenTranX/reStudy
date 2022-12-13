// Closure là gì

// Closure là 1 innerFunc có sử dụng biến bên ngoài của outer

// A closure is a function having access to the parent scope, even after the parent function has closed

function createCounter(initValue) {
  let value = initValue || 0;
  function increase() {
    value++;
  }
  function decrease() {
    value--;
  }
  function getValue() {
    return value;
  }
  return {
    increase,
    decrease,
    getValue,
  };
}
// hàm incrase , decrease, getValue là closure

const counter1 = createCounter(0);
counter1.increase();
counter1.decrease();
counter1.getValue();

// ngay cả khi createCounter đã chạy xong rồi, thì ta vẫn có thể tiếp tục gọi được cả closure bên trong
