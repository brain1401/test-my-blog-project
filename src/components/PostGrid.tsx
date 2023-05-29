import { Post } from "@/service/post"
import PostCard from "./PostCard";

type Props =  {posts: Post[]};

export default function PostGrid({posts}: Props) {


  return (
    <>
      <ul className="flex flex-wrap w-5/6 mx-auto justify-around">
        {posts.map((post) => (
          <li key={post.path} className="">
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}