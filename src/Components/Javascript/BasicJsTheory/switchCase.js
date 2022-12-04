function checkError(error) {
  let message = '';
  switch (error) {
    case 'E01': {
      message = '';
      break;
    }
    // Nên bọc trong ngoặc case vì lúc này biến chỉ nằm trong scope
    case 'E02':
      message = '';
      break;
    default:
      message = 'Something went wrong';
      break;
  }
  return message;
}
checkError('E01');
function checkError2(error) {
  let errorMap = {
    E01: 'Invalid password or email',
    E02: 'Too many attemps',
    E03: 'Missing data',
  };
  return errorMap[error] || 'Something went wrong';
}
checkError2('E01');
//REFACTOR
