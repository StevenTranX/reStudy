// * Interface giống như khai báo 1 object

interface State {
  name: string;
  isLoading: boolean;
}

// * Sau đó ta có thể khai báo 1 object có kiểu dữ liệu giống state như

let state1: State = {
  name: "steven",
  isLoading: false,
};

// * Ngoài ra, ta có thể khai báo thêm thuộc tính cho interface bằng cách khai báo lại

interface State {
  age?: number;
  // dấu hỏi để biến kiểu dữ liệu thành number | undefined
}

let state2: State = {
  name: "randy",
  isLoading: true,
  age: 25,
};

// * interface cũng có thể kế thừa từ những interface cha khác

interface Person {
  name: string;
  age: number;
}

interface Doctor extends Person {
  // Bây giờ interface Worker đã có các thuộc tính của user, ta có thể khai báo thêm
  role: string;
}

let worker: Doctor = {
  name: "Steven",
  age: 20,
  role: "constructor worker",
};
