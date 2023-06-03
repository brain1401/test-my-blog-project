import queryString from "query-string";
type RequestType = {
  header: { isSuccess: boolean };
  data: {
    results: { messageid: string };
    canonicalRegistrationTokenCount: number;
    failureCount: number;
    successCount: number;
    multicastId: number;
  };
};

export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const parsed = queryString.parse(slug);
    const url = `https://asia-northeast3-noti-lab-production.cloudfunctions.net/api/notification/v1/notification?nickname=Aiden&title=${parsed.title}&body=${parsed.content}&secretKey=${process.env.NOTILAB_KEY}`;

    await fetch(url, { cache: "no-store" });

    console.log(request.url);
    console.log(parsed);
  } catch (error) {
    console.log(error);
  }
}
