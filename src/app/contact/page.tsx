import EmailForm from "@/components/EmailForm";
import { Metadata } from "next";
import { BsGithub, BsInstagram } from "react-icons/bs";

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Aiden에게 연락하기'
}

const LINKS = [
  { icon: <BsGithub />, url: "https://github.com/brain1401", description: "Github" },
  { icon: <BsInstagram />, url: "https://www.instagram.com/h_t9euk/", description: "Instagram" },
];

export default function ContactPage() {
  return (
    <article className="p-4">
      <section>
        <h3 className="text-center text-2xl font-bold">Contact me</h3>
        <p className="text-center">brain1401@gmail.com</p>
        <ul className="my-2 mt-6 flex justify-center gap-14">
          {LINKS.map((item) => (
            <div key={item.url} className="flex flex-col items-center  hover:text-sky-400">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-5xl"
              >
                {item.icon}
              </a>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <h3> {item.description}</h3>
              </a>
            </div>
          ))}
        </ul>
      </section>

      <h2 className="m-3 mt-10 text-center text-3xl font-bold">
        또는 이메일 보내기
      </h2>

      <EmailForm />
    </article>
  );
}
