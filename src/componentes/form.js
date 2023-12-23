"use client"
import Titles from "./titles"
import EmailSpace from "./emailSpace"
import PasswordSpace from "./passwordSpace"
import RememberBox from "./rememberBox"
import LinkText from "./linkText"
import { useRouter } from 'next/navigation';
import ButtomNavigate from "./buttomNavigate"
import Subtext from "./subtext"

const Form = () => {
    const router = useRouter()
    return (
        <>
            <div style={{width:"33vw"}} className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <div style={{backgroundColor:"#181410"}} className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div style={{paddingRight:"2.5rem", paddingLeft:"2.5rem", paddingTop:"2rem", paddingBottom:"1.5rem"}} className="space-y-4 md:space-y-6 sm:p-8">
                        <Titles title={"Entrar"}></Titles>
                        <form style={{marginTop:"0.3rem", marginBottom:"0.3rem"}} className="md:space-y-6" action="#">
                            <EmailSpace />
                            <PasswordSpace />
                            <div style={{paddingTop:"1.3rem", paddingBottom:"0.6rem", border:"#35302B"}} className="flex items-center justify-between">
                                <RememberBox />
                                <LinkText text={"Esqueceu a Senha?"} />
                            </div>
                            <ButtomNavigate onClick={() => {
                            router.push("/contentPage")}}
                            text={"Entrar"} />
                            <div style={{paddingTop:"1.3rem", gap:"0.5rem"}} className="flex items-center gap-5">
                                <Subtext text={"Não tem uma conta ainda?"} />
                                <LinkText text={"Criar conta"} />
                            </div>

                            {/*<p class="font-mono text-sm font-light text-gray-500">
                            Não tem uma conta ainda? <a href="#" class="font-mono font-medium text-primary-600 hover:underline">Criar conta</a>
                        </p>*/}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form