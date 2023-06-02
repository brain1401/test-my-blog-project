"use client";
import { sendContactEmail } from "@/service/sendEmail";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner, {BannerData} from "./Banner";


type Data = {
  from: string;
  subject: string;
  message: string;
};

const TITLE_STYLE = "text-white m-2";
const INPUT_STYLE = `border border-black mx-2 `;
const INITIAL_DATA = {
  from: "",
  subject: "",
  message: "",
};



export default function EmailForm() {
  const [datas, setDatas] = useState<Data>(INITIAL_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDatas((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(datas)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setDatas(INITIAL_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일전송에 실패했습니다. 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        className=" mx-auto flex h-fit w-3/5 flex-col rounded-xl bg-slate-600 p-2"
        onSubmit={onSubmit}
      >
        <label htmlFor="from" className={TITLE_STYLE}>
          Your Email
        </label>
        <input
          className={INPUT_STYLE}
          type="email"
          name="from"
          id="from"
          onChange={onChange}
          value={datas.from}
          required
          autoFocus
        />
        <label htmlFor="subject" className={TITLE_STYLE}>
          Subject
        </label>
        <input
          className={INPUT_STYLE}
          type="text"
          name="subject"
          id="subject"
          onChange={onChange}
          value={datas.subject}
          required
        />
        <label htmlFor="message" className={TITLE_STYLE}>
          Message
        </label>
        <textarea
          className={INPUT_STYLE + `h-80`}
          name="message"
          id="message"
          onChange={onChange}
          value={datas.message}
          required
        />
        <button className="m-3 rounded bg-yellow-300 font-bold">Submit</button>
      </form>
    </>
  );
}
