import Form from "@/componentes/form"

const background = "/backgroundCover.svg"
const login = () => {
    return <>
    <section style={{ backgroundImage: `url(${background})` }} className="bg-[#221D18] w-screen h-screen flex justify-center">
    <Form/>
    </section>
    </>
}

export default login