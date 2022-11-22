export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // Logic chỗ vòng lặp này là gì ????
  //   Đầu tiên ta có 1 mảng lines, gồm nhiều phần tử mảng con có 3 phần tử con
  // Sau đó ta loop mảng cha, loop mảng cha sẽ ra vị trí của mảng con,
  // Sau đó destructuring mảng, gọi ra 3 vị trí của mảng bằng biến a , b , c ở vị trí index
  // Ví dụ loop lần đầu tiên, ta sẽ có mảng [ 0 , 1 , 2 ] được gán cho biến [ a , b , c ]
  // [ a , b ,c ] = [0 ,1 ,2 ]
  // Tiếp tục ta đến với logic điều kiện, nếu như mảng cha ( được truyền vào từ hàm ) có vị trí index bằng nhau ( bằng vị trí b và vị trí c) thì chọn mảng đó, và return ra tên của suqare[a]
};

// squares được truyền vào sẽ có dạng như thế này
const squares = ['null', 'null', 'null', 'X', 'X', 'X', 'null', 'null', 'null'];
// Đây, nếu như ở trong squares có 3 vị trí X nằm ở những vị trí trong lines [ 0,1,2] hoặc [3,4,5] thì logic ok
