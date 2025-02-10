import ImageCard from "./imageCard";
import CardImg from "../../../public/images/Card.png";

export default function MovieCard(props) {
  const { Background, H1, Title, Card, Star, Rate } = props;
  return (
    <div className={`${Background} p-6 pt-14`}>
      <h1 className="text-3xl text-white font-semibold">{H1}</h1>
      <div className="flex gap-10">
        <div className="py-8">
          {Card && <ImageCard Img={Card} Alt={Title} />}
          <p className="text-white pt-2">{Title}</p>
          <div className="flex items-center gap-1">
            {Star && <ImageCard Img={Star} Alt={Title} classname="w-4" />}
            <p className="text-slate-300 text-xs">{Rate}</p>
          </div>
        </div>
        <div className="py-8">
          {Card && <ImageCard Img={Card} Alt={Title} />}
          <p className="text-white pt-2">{Title}</p>
          <div className="flex items-center gap-1">
            {Star && <ImageCard Img={Star} Alt={Title} classname="w-4" />}
            <p className="text-slate-300 text-xs">{Rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
