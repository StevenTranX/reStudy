export default function statisticStr(str) {
  if (str === '') return {};
  const statistics = {};
  str
    .split(' ')
    .filter((x) => x !== ' ')
    .forEach((word) => {
      if (statistics[word]) {
        statistics[word] += 1;
      } else {
        statistics[word] = 1;
      }
    });
  return statistics;
  // Từ chuỗi sang mảng rồi đếm
  // * Trong trường hợp user điền vào quá nhiều space giữa phần tử
  // * thì ta phải filter và loại bỏ đi các space như trên
}
const string = 'Alo alo alba trap trap trap';
console.log(statisticStr(string));
// 'Steven stuck dick rider '
// chuyển sang mảng
// Looop và đếm
