import Image from "next/image";
import meImage from "../../public/images/me.png";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="m-auto w-fit text-center">
      <div className="relative h-60 w-60 overflow-hidden rounded-full object-contain">
        <Image src={meImage} alt="Aiden Hong" fill priority />
      </div>
      <h2 className="text-3xl font-bold">{"Hi, I'm Aiden"}</h2>
      <h4 className="text-xl font-semibold ">College Student</h4>
      <p className="">프론트엔드 개발자를 꿈꾸는 대학생</p>
      <Link href="/contact">
        <button className="m-2 appearance-none rounded-xl border border-sky-500 p-1.5 font-bold">
          Contact Me
        </button>
      </Link>
    </div>
  );
}
