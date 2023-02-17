// Các phép tính trong js
// ! lưu ý phép chia
// * 1/4 = 0.25 thì dấu / là chia lấy kết quả
// * 5%1 là phép chia nhưng lấy số dư. Ví dụ 5%1 là 5 dư 2 thì kết quả ở đây là 2

// ! Phép ++ và --
// let count = 1
// let n = count++
// count++ và ++count
// ! count++
// postfix, return trước, tăng sau
// n sẽ được trả count về là = 1, sau đó mới + lên là 2
// ! ++count
// prefix, tăng trước, return sau
// count sẽ tăng trước, là 2 rồi sau đó mới gán cho n

// Các hàm có sẵn trong kiểu dữ liệu number
// Number( )
// toFixed () làm tròn
// Trong js thì không phải số thực nào cũng biểu diễn chính xác 1--%
// chỉ gần đúng mà thôi - hằng số EPSILON
// 0.1 + 0.2 === 0.3 -> false
// Số thực không so sánh = được
/*
 Độ chênh lệch nhỏ hơn hằng số EPSILON 
 * Math.abs(0.1 + 0.2 - 0.3 ) < Number.EPSILON * Math.abs là giá trị tuyệt đối 
 * Alternatively, làm tròn 0.1 và 0.2 trước sau đó mới thực hiện phép tính 
 * (0.1 + 0.3).toFixed(1) === (0.3 ).toFixed(1)
 * .toFixed sẽ đổi thành chuỗi và sau đó thực hiện so sánh chuỗi 
 ! Không phải số nào cũng được lưu chính xác trong js 
 ! Làm việc với số thực ( đặc biệt liên quan tới tiền bạc ) cần lưu ý điều này - !IMPORTANT
 ! So sánh bằng nhau dùng EPSILON hoặc toFixed() để làm tròn trước 
*/

// Some essential Math() method

/*
Math.ceil () làm tròn lên số nguyên gần nhất 
Math.floor () làm tròn xuống số nguyên gần nhất 
Math.round () làm trò tới n số nguyên gần nhất 
Math.trunc () bỏ thập phân chỉ lấy nguyên 
Math.random () ngẫu nhiên số thực 0 -> 1
Math.abs () lấy giá trị tuyệt đối 
Math.trunc () bỏ thập phân chỉ lấy nguyên 
Math.pow (x, y ) lũy thừa x^y
Math.sqrt () căn bậc 2 
! Math chỉ làm việc với number không phải dạng bigInt
 */

/* 
Math.random()
hàm này sẽ trả 1 số thực từ 0 -> 1 
random a number in range of [0,n]
n = 10 

*/
function randomNumber(n) {
  //validate argument
  if (n <= 0) return -1;
  return Math.round(Math.random() * n);
  // xử lý
  // return
}

// random a number from a to b, a < b
function randomNumber2(a, b) {
  if (a >= b) return -1;
  const random = Math.random() * b - a;
}
/* setup reduce()  */
function reduce(arr, callbackFn, initialValue) {
  // arr should be an array, callback should be a function
  // arr.length = 0 && initialValue === undefined -> throw error
  // arr.length = 0 && initialValue !== -> return initialValue
  if (Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }
  if (arr.length === 0) {
    if (initialValue === undefined)
      throw new Error('Should have initialValue when arr is empty');
    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  let startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }
  return accumulator;
}
// findMax
function findMaxI(numberList) {
  if (numberList.isArray() || numberList.length === 0) return undefined;
  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > max) max = numberList[i];
  }
  return max;
}
function findMaxReduce(numberList) {
  numberList.reduce((max, number) => (max < number ? number : max));
}
