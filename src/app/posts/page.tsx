import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/post"

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map(post => post.category))] //set은 중복허용이 안됨

  return (
    <FilterablePosts posts={posts} categories={categories}/>
  )
}