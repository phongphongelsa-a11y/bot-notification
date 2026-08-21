// FILE NÀY DÀNH ĐỂ BẠN CODE MENU LUYỆN THUẬT TOÁN.
// Chỉ cần dùng: function, if/else, object, mảng, vòng lặp - y như logic.ts.
// Không cần async/await, arrow function, hay regex.
//
// LƯU Ý: đây là bot Telegram, mỗi lần chỉ nhận được 1 tin nhắn rồi trả lời
// ngay, KHÔNG thể dùng prompt-sync để "chờ" người dùng gõ tiếp (prompt-sync
// đọc từ console của máy chạy bot, không đọc được tin nhắn Telegram).
// Vì vậy ta phải tự nhớ người dùng đang ở "bước" nào bằng trangThaiNguoiDung,
// và chờ tin nhắn TIẾP THEO của họ để lấy input.

// NƠI LƯU TRẠNG THÁI CỦA TỪNG NGƯỜI DÙNG
// Khóa (key) là chatId, giá trị là trạng thái của người đó.
// Tạm để kiểu "any" (không kiểm tra chặt) để bạn tự do định hình dữ liệu.

const trangThaiNguoiDung: { [chatId: string]: any } = {};


// DỮ LIỆU MENU: dùng object để lưu.
// Muốn thêm node mới, copy 1 object trong mảng rồi đổi tên node + danh sách bài.

const danhSachNode = [
    {
        ten: 'HashTable',
        cacBai: [
            {ten: 'Two Sum'},
            {ten: 'Valid Anagram'},
            {ten: 'Contains Duplicates'}
        ],
    },

    {
        ten: 'TwoPointer',
        cacBai: [
            {ten: 'Reverse Array'},
            {ten: 'Merge Sorted Array'},
            {ten: 'Move Zeroes'}
        ]
    }

];

// In ra danh sách node, đánh số 1, 2, 3...
function taoMenuNode(): string {
  let text = "===== MENU =====\n";
  for (let i = 0; i < danhSachNode.length; i++) {
    text = text + (i + 1) + ". " + danhSachNode[i].ten + "\n";
  }
  text = text + "Nhap so de chon:";
  return text;
}

// In ra danh sách bài của 1 node, đánh số 1, 2, 3...
function taoMenuBai(node: number): string {
  const cacBai = danhSachNode[node - 1].cacBai;
  let text = "===== " + danhSachNode[node - 1].ten + " =====\n";
  for (let i = 0; i < cacBai.length; i++) {
    text = text + (i + 1) + ". " + cacBai[i].ten + "\n";
  }
  text = text + "Nhap so de chon bai:";
  return text;
}

// Tin nhắn mời nhập input, tùy theo bài đã chọn.
function layInputPrompt(node: number, bai: number): string {
  if (node === 1 && bai === 1) {
    // HashTable -> Two Sum
    return "Nhap du lieu cho Two Sum:\n" +
      "Dong 1: mang so, cach nhau boi dau cach.\n" +
      "Dong 2: target.\n" +
      "Vi du:\n2 7 11 15\n9";
  }

  return "Bai nay chua co huong dan nhap. Cu nhap thu roi gui.";
}

// Chạy đúng thuật toán theo node + bài đã chọn, dùng text người dùng vừa gửi.
function xuLyChonBai(node: number, bai: number, text: string): string {
  if (node === 1 && bai === 1) {
    // HashTable -> Two Sum
    return runTwoSum(text);
  }

  return "Bai nay chua duoc code. Nhan 'alg' de quay lai menu.";
}

// text gồm 2 dòng: dòng 1 là mảng số, dòng 2 là target.
// Ví dụ text:
//   "2 7 11 15
//    9"
// Kết quả trả về: "[0, 1]"
function runTwoSum(text: string): string {
  const cacDong = text.split("\n");

  // Dòng 1: mảng số, cách nhau bởi dấu cách.
  const mangSoChuoi = cacDong[0].split(" ");
  const nums = [];
  for (let i = 0; i < mangSoChuoi.length; i++) {
    nums.push(Number(mangSoChuoi[i]));
  }

  // Dòng 2: target.
  const target = Number(cacDong[1]);

  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (seen.has(diff)) {
      const chiSoDau = seen.get(diff);
      return "[" + chiSoDau + ", " + i + "]";
    }
    seen.set(nums[i], i);
  }

  return "Khong tim thay cap so nao co tong bang target";
}

function runValidAnagram(s: string, t: string): string {
  // TODO: code sau
  return "Chua code";
}


// ============================================
// HÀM CHÍNH - xử lý tin nhắn liên quan tới menu.
// Nếu tin nhắn không liên quan gì tới menu, return "" để bot còn
// xử lý các lệnh khác (dem, nguoc, ...) ở file logic.ts như bình thường.
// ============================================
function handleMenu(chatId: string, message: string): string {
  // Bước 1: lấy trạng thái hiện tại của người này từ trangThaiNguoiDung.
  // Nếu người này chưa từng nhắn "alg" trước đó, trangThaiNguoiDung[chatId]
  // sẽ là undefined -> ta tự gán cho họ 1 trạng thái mặc định là "BAT_DAU".
  let trangThai = trangThaiNguoiDung[chatId];

  if (trangThai == undefined) {
    trangThai = { buoc: "BAT_DAU" };
  }

  // Bước 2: nếu message == "alg" -> in danh sách node, lưu trạng thái
  // "đang chọn node" cho người này.
  if (message === "alg") {
    trangThai = { buoc: "DANG_CHON_NODE" };
    trangThaiNguoiDung[chatId] = trangThai;
    return taoMenuNode();
  }

  // Bước 3: nếu trạng thái hiện tại là "đang chọn node" -> xử lý lựa chọn,
  // in danh sách bài của node đã chọn, chuyển trạng thái sang "đang chọn bài".
  if (trangThai.buoc === "DANG_CHON_NODE") {
    const node = Number(message);
    if (isNaN(node) || node < 1 || node > danhSachNode.length) {
      return "So khong hop le, hay nhap lai:\n" + taoMenuNode();
    }

    trangThai.node = node;
    trangThai.buoc = "DANG_CHON_BAI";
    trangThaiNguoiDung[chatId] = trangThai;
    return taoMenuBai(node);
  }

  // Bước 4: nếu trạng thái là "đang chọn bài" -> lưu bài đã chọn,
  // hỏi input, chuyển trạng thái sang "đang chờ input".
  if (trangThai.buoc === "DANG_CHON_BAI") {
    const cacBai = danhSachNode[trangThai.node - 1].cacBai;
    const bai = Number(message);
    if (isNaN(bai) || bai < 1 || bai > cacBai.length) {
      return "So khong hop le, hay nhap lai:\n" + taoMenuBai(trangThai.node);
    }

    trangThai.bai = bai;
    trangThai.buoc = "DANG_CHO_INPUT";
    trangThaiNguoiDung[chatId] = trangThai;
    return layInputPrompt(trangThai.node, trangThai.bai);
  }

  // Bước 5: nếu trạng thái là "đang chờ input" -> chạy thuật toán tương ứng,
  // in kết quả, đưa trạng thái quay về ban đầu.
  if (trangThai.buoc === "DANG_CHO_INPUT") {
    const ketQua = xuLyChonBai(trangThai.node, trangThai.bai, message);
    delete trangThaiNguoiDung[chatId];
    return "Ket qua: " + ketQua + "\n\n(Nhan 'alg' de lam bai khac)";
  }

  return "";
}

export { handleMenu };
