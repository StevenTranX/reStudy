/* 
Kiến thức cần nhớ của string 
! Nối chuỗi 
! Các method thông dụng của chuỗi 

* string essential methods 

- Nối chuỗi : recommend dùng literal template ``
- Duyệt chuỗi -> dùng loop 
- Tìm vị trí trong chuỗi -> .indexOf và lastIndexOf. 
- Độ dài chuỗi -> .length 
- Kiểm tra có chứa chuỗi con hay không 
    .startsWith
    .includes 
    .endsWith 
- Lấy ký tự tại 1 vị trí 'Steven'[0] => 'S'

* Substring & Slice 
* Slice ( recommend )
slice( start, end )
substring ( start, end)
! cả 2 hàm này đều dùng để lấy chuỗi con 
! slice có hỗ trợ số âm, hàm sẽ đếm ngược trở về trước 
! ngược lại hàm substring sẽ đổi số âm thành số 0 
'Javascript is fun'.slice(0,4) => 'Java' - Không lấy vị trí số 4 
.slice(2) -> chỉ lấy bắt đầu từ vị trí 2, còn end không điền không tính 
.slice(-3) -> lấy bắt đầu từ cuối chuỗi vị trí 3 -> fun
* Substring 
! giống slice, khác hoạt động khi làm số âm -> chuyển qua số 0 

* Replace and replaceAll 
replace ( searchFor, replaceWith) replace cho ông nội đầu tiên
replaceAll ( searchFor, replaceWith) replace cho toàn bộ string
* .split() and .join()
! tách chuỗi thành mảng -> Split ()
! join mảng thành chuỗi 
const name = 'Steven Tran'
name.split(' ') -> ['Steven','Tran']
['Steven', 'Tran'].join('')
! nếu không truyền gì vào hàm join, hàm sẽ tự phân tách = dấu phẩy

*/
export function capitalizeString(string) {
  if (typeof string !== 'string') return;
  if (string.length === 0) return '';
  let firstLetter = string[0].toUpperCase();
  let rest = string.slice(1).toLowerCase();
  return `${firstLetter}${rest}`;
}
console.log(capitalizeString('I love you BaBe'));

export function checkValidEmail(email) {
  if (email === '') return false;
  if (email.includes('.gmail.com')) return true;
  return false;
}

console.log(checkValidEmail('steven.gmail.com'));
function truncate(text, maxlength) {}
