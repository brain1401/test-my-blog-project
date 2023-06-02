export async function sendNonify({title, content}:{title:string, content:string}) {
 await fetch(
    `api/notilab/${title}-${content}`,
    { cache: "no-store" }
  );
}


