"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Image from "next/image"
import "react-alice-carousel/lib/alice-carousel.css";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
const marca = "/logo.svg"

export default function RootLayout({ children }) {
  const router = useRouter()
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='absolute flex justify-start h-[8rem] w-screen pl-14 bg-gradient-to-b from-[#181410] via-[#181410a2]'>
          <button className='w-1/12 font-mono text-[#E5D437] text-2xl flex items-center justify-around' onClick={() => {
            router.push("/homePage")
          }}><Image src={marca} width={120} height={120} className="text-[#E5D437]" /></button>
        </header>

        {children}
      </body>
    </html>
  )
}