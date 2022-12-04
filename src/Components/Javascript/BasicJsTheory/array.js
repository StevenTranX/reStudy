// ! Array Basic
// ?? Làm sao để truy xuất phần tử trong mảng
const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(board[0]); // [1,2,3]
console.log(board[0][0]); // 1
// * thì ta dùng board[0] // kq : [1,2,3]
// ? vậy làm sao lấy phần tử mảng con trong 1 mảng lớn
// * dùng 2 lần square bracket board[0][0] => kq : 1

// ---------------------------------------------------------------
// ! Essential Array Object - Những hàm Array viết sẵn
/* 
* Static Methods 
Array.isArray([1,2,3]) true 
* Instance Methods 

! Nhóm hàm kiểm tra có tồn tại phần tử hay không 
 + every( callback ) Kiểm tra tất cả phần tử thỏa điều kiện
 + some( callback )Kiểm tra ` phần tử thỏa điều kiện
 + indexOf ( searchElement ) Tìm vị trí đầu tiên của phần tử 
 + lastIndexOf (searchEl) Tìm vị trí cuối của phần tử 
 + find( callback ) -> tìm phần tử thỏa điều kiện
 + findIndex( callback ) -> tìm index thỏa điều kiện

 ! Nhóm hàm thêm xóa phần tử 
 + push () Thêm cuối mảng
 + pop () Xóa cuối mảng
 + shift () xóa đầu mảng
 + unshift () thêm cuối mảng
 + splice () Xóa/ Thêm giữa mảng 

 ! Nhóm hàm hay sử dụng 
 + forEach (callback) Duyệt
 + map (callback) Biến đổi mảng
 + filter (callback) lọc mảng theo điều kiện 
 + slice ( start , end ) lấy mảng con 
 + reduce () Duyệt mảng và tính toán cho ra kết quả cuối cùng 

 ! Nhóm khác 
 + fill ( value , start = 0 , end = arr.length) : fill value từ start tới end 
 + join () biến mảng thành chuỗi 
 + concat ( ) nối mảng 
 + reverse () đảo ngược mảng
 + sort () sắp xếp mảng
*/

// ----------------------------------------------
/* 
! Array destructuring 
const numberList = [ 1,2,3,4,5 ]
* const [ first , second , third , ...rest ] = numberList
first -> 1 
second -> 2 
third -> 3
rest -> 4,5
?? Vậy tại sao phải clone 1 array 
* Vì theo những kiến thức của tham trị và tham chiếu, 
* Nếu chúng ta thao tác trên 1 array khác dựa vào array có sẵn, thì chúng ta đang trỏ tới cùng 1 địa chỉ vùng nhớ 
* Thì thay đổi array đó có thể thay đổi array gốc nên chúng ta phải clone array 

*/
const originArray = [1, 2, 3, 4, 5];
const cloneArray = [...originArray]; // [1,2,3,4,5]

/* 
! Loop over an Array - Duyệt mảng 
ES5 : for i - forEach
* array.forEach( (callback , index, array) => {})
ES6 : for (let number of numberList) { 
    console.log(number)
}
Thông thường mình sẽ dùng forEach và for...of 
! Những for of sẽ không lấy được index 
* Trong trường hợp cần index hoặc nối đuôi với nhau thì nên dùng forEach
* Nhưng khi muốn loop custom, muốn loop độ dài tùy ý, biến chạy tùy ý thì dùng for .... i 


! Tìm phần tử 
every ( callback ) tất cả phần tử có thỏa điều kiên -  sẽ trả ra true false 
some ( call back ) true false - nếu có 1 phần tử thỏa điều kiện

indexOf ( callback)
lastIndexOf ( callback) 

find(x) -> trả về GIÁ TRỊ thỏa điều kiện 
findIndex (index) => trả về INDEX thỏa điều kiện

! Callback function 
là 1 function trong tham số của 1 function khác 
function ( callback ) {

}
* callback này là 1 function
*/
function sayHello(callback) {
  callback();
}
const testHello = () => {
  console.log('Hello');
};
console.log(sayHello(testHello));

/* 
?? Tự tạo viết hàm find = cách sử dụng callbackFn
*/
const classicFind = (array, callback) => {
  if (!Array.isArray(array)) return undefined;
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (callback(item)) return item;
  }
  return undefined;
};

console.log(classicFind([-1, -2, -3, 4], (x) => x > 0)); // 4

/* 
! map() - ánh xạ trong toán học 
* Biến đổi phần tử này theo phần tử khác = map , transform .... 
! 1 số lưu ý 
* Số lượng phần tử không thay đổi 
* Hàm map sẽ trả về 1 mảng mới ko ảnh hưởng tới mảng cũ 
*/

// ! filter ( ) - hàm lọc
/* 

*/
[1, 2, 3, 4, 5].filter((x) => x % 2 && x < 10);
// kết quả 2,4

// ! sort(compareCallback) - hàm lọc
// * hàm này dùng để sắp xếp phần tử theo điều kiện mong muốn
/* 
! Lưu ý 
Nếu là null / undefined thì auto được đẩy xuống cuối mảng, null trước, undefined sau 
nếu compareCallback không được cung cấp, thì phần tử chuyển về string để so sánh 
* compareCallback( a , b )
* hàm sort này thay đổi mảng hiện tại, không tạo mảng mới 
*/

// ! reduce ()
// * dùng để duyệt mảng và tính toán để có 1 kết quả nào đó
// syntax
// * reduce ((accumulator - callback , initialValue, index ) => {})
/* 
! Nếu initialValue không được cung cấp, thì giá trị đầu tiên trong array sẽ được làm initialValue
! Nếu array rỗng && initialValue không có -> hàm sẽ trả ra lỗi 
*/
const array1 = [2, 4, 6];
array1.reduce((sum, number) => {
  return sum + number;
}, 0);

// * 0 là initialValue
// * sum là tên hoặc kết quả mình muốn
// * number là những phần tử mình muốn tính toán
// * hàm reduce ở trên là mình muốn tính tổng, sum là kết quả cộng dồn của number và giá trị bắt đầu = 0
