// utils/telegramSender.ts
const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";

interface MessageData {
  name: string;
  email: string;
  message: string;
  pageName: string;
  [key: string]: string; // для дополнительных полей
}

export const sendToTelegram = async (data: MessageData) => {
  const text = `
📨 Новое сообщение!
📄 Страница: ${data.pageName}

👤 Имя: ${data.name}
📧 Email: ${data.email}
💬 Сообщение:
${data.message}

${Object.entries(data)
  .filter(([key]) => !["name", "email", "message", "pageName"].includes(key))
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n")}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка отправки в Telegram");
    }

    return true;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
};
