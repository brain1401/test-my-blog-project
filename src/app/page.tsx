import FeaturedPostCrads from "@/components/FeaturedPostCards";
import Profile from "@/components/Profile";

export default async function HomePage() {

  return (
    <section>
      <Profile />
      {/* @ts-expect-error Async Server Component */ }
      <FeaturedPostCrads />
    </section>
  );
}
