import { ChevronRightIcon } from '@heroicons/react/24/outline'

const CatCard = ({ names, images }) => {
    return (
            <div className="rounded-lg bg-cover bg-center bg-no-repeat flex justify-center items-center brightness-50" style={{filter: "brightness(70%)", height:"25vh", width:"40vh", backgroundImage: `url(${images})` }} >
            {/*<ChevronRightIcon className="text-[#E5D437]" style={{height:"10vh"}}/>*/} </div>
    )
}

export default CatCard