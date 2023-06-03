import Link from "next/link";
import { SetStateAction } from "react";

const LINK_STYLE =
  "bg-gray-400 p-2 border text-center font-bold md:bg-white md:border-none md:pd-0 md:justify-end";

export default function Nav_menu({
  setShowmenu,
}: {
  setShowmenu: (value: SetStateAction<boolean>) => void;
}) {
  return (
    <div className={`flex flex-col md:flex-row`}>
      <Link
        className={LINK_STYLE}
        href="/"
        onClick={() => setShowmenu((prev) => !prev)}
      >
        home
      </Link>
      <Link
        className={LINK_STYLE}
        onClick={() => setShowmenu((prev) => !prev)}
        href={"/about"}
      >
        about
      </Link>
      <Link
        className={LINK_STYLE}
        onClick={() => setShowmenu((prev) => !prev)}
        href="/posts"
      >
        posts
      </Link>
      <Link
        className={LINK_STYLE}
        onClick={() => setShowmenu((prev) => !prev)}
        href="/contact"
      >
        contact
      </Link>
    </div>
  );
}