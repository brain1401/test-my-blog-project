import { getPosts } from "@/service/post";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselCase() {
  let posts = await getPosts();
  posts = posts.filter((post) => !post.featured);

  return (
    <section className="mt-10">
      <div className="mx-auto w-11/12">
        <h2 className="text-lg font-semibold">You May Like</h2>
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
        </MultiCarousel>
      </div>
    </section>
  );
}
