import DataCard from "@/componentes/dataCard"
import Image from "next/image"
const catinho = "/catinho.jpg"
const gatito = "/gatito.jpg"
const tontito = "/tontito.jpg"

const ContentPage = () => {
    return <>
        <div className="h-screen w-screen bg-[#221D18] flex justify-center items-center">
            <div className=" w-screen h-9/12 flex flex-col items-center pt-36">
                <div className=" flex w-11/12 justify-around">
                    <DataCard />
                </div>
                <div className=" flex w-11/12 justify-around">
                    <DataCard />
                </div>
            </div>
        </div>
    </>
}

export default ContentPage