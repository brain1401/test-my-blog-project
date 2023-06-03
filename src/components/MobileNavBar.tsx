"use client";
import Link from "next/link";
import { SetStateAction } from "react";

const LINK_STYLE = "bg-gray-400 p-2 border text-center font-bold";

type Props = {
  setShowMenu: (value: SetStateAction<boolean>) => void;
};

export default function MobileNavBar({ setShowMenu }: Props) {
  return (
    <div className={`flex flex-col`}>
      <Link
        className={LINK_STYLE}
        href="/"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        home
      </Link>
      <Link
        className={LINK_STYLE}
        onClick={() => setShowMenu((prev) => !prev)}
        href={"/about"}
      >
        about
      </Link>
      <Link
        className={LINK_STYLE}
        onClick={() => setShowMenu((prev) => !prev)}
        href="/posts"
      >
        posts
      </Link>
      <Link
        className={LINK_STYLE}
        onClick={() => setShowMenu((prev) => !prev)}
        href="/contact"
      >
        contact
      </Link>
    </div>
  );
}
