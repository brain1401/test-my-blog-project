import { getPostData } from "@/service/post";

type Type = {
  params: {
    slug:string;
  }
}

export default async function PostPage({params : {slug}}: Type) {
  
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  )
}