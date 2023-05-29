import { getPosts } from "@/service/post";
import PostCard from "./PostCard";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getPosts();
  const featuredPost = posts.filter((post) => post.featured);

  return (
    <section>
      <h2 className="pl-1 text-xl font-semibold border-y-2 border-cyan-200">● Featured Posts</h2>
      <PostGrid posts={featuredPost} />
    </section>
  );
}
