// FILE NÀY DÙNG ĐỂ TEST NHANH logic.ts, KHÔNG CHẠY QUA BOT TELEGRAM.
// Chạy bằng lệnh: npx ts-node src/test-logic.ts

import { getReply } from "./logic";

// Bạn tự thêm/sửa các dòng test bên dưới, mỗi dòng là 1 tin nhắn giả lập.
console.log("Input: 'phong'  ->  Output:", getReply("phong"));
console.log("Input: 'dem 5'  ->  Output:", getReply("dem 5"));
console.log("Input: '3\\n5'  ->  Output:", getReply("3\n5"));
console.log("Input: 'TwoSum ' -> Output:", getReply("TwoSum"));