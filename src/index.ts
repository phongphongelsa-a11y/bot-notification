import "dotenv/config";
import { Telegraf } from "telegraf";
import { getReply } from "./logic";
import { handleMenu } from "./menu";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN chưa được cấu hình trong file .env");
}

const bot = new Telegraf(token);

bot.on("text", async (ctx) => {
  const chatId = ctx.chat.id.toString();
  const message = ctx.message.text;

  // Ưu tiên xử lý menu trước. Nếu không liên quan tới menu, handleMenu trả về ""
  // và bot sẽ xử lý tiếp bằng logic.ts như bình thường.
  const menuReply = handleMenu(chatId, message);
  if (menuReply != "") {
    await ctx.reply(menuReply);
    return;
  }

  const reply = getReply(message);

  if (reply != "") {
    await ctx.reply(reply);
  }
});

bot.launch();
console.log("Bot đang chạy...");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
