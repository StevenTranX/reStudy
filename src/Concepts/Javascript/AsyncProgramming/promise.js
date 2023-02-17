const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Ở trên ta tạo 1 promise mới
// * ở trong hàm resolve , ta truyền giá trị nào vào trong hàm
// * thì trong hàm .then (result => console.log(result)) result ở đây là 1

// * khi chúng ta tạo promise thì cái hàm ở trong promise được chạy ngay lập tức 

const promiseRejected = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong!!!'));
    });
  });
  promiseRejected.catch(error => console.log(error))
