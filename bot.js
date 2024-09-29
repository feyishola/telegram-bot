const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const token = "7614977667:AAH_qRDLwXjJqAa7Jl3kj1b96f6nP2IO4b4";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});

bot.onText(/\/start (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

const app = express();

app.listen(8000, () => {
  console.log("connected to port 8000");
});
