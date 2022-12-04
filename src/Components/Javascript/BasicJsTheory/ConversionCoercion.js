/* 
Khái niệm type conversion và coercion 
type coercion : ép kiểu tự động 
type conversion : có thể tự động hoặc mình chủ động ép kiểu -> ép kiểu tường minh || explicit conversion

*/
const a = 1 + '2';
// js tự động chuyển số 1 thành string 1 -> a = 12
console.log(a);

const b = 1 - '2';
// js tự động chuyển '2' thành số 2 -> b = -1
// if ( message) {} => trong mệnh đề if thì kiểu dữ liệu message tự động chuyển đổi
// thành kiểu boolean
// hàm .toString() chuyển kiểu dữ liệu sang chuỗi
// .parseInt() => chuyển thành số

/* 
Thường có 3 kiểu chuyển đổi dữ liệu : 
    1 - Thành Boolean Boolean() , ? 
    2 - Thành String String() (not Recommend) , toString()
    3 - Thành số parseInt() - số nguyên , parseFloat() - số thực, Number()
*/
