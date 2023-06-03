"use client";

import { Post } from "@/service/post";
import { useState } from "react";
import PostGrid from "./PostGrid";
import Categories from "./Categories";


type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "ALL Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex flex-col-reverse mx-auto w-9/12 2xl:flex 2xl:flex-row 2xl:w-full">
      <PostGrid posts={filtered} />
      <Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={(selected) => setSelected(selected)}/>
    </section>
  );
}
