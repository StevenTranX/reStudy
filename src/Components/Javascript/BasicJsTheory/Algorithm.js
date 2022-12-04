/* // ? What is a Search Algorithm ??? 

* 2 dạng tìm kiếm, Linear Seach && Binary Search 
Tìm kiếm tuyến tính và tìm kiếm nhị phần 
Linear Search là tìm từng thằng đến cuối mảng 
* Linear Search không cần yêu cầu input mảng
Binary Search là tìm kiếm nguyên 1 mảng sau đó giới hạn xuống 1 nửa mảng cho đến khi tìm ra phần tử. 
* Đối với Binary Search phải là 1 mảng sắp xếp rồi. 


*/
function binarySearch(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  let left = 0;
  let right = numberList.length - 1;
  while (left <= right) {
    // const mid = Math.trunc((left + right) / 2)
    // Có khả nảng tràn số -> recommend ở dưới
    const mid = left + Math.trunce((right - left) / 2);
    if (numberList[mid] === target) return mid;
    if (target > numberList[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// Lưu ý Binary Search rất hiệu quả khi làm việc với mảng lớn - nhiều phần tử
// Cần mảng đã sắp xếp sẵn

// ?? Sorting Algorithms
// Thuật toán sắp xếp
// * 2 thuật toán cơ bản trong sort : Quicksort và Bubblesort

// * Bubble sort : Đi so sánh từng cặp 1, ví dụ nếu a > b, thì hoán đổi vị trí a thành b, => thằng nào lớn nhất nằm ở cuối
// * Sau khi tìm phần từ lớn nhất, điều tương tự xảy ra với phần tử lớn thứ nhì, thứ 3, thứ 4
// * có 2 vòng lặp, vòng lặp đầu mảng và cuối mảng,
function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  // sorting
  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < 1; j++) {
      if (numberList[j] > numberList[j + 1]) {
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }
  return numberList;
}
// ! Quicksort
// Chọn ra 1 pivot, pivot là 1 điểm phần tử nằm giữa left và right
// Từ điểm pivot này, so sánh những phần tử lớn hơn pivot nằm bên phải, phần tử nhỏ hơn nằm bên trái

function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];
  let i = left;
  let j = right;
  while (i <= j) {
    while (numberList[i] < pivot) i++;
    while (numberList[j] > pivot) j--;
    i++;
    j--;
  }
  return i;
}
function quickSort(numberList, left, right) {
  // base condition / termination point
  // * Đệ quy
  if (left >= right) return numberList;
  const pivotPosition = partition(numberList, left, right);
  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, right, right);
  return numberList;
}

// ! Trong thực tế js đã build 1 hàm sort cho mình rồi, nên thật ra mình không cần viết các thuật toán ở trên khi đi làm
// ! Nhưng mình cũng nên hiểu cách hoạt động của bubble sort và quick sort để trả lời phỏng vấn
const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 10 } },
  { id: 2, name: 'Mark', marks: { math: 9, english: 10 } },
  { id: 3, name: 'John', marks: { math: 9, english: 10 } },
];
function sortById(studentList) {
  return studentList.sort((s1, s2) => {
    // return > 0, s1 after s2
    // return < 0, s1 before s2
    // return = 0
    return s1.id - s2.id;
  });
}
