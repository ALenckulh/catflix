import { UserIcon } from '@heroicons/react/24/outline'

const HeaderLogin = () => { 
    return (
        <>
        <header className='absolute flex justify-end h-[8rem] w-screen pr-14'> 
        <button className='w-1/12 font-mono text-[#E5D437] text-2xl flex items-center justify-around'>Entrar <UserIcon  class="h-12 text-[#E5D437]"/></button>
        </header>
        </>
    )
}

export default HeaderLogin
