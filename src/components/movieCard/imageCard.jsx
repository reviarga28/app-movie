import Image from "next/image";

export default function ImageCard(props) {
    const { Img, Alt, classname} = props;

    return(
        <Image src={Img} alt={Alt} className={classname}/>
    )
}