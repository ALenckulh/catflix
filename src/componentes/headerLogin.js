"use client"
import { UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';


const HeaderLogin = () => {
    const router = useRouter()
    return (
        <>
            <button className='font-mono text-[#E5D437] text-2xl flex items-center' onClick={() => {
                router.push("/login")
            }}>Entrar <UserIcon className="h-12 text-[#E5D437]" /></button>
        </>
    )
}

export default HeaderLogin
