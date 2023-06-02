export type BannerData = {
  message: string;
  state: 'success' | 'error';
}

export default function Banner({banner: {message, state}}: {banner: BannerData}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? "✅" : "❌";

  return (
    <p className={`p-2 m-3 w-fit text-center mx-auto rounded-xl ${isSuccess ? 'bg-green-300' : 'bg-red-500'}`}>
      {`${icon} ${message}`}
    </p>
  )
}