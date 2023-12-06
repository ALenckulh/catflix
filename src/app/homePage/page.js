import Image from "next/image"
import headerLogin from "../headerLogin/header"

const backgroundPrincipal = "/backgroundPrincipal.svg"
const codigoBarras = "/marca.svg"
const homePage = () => {
    return <>
        {/* Aqui esta o corpo princial da nossa aplicacao */}
        <div style={{ backgroundImage: `url(${backgroundPrincipal})` }}
            className="flex flex-col justify-center w-screen h-screen bg-cover bg-center bg-[#221D18]">
            <headerLogin/>
            {/* Aqui vai estar os elementos que queremos centralizar */}
            <div className="flex justify-center">
             <Image src={codigoBarras} width={400} height={100} />
            </div>
        </div>
    </>
}

export default homePage