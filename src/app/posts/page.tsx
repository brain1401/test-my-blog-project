import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/post"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Posts',
  description: '풀스택 관련 블로그 글'
}


export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map(post => post.category))] //set은 중복허용이 안됨

  return (
    <FilterablePosts posts={posts} categories={categories}/>
  )
}