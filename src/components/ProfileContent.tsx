export default function ProfileContent({title, contents} : {title: string; contents:string[]}) {

  return (
    <>
      <h2 className="m-3 text-2xl font-bold">{title}</h2>
      <div className="m-3 text-lg">
        {contents.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
    </>
  );
}