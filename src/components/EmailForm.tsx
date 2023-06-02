"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner from "./Banner";
import { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/sendEmail";

const TITLE_STYLE = "text-white m-2";
const INPUT_STYLE = `border border-black mx-2 `;

type Data = {
  from: "";
  subject: "";
  message: "";
};

export default async function EmailForm() {
  const [banner, setBanner] = useState<BannerData | null>(null);

  const [datas, setDatas] = useState<Data>({
    from: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClick = () => {};

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendContactEmail(datas)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setDatas({
          from: "",
          subject: "",
          message: "",
        });
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
          name="from"
          onChange={handleInputChange}
          value={datas.from}
          autoFocus
          required
        />
        <label htmlFor="subject" className={TITLE_STYLE}>
          Subject
        </label>
        <input
          className={INPUT_STYLE}
          name="subject"
          onChange={handleInputChange}
          value={datas.subject}
          required
        />
        <label htmlFor="message" className={TITLE_STYLE}>
          Message
        </label>
        <textarea
          className={INPUT_STYLE + `h-80`}
          name="message"
          onChange={handleInputChange}
          value={datas.message}
          required
        />
        <button
          className="m-3 rounded bg-yellow-300 font-bold"
          onClick={onClick}
        >
          Submit
        </button>
      </form>
    </>
  );
}
