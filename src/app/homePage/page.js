import Image from "next/image"
import HeaderLogin from "@/componentes/headerLogin"

const backgroundPrincipal = "/backgroundPrincipal.svg"
const codigoBarras = "/marca.svg"
const homePage = () => {
    return <>
        {/* Aqui esta o corpo princial da nossa aplicacao */}
        <header className='absolute flex justify-end h-[8rem] w-screen pr-14'>
            <HeaderLogin />
        </header>
        <div style={{ backgroundImage: `url(${backgroundPrincipal})` }}
            className="flex flex-col justify-center w-screen h-screen bg-cover bg-center bg-[#221D18]">
            {/* Aqui vai estar os elementos que queremos centralizar */}
            <div className="flex justify-center">
                <Image src={codigoBarras} width={400} height={100} />
            </div>
        </div>
    </>
}

export default homePage