import Link from "next/link";
import AllButtons from "../buttons/allButtons";
import Image from "next/image";
import SearchBar from "../inputs/search";

export default function Navbars() {
  return (
    <div className="flex justify-between h-16 w-full items-center px-6 bg-gray-900">
      <div className="flex gap-4 items-center">
        <Link href={"/"}>
        <Image src="/favicon.ico" alt="logo" width={40} height={40} className=""/>
        </Link>
        <div className="flex gap-4">
        <Link href={"/"}>
          <h2 className="text-lg text-slate-200 hover:text-gray-900">Home</h2>
        </Link>
        <Link href={"/film"}>
          <h2 className="text-lg text-slate-200 hover:text-gray-900">Film</h2>
        </Link>
        <Link href={"/serialTv"}>
          <h2 className="text-lg text-slate-200 hover:text-gray-900">SerialTv</h2>
        </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <SearchBar/>
        <AllButtons title="Masuk" classname="bg-black px-4 h-10 hover:text-gray-900 hover:bg-slate-300 text-sm p-2 rounded-sm text-slate-200"/>
      </div>
    </div>
  );
}
