import Banner from "@/components/banners/banner";
import Footer from "@/components/footers/footer";
import MovieCard from "@/components/movieCard/movieCard";
import MovieList from "@/components/movieList/movieList";
import Navbars from "@/components/navbars/navbars";
import StarImg from "../../public/images/star.png";
import CardImg from "../../public/images/Card.png";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    // </div>
    <div>
      <Navbars/>
      <Banner/>
      <MovieList/>
      <MovieCard Background='bg-gray-800' H1='Film Populer' Title='Pejuang Terakhir' Card={CardImg} Star={StarImg} Rate='8.5 • 2024'/>
      <MovieCard Background='bg-gray-900' H1='Film Terbaru' Title='Cinta di Jakarta' Card={CardImg} Rate='Rilis 15 Mar 2024'/>
      <MovieCard Background='bg-gray-800' H1='Rekomendasi Untukmu' Title='Misteri Kota Tua' Card={CardImg} Star={StarImg} Rate='9.0 • Thriller'/>
      <Footer/>
    </div>
  );
}
