let a: any = "string";

//* any là type bất kỳ, như ở trên thì a gán lại với kiểu dữ liệu nào cũng được

//* điều này có thể giúp chúng ta sửa nhanh khi ts báo lỗi, ngược lại bất lợi là chả khác gì js

function handleError(error: string): never {
  throw new Error(error);
}

handleError("Lỗi rồi");

function loopForever(): never {
  while (true) {
    console.log("Hello");
  }
}

// * Đây là 2 trường hợp phổ biến của type never - type never là dữ liệu không có gì cả

// * Type never sẽ gặp nhiều ở 2 trường hợp đó là function throw lỗi, hoặc function hay biểu thức không bao giờ trả ra giá trị
