// FILE NÀY DÙNG ĐỂ TEST NHANH menu.ts, KHÔNG CHẠY QUA BOT TELEGRAM.
// Chạy bằng lệnh: npx ts-node src/test-menu.ts
//
// Giả lập 1 người dùng (chatId "1") gõ lần lượt các tin nhắn để
// chọn Two Sum từ menu rồi nhập input.

import { handleMenu } from "./menu";

const chatId = "1";

console.log("--- Nhan 'alg' ---");
console.log(handleMenu(chatId, "alg"));

console.log("\n--- Chon node 1 (HashTable) ---");
console.log(handleMenu(chatId, "1"));

console.log("\n--- Chon bai 1 (Two Sum) ---");
console.log(handleMenu(chatId, "1"));

console.log("\n--- Nhap input (mang + target) ---");
console.log(handleMenu(chatId, "2 7 11 15\n9"));
