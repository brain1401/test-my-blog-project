import Link from "next/link";

const LINK_STYLE = "font-bold pd-0 justify-end";

export default function DesktopNavBar() {
  return (
    <>
      <div className={`flex flex-row gap-4`}>
        <Link className={LINK_STYLE} href="/">
          home
        </Link>
        <Link className={LINK_STYLE} href={"/about"}>
          about
        </Link>
        <Link className={LINK_STYLE} href="/posts">
          posts
        </Link>
        <Link className={LINK_STYLE} href="/contact">
          contact
        </Link>
      </div>
    </>
  );
}
