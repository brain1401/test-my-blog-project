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

export type PostData = Post & { content: string };

export async function getPosts(): Promise<Post[]> {
  const filepath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filepath, "utf-8");
  const posts:Post[] = JSON.parse(data);

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();

  return posts.find((item) => item.path === path);

}

export async function getPostData(filename:string) : Promise<PostData> {
  const filepath = path.join(process.cwd(), 'data','posts', `${filename}.md`);
  const metadata = await getPosts()
  .then(posts => posts.find(post => post.path === filename));
  if(!metadata) throw new Error(`${filename}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filepath, 'utf-8');

  return {...metadata, content}
}