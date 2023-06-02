import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "메일 api 요청에 실패함");
  }
  return data;
}
