import Profile from "@/components/Profile";
import ProfileContentBox from "@/components/ProfileContentBox";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'About Me',
  description: 'Aiden의 정보'
}

export default function AboutPage() {
  return (
    <article>
      <Profile />
      <ProfileContentBox />
    </article>
  );
}
