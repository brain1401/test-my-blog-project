type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="p-4 text-center">
      <h2 className=" m-2 flex h-10 items-center justify-center border-b-2 border-[#161b22] font-bold 2xl:mb-2 2xl:w-28 2xl:border-b-2 2xl:border-[#161b22] 2xl:pb-1 2xl:text-lg 2xl:font-semibold">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer font-semibold hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
