export default function ProfileContent({title, contents} : {title: string; contents:string[]}) {

  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="text-lg">
        {contents.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
    </div>
  );
}