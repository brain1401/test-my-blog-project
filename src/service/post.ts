import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

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

