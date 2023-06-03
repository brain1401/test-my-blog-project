"use server";

export async function notilab({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const url = `https://asia-northeast3-noti-lab-production.cloudfunctions.net/api/notification/v1/notification?nickname=Aiden&title=${title}&body=${content}&secretKey=${process.env.NOTILAB_KEY}`;
  console.log(url);
  await fetch(url, { cache: "no-store" });
}
