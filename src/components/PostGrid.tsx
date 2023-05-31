import { Post } from "@/service/post"
import PostCard from "./PostCard";

type Props =  {posts: Post[]};

export default function PostGrid({posts}: Props) {


  return (
    <>
      <ul className="flex w-full flex-wrap justify-center items-center ">
        {posts.map((post) => (
          <li key={post.path} className="">
            <PostCard post={post} margin="2" />
          </li>
        ))}
      </ul>
    </>
  );
}