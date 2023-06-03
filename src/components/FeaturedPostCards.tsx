import { getPosts } from "@/service/post";
import PostCard from "./PostCard";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getPosts();
  const featuredPost = posts.filter((post) => post.featured);

  return (
    <section>
      <h2 className="pl-5 mt-24 text-xl font-semibold border-b-2 border-cyan-200">추천 포스트</h2>
      <PostGrid posts={featuredPost} />
    </section>
  );
}

