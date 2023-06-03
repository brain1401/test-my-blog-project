import AdjacentPostCard from "@/components/AdjacentPostCard";
import MarkdownViewer from "@/components/MarkdownViewer";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/post";
import Image from "next/image";
import {AiTwotoneCalendar} from 'react-icons/ai';

type Type = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Type) {
    const {title, description} = await getPostData(slug);
    return {
      title,
      description
    }
}

export default async function PostPage({ params: { slug } }: Type) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
      <Image
        className="h-1/5 w-full"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}