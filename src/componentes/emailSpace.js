import Subtitle from "./subtitle"

const EmailSpace = () => {
    return (
        <div>
            <Subtitle text={"E-mail"}/>
            <input type="email" name="email" id="email" style={{padding:"0.6rem", border:"#35302B"}} className=" font-mono text-sm font-medium bg-[#221D18] border border-[#35302B] text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full" placeholder="nome@e-mail.com" required=""></input>
        </div>
    )
}

export default EmailSpace