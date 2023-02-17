/* 
! Phạm vi hoạt động của biến -- SCOPE 
* BLOCK SCOPE { } - Phạm vi trong 1 ngoặc nhọn
* FUNCTION SCOPE - PHẠM vi trong function 
* LEXICAL SCOPE - 1 HÀM có thể truy cập biến nằm ở ngoài
* GLOBAL - ko nằm trong phạm vi nào cả 

! BLock Scope 
 block scope sử dụng ở trong ngoặc nhọn, và const/let có block scope ( es6)

 */
{
  const name = 'Steven';
  console.log(name);
} // name chỉ được sử dụng ở trong scope này thôi

/* 
! FUNCTION SCOPE
* function scope rộng hơn block scope ( var )
*/
function sayHello() {
  const name = 'Steven';
}

/* 
! LEXICAL SCOPE
* thằng này là thằng bệnh :))))
* lexical scope = where is this scope defined 
*/
const name = 'Steven';
function sayHello2() {
  const language = 'en';
  console.log(name);
  // ! the lexical scope of name is global scope
  function printLanguage() {
    console.log(language);
    // ! the lexical scope of language now is function scope
  }
}

/* 
! GLOBAL SCOPE
* can be accessed anywhere 
*/
