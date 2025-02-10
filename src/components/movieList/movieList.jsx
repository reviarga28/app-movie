import Horor from "../../../public/images/hororCategory.png";
import Drama from "../../../public/images/dramaCategory.png";
import Komedi from "../../../public/images/komediCategory.png";
import Aksi from "../../../public/images/aksiCategory.png";
import Image from "next/image";

export default function MovieList() {
  const category = [
    {
      id: 1,
      text: "Aksi",
      image: Aksi,
    },
    {
      id: 2,
      text: "Drama",
      image: Drama,
    },
    {
      id: 3,
      text: "Komedi",
      image: Komedi,
    },
    {
      id: 4,
      text: "Horor",
      image: Horor,
    },
  ];
  return (
    <div className="w-full p-6 bg-gray-900 shadow-2xl shadow-gray-100 py-14">
      <h1 className="text-3xl text-white font-semibold">Kategori Film</h1>
      <div className="flex gap-4 mt-8">
        {category.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center items-center rounded-sm bg-gray-800 w-20 h-20"
          >
            <Image src={category.image} alt={category.text} width={15} height={20} className="flex justify-center items-center" />
            <h1 className="text-md font-sans text-white items-center">
              {category.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
