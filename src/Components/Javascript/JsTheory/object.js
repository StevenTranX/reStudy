/* 
! Object revision 
* Chọn value từ object : Cú pháp 
student.name 
student[name]
Dynamic key : student[key]
? vì sao trong object xài const vẫn thay đổi được giá trị object 
*  - Vì ta đang thao tác với những thuộc tính của object chứ không 
* gán bằng object với 1 object khác 
? làm sao để xóa 1 property trong obj 
* dùng delete student.name -> xóa thuộc tính name
*/
// curly braces, square brackets
const student = {
  name: 'Steven',
  dateOfBirth: 1995,
  isStudent: true,
  calAge: (dateOfBirth) => {
    return 2022 - dateOfBirth;
  },
};
delete student.name;

/* 
! Primitive type/ Value type && Reference Type 
( Tham trị và tham chiếu )
Primitive type là giá trị nguyên thủy 
Reference Type dùng cho các kiểu dữ liệu phức tạp như object, array, function 
Value type dùng cho các kiểu dữ liệu đơn giản CÒN LẠI 

* Hãy tưởng tượng Primitive Type là 1 cái box 
* và cái box chứa các Primitive Type khi khai báo 
  const name = 'Steven'
  ! thì 'Steven' bây giờ được bỏ vào trong cái hộp đó 
* Tuy nhiên, Reference Type khi ta khai báo
* ví dụ student = {
    name : 'Steven' ,
    age : 22,
*}
    ! thì những property trong biến student không được bỏ vào trong hộp 
    ! mà được lưu vào trong 1 địa chỉ vùng nhớ trên RAM, có 1 mã số nào đó 
    ! và địa chỉ này mới có các property của biến student mà ta khai báo 

*/
const a = 5;
let b = a;
b = 10;
// Vậy a bây giờ là bao nhiêu ????
// ! Vẫn là bằng 5 vì áp dụng tham trị và tham chiếu
// * a và b là 2 giá trị riêng biệt - primitive type

const student1 = {
  name: 'Alo Alo',
};
const student2 = student1;
student2.name = '????';
// ?? Vậy thì student2.name bây giờ sẽ có giá trị gì
// * student2.name = 'Alo Alo' vì khi student2 = student1
// * lúc này student2 đã copy address của student1 trên bộ nhớ
// * Nên thay đổi student2 cũng là student1
// ! Khi làm việc với array hoặc object ta phải clone trước rồi mới thay đổi

// =========================> <================================================================

//  ! Pass by Value && Pass by Reference

// ?? Kiểm tra có key trong object hay không ?
// dùng operator in
// 'name' in student -> true

// ?? Ngoài spread operator thì còn cách nào để clone obj
// * const copyStudent = Object.assign({}, student, student2)
// * Object.asssign( sẽ tạo 1 obj {} mới có property của student và student 2)

// ?? Vậy làm sao để deep clone object ( vì ... chỉ clone 1 tầng )
// * Phải tự clone vào 1 tầng trong nữa
// ! const cloneStudent = { ...student, mark : {...student.mark}}

// ?? Nếu quá nhiều tầng ( từ 5 tầng ) thì làm sao
// * dùng thư viện  immer

// =========================> <================================================================

/* 
?? Trường hợp muốn duyệt keys trong obj ta có những cách nào 
* 1. Dùng Object.keys(obj) - sau đó dùng for để loop nhưng cái key này 
* 2. dùng Object.keys(obj).forEach(key => { })
* 3. Dùng ( for in )  - for ( let key in student ) {} - recommended 
*/
