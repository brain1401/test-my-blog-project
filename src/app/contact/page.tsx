import EmailForm from "@/components/EmailForm";
import { BsGithub, BsInstagram } from "react-icons/bs";

const LINKS = [
  { icon: <BsGithub />, url: "https://github.com/brain1401" },
  { icon: <BsInstagram />, url: "https://www.instagram.com/h_t9euk/" },
];

export default function ContactPage() {
  return (
    <article>
      <section>
        <h3 className="text-center text-2xl font-bold">Contact me</h3>
        <p className="text-center">brain1401@gmail.com</p>
        <ul className="my-2 flex justify-center gap-14">
          {LINKS.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-sky-400"
            >
              {item.icon}
            </a>
          ))}
        </ul>
      </section>

      <h2 className="m-3 text-center text-3xl font-bold">
        Or Send me an email
      </h2>

      {/* @ts-expect-error Async Server Component */}
      <EmailForm />
    </article>
  );
}
