import path from "path";
import { promises as fs } from "fs";
import { readFile } from "fs/promises";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getPosts(): Promise<Post[]> {
  const filepath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filepath, "utf-8");
  const posts: Post[] = JSON.parse(data);

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();

  return posts.find((item) => item.path === path);
}

export async function getPostData(filename: string): Promise<PostData> {
  const filepath = path.join(process.cwd(), "data", "posts", `${filename}.md`);
  const posts = await getPosts();
  const post = posts.find((post) => post.path === filename);
  if (!post) throw new Error(`${filename}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filepath, "utf-8");

  return { ...post, content, next, prev };
}
