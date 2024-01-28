module.exports.config = {
  name: "google",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Táo",
  description: "Tìm kiếm kết quả trên google!",
  usePrefix: true,
  commandCategory: "Công cụ",
  usages: "[search]",
  cooldowns: 5,
  usePrefix: true,
  dependencies: {
    "request": "",
    "fs": ""
  }
};

module.exports.run = function({ api, event, args }) {
  let textNeedSearch = "";
  const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;
  (event.type == "message_reply") ? textNeedSearch = event.messageReply.attachments[0].url : textNeedSearch = args.join(" ");
  (regex.test(textNeedSearch)) ? api.sendMessage(`[⚜️]➜ link của bạn đây: https://www.google.com/searchbyimage?&image_url=${textNeedSearch}`, event.threadID, event.messageID) : api.sendMessage(`[⚜️]➜ link của bạn đây: https://www.google.com.vn/search?q=${encodeURIComponent(textNeedSearch)}`, event.threadID, event.messageID);
} 