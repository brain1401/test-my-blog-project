import { getPosts } from "@/service/post";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselCase() {
  let posts = await getPosts();
  posts = posts.filter((post) => !post.featured);

  return (
    <section className="m-10">
      <div className="mx-auto my-3 w-11/12 ">
        <h2 className="m-2 text-xl border-b w-full border-cyan-400 font-semibold">전체 포스트</h2>
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard margin="0" key={post.path} post={post} />
          ))}
        </MultiCarousel>
      </div>
    </section>
  );
}
