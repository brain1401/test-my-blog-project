import { getPosts } from "@/service/post";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";
import Link from "next/link";

export default async function CarouselCase() {
  let posts = await getPosts();
  posts = posts.filter((post) => !post.featured);

  return (
    <section className="m-10">
      <div className="mx-auto my-3 w-11/12 ">
        <Link href="/posts">
          <h2 className="m-2 w-full border-b border-cyan-400 text-xl font-semibold">
            전체 포스트
          </h2>
        </Link>

        <MultiCarousel>
          {posts.map((post) => (
            <PostCard margin="0" key={post.path} post={post} />
          ))}
        </MultiCarousel>
      </div>
    </section>
  );
}
