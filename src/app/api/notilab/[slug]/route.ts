type RequestType = {
  header: { isSuccess: boolean };
  data: {
    results: {messageid:string};
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
  const [title, content] = slug.split("-");

  try {
    await fetch(
      `https://asia-northeast3-noti-lab-production.cloudfunctions.net/api/notification/v1/notification?nickname=Aiden&title=${title}&body=${content}&secretKey=${process.env.NOTILAB_KEY}`,
      { cache: "no-store"}
    );


  } catch (error) {
    console.log(error);
  }
}
