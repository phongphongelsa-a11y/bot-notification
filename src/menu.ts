// FILE NÀY DÀNH ĐỂ BẠN CODE MENU LUYỆN THUẬT TOÁN.
// Chỉ cần dùng: function, if/else, object, mảng, vòng lặp - y như logic.ts.
// Không cần async/await, arrow function, hay regex.

// ============================================
// NƠI LƯU TRẠNG THÁI CỦA TỪNG NGƯỜI DÙNG
// Khóa (key) là chatId, giá trị là trạng thái của người đó.
// Tạm để kiểu "any" (không kiểm tra chặt) để bạn tự do định hình dữ liệu.
// ============================================
const trangThaiNguoiDung: { [chatId: string]: any } = {};


// ============================================
// DỮ LIỆU MENU: dùng Map để lưu.
// Khóa (key) là TÊN NODE, giá trị (value) là MẢNG TÊN BÀI bên trong node đó.
// Map giống Object (cũng là kiểu khóa -> giá trị), nhưng có sẵn các hàm
// tiện dùng: .set(khóa, giá_trị) để thêm, .get(khóa) để lấy ra.
// ============================================
const danhSachNode = new Map();

danhSachNode.set("hashtable", ["contains duplicate", "two sum"]);
danhSachNode.set("twopointer", ["remove zeroes", "reverse array"]);
// Muốn thêm node mới, copy 1 dòng .set(...) ở trên rồi đổi tên node + danh sách bài.


// ============================================
// HÀM CHÍNH - xử lý tin nhắn liên quan tới menu.
// Nếu tin nhắn không liên quan gì tới menu, return "" để bot còn
// xử lý các lệnh khác (dem, nguoc, ...) ở file logic.ts như bình thường.
// ============================================
function handleMenu(chatId: string, message: string): string {
  // TODO bước 1: lấy trạng thái hiện tại của người này từ trangThaiNguoiDung
  // (nếu chưa có, coi như họ chưa bắt đầu dùng menu)

  // Bước 1: lấy trạng thái hiện tại của người này từ trangThaiNguoiDung.
  // Nếu người này chưa từng nhắn "alg" trước đó, trangThaiNguoiDung[chatId]
  // sẽ là undefined -> ta tự gán cho họ 1 trạng thái mặc định là "BAT_DAU".
  let trangThai = trangThaiNguoiDung[chatId];

  if (trangThai == undefined) {
    trangThai = { buoc: "BAT_DAU" };
  }
  if (trangThai == "alg") {
    trangThai = { buoc: "DANG_CHON_NODE"};
  }
  if (trangThai == 'dang cho node') {
    trangThai = {buoc: ' DANG_CHON_BAI'};
  }

  // TODO bước 2: nếu message == "alg" -> in danh sách node, lưu trạng thái
  // "đang chọn node" cho người này

  // TODO bước 3: nếu trạng thái hiện tại là "đang chọn node" -> xử lý lựa chọn,
  // in danh sách bài của node đã chọn, chuyển trạng thái sang "đang chọn bài"

  // TODO bước 4: nếu trạng thái là "đang chọn bài" -> lưu bài đã chọn,
  // hỏi input, chuyển trạng thái sang "đang chờ input"

  // TODO bước 5: nếu trạng thái là "đang chờ input" -> chạy thuật toán tương ứng,
  // in kết quả, đưa trạng thái quay về ban đầu

  return "";
}

export { handleMenu };
