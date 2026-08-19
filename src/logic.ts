// ĐÂY LÀ FILE BẠN CODE.
// Chỉ cần dùng: function, if/else, biến, vòng lặp, return.
// Không cần quan tâm async, arrow function (=>), regex là gì cả.

// VÍ DỤ: nhận vào 1 chuỗi gồm 2 dòng, mỗi dòng 1 số, trả về tổng 2 số đó.
// Ví dụ input:
//   "3
//    5"
// Kết quả trả về: "8"
function tongHaiSo(text: string): string {
  // Bước 1: tách chuỗi thành từng dòng, ký tự "\n" là ký tự xuống dòng.
  // Kết quả là 1 mảng (array), ví dụ: ["3", "5"]
  const cacDong = text.split("\n");

  // Bước 2: lấy từng dòng ra, đang là kiểu string (chuỗi).
  const dong1 = cacDong[0];
  const dong2 = cacDong[1];

  // Bước 3: đổi chuỗi thành số bằng hàm Number().
  const so1 = Number(dong1);
  const so2 = Number(dong2);

  // Bước 4: cộng 2 số lại như bình thường.
  const tong = so1 + so2;

  // Bước 5: đổi số ngược lại thành chuỗi để return (vì hàm yêu cầu trả về string).
  return "" + tong;
}

function startWith(source: string, search: string):boolean{
  for (let i = 0; i < search.length; i++) {
    if(search[i] !== source[i]) return false;
  }
  return true;
}


function removeDuplicate(listUrl: string):string {
  const text = listUrl.split('\n');
  const unique = Array.from(new Set(text));
  return unique.join('\n');
}

function soAm(num:string) : string {
  const tach = num.split('\n');
  const n = Number(tach[1]);
  return (n < 0) ? "so Am" : "So Duong";
}

function reverseString(strs:string) : string {
  let tach = strs.split(' ');
  let string1 = tach[1];
  let array = string1.split('');
  let i = 0;
  let j = array.length - 1;
  while (i<j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  return array.join('');
}

function LengthString (strs: string) :string {
  const tach = strs.split(' ');
  let string1 = tach[1];
  const array = string1.split('');
  let count = 0;
  for (let i = 0; i<array.length; i++) {
    count++;
  }
  return count + "";
}

function lowerCase(strs: string): string {
  const tach = strs.split(' ');
  let string1 = tach[1];
  return tach[1].toLowerCase();
}

function upperCase(strs:string): string {
  return strs.toUpperCase();
}


function ChanLe(num:string) : string {
  const tach = num.split(' ');
  let n = Number(tach[1]);
  return (n%2===0) ? "Chan" : "Le";
}


function Max(nums:string) :string {
  const tach = nums.split(' '); // "max,0,1,2,3,4,5"
  const cut = tach.slice(1);    // '0,1,2,3,4,5'
  const array = [];             
  for (let i = 0; i<cut.length; i++) {
    array.push(Number(cut[i]));
  }
  let maxValue = array[0];
  let maxIndex = 0;
  for (let i = 1; i<array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
      maxIndex = i;
    }
  }
  console.log('max ', maxValue);
  let res = '';
  res = res + 'Max: ' +   maxValue + ' Max Index: ' + maxIndex;
  
  return res;
}


function ContainDuplicate(nums:string) : string {
  const tach = nums.split(' ') // "ContainDuplicates,2, 4, 5, 4, 6, 4, 2"
  const cut = tach.slice(1);   //  2,4,5,4,6,4,2
  const array = [];
  for (let i = 0;i<cut.length; i++) {
    array.push(Number(cut[i]));
  }
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++ ) {
      if (array[i] === array[j]) {
        return "true";
      }
    }
  }
  return "false";
}


// Hàm này nhận vào tin nhắn người dùng gửi tới bot (message),
// và phải TRẢ VỀ (return) câu bot sẽ trả lời.
// Nếu return chuỗi rỗng "", bot sẽ im lặng, không trả lời.
function getReply(message: string) {
  if (startWith(message, 'ContainDuplicates')) {
    return ContainDuplicate(message);
  }

  else if (startWith(message, 'max')) {
    return Max(message);
  }

  else if (startWith(message, 'hoa')) {
    return upperCase(message);
  }

  else if (startWith(message, 'thuong')) {
    return lowerCase(message);
  }

  else if (startWith(message, 'chanle')) {
    return ChanLe(message);
  }

  else if (startWith(message, 'doDai')) {
    return LengthString(message);
  }

  else if (startWith(message, 'daoNguoc')) {
    return reverseString(message);
  }

  else if (startWith(message, 'So Am Duong') && message.includes('\n')) {
    return soAm(message);
  }

  // Nếu trong tin nhắn chứ đầu tiên là 'loc trung'
  // gọi hàm lọc trùng
  else if (startWith(message, 'loc trung')) {
    return removeDuplicate(message);
  }

  // Nếu tin nhắn có chứa dấu xuống dòng,
  // coi như người dùng đang nhập 2 số để cộng.
  else if (message.includes("\n")) {
    return tongHaiSo(message);
  }

  else if (startWith(message, 'dem')) {
    const tach = message.split(' ');
    console.log('tach', tach);
    const n = Number(tach[1]);
    let res = '';
    for (let i = 1; i <= n; i++) {
      res = res + i.toString() + "\n";
    }
    return res;
  }

  else if (startWith(message, "nguoc")) {
    let tach = message.split(" ");
    const n = Number(tach[1]);
    let res = '';
    for (let i = n; i>=0; i--) {
      res += i.toString() + '\n';
    }
    return res;
  }

  else if (message === "phong") {
    return "depTrai";
  }

  else if (message === "hoTen") {
    return "PPP";
  }

  else if (message === "xin Chao") {
    return "hello";
  }

  return "Khong hop le";
}


export { getReply };
