const ButtomNavigate = ({ path, text }) => {

    return (
        <form style={{paddingTop:"1.3rem"}}>
            <button type="submit" style={{backgroundColor:"#E5D437", padding:"0.7rem", borderRadius:"0.7rem"}} className="font-mono w-full font-bold text-[#181410] bg-[#E5D437] hover:bg-[#CEBF32] focus:ring-4 focus:outline-none focus:ring-[#7E7423] rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
        </form>
    )
}

export default ButtomNavigate