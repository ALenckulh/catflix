import DataCard from "@/componentes/dataCard"
import Image from "next/image"
const catinho = "/catinho.jpg"
const gatito = "/gatito.jpg"
const tontito = "/tontito.jpg"

const ContentPage = () => {
    return <>
    <div className="w-screen h-screen bg-[#221D18] flex justify-center items-center">
        <div className=" flex w-11/12 justify-around">
            <Image src={catinho} width={300} height={400}  alt="catinho"/>
            <Image src={gatito} width={300} height={400}  alt="catinho"/>
            <Image src={tontito} width={300} height={400}  alt="catinho"/>
            <Image src={tontito} width={300} height={400}  alt="catinho"/>
        </div>
    </div>
    </>
}

export default ContentPage