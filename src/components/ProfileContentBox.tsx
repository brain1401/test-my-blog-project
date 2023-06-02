import ProfileContent from "./ProfileContent";

export default function ProfileContentBox() {
  return (
    <section className="mx-auto h-fit w-3/4 overflow-hidden bg-gray-300 text-center">
      <ProfileContent
        title="Who Am I?"
        contents={["Next.js 개발자가 되고 싶은 대학생"]}
      />
      <ProfileContent title="Career" contents={["대학생 (Now)"]} />
      <ProfileContent
        title="Skills"
        contents={[
          "React, Next.js",
          "Javascript, Python, C",
          "VS Code, OracleSQL",
        ]}
      />
    </section>
  );
}
