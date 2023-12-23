import Subtitle from "./subtitle"

const PasswordSpace = () => {
    return (
        <div>
            <Subtitle text={"Senha"}/>
            <input type="password" name="password" id="password" style={{padding:"0.6rem", border:"#35302B"}} placeholder="••••••••" className=" font-mono text-sm font-medium bg-[#221D18] border text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
        </div>
    )
}

export default PasswordSpace