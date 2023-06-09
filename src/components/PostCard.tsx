import { Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

type Props = { 
  post: Post; 
  margin?: string;
};

export default function PostCard({ post, margin }: Props) {
  if (!post) {
    console.log("PostCard 컴포넌트에 필요한 데이터 가져오는데 실패!");
  }

  return (
    <Link href={`/posts/${post.path}`} className={`m-${margin} block h-fit w-80`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <div className=" relative  h-40 w-full  overflow-hidden">
          <Image
            src={`/images/posts/${post?.path}.png`}
            alt={post ? post.title : "오류"}
            fill
          />
        </div>

        <div>
          <time className="block text-end mr-4 text-gray-700">{post.date.toString()}</time>
          <h2 className="h-7 mt-1 text-center text-xl font-bold">{post.title}</h2>
          <p className="my-2 h-5 text-center text-sm font-semibold">{post.description}</p>
          <div className="flex items-center justify-center mx-auto my-6 w-28 h-7 text-sm font-semibold rounded-xl border border-cyan-200 text-center">
            {post.category}
          </div>
        </div>
      </article>
    </Link>
  );
}
