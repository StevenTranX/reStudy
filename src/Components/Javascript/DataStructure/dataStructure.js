/*
 * Đây là 1 chủ đề rất hay, đây là 1 bộ môn học ở University
 * This is compulsory for a programmer
 * 
 ?? Cấu trúc dữ liệu là gì ? 
 -> Cũng như là number, string, nhưng những kiểu mình học trong 
 -> js là BUILD IN DATA TYPES 
 ! Build in data types chia ra làm 2 loại, primitive và reference ( Tham trị ,tham chiếu)

 ?? Với mỗi cấu trúc dữ liệu, mình cần quan tâm điều gì ?
 * 1 cấu trúc dữ liệu đó là gì 
 * 2. Thao tác cần có 
 * 3. Cài đặt ntn ?

 */

/* 
 ! LINKED LIST 
 * Dữ liệu dạng danh sách liên kết
 * Mỗi phần tử có tham chiếu tới phần tử tiếp theo : NEXT
 * Mỗi phần tử có chứa dữ liệu gọi là data ( number, string ....)
 * PHần tử đầu tiên là head & vice versa
 */

function createLinkedList() {
  let head = null;
  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return;
    }
    newNode.next = head;
    head = newNode;
  }
  function printList() {
    if (head == null) return;
    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  return {
    insertHead,
    printList,
  };
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
