import Image from "next/image"

const CatCard = ({names, images}) => {
    return <>
    <div className="">
        <Image src={images} width={100} height={100} alt={names}/>
    </div>
    </>
}

export default CatCard