import Image from "next/image";
import Banner from "../../../public/images/Headers.png"

export default function () {
    return(
        <div className="w-full">
            <Image src={Banner} className="w-full"/>
        </div>
    )
}