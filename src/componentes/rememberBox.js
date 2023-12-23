import Subtext from "./subtext"

const RememberBox = () => {
    return (
        <div style={{gap:"0.5rem"}} className="flex items-start">
            <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-[#221D18] border border-gray-300 rounded focus:ring-3 focus:ring-primary-300" required=""></input>
            </div>
            <div className="ml-3 text-sm">
                <Subtext text={"Lembrar de Mim"}/>
            </div>
        </div>
    )
}

export default RememberBox