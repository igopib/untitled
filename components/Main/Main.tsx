import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { Manrope } from "next/font/google"

// Internal Imports
import Style from "./Main.module.css"
import { slide1, slide2, slide3, slide4 } from "@/public/assets/index"

const manrope = Manrope({ subsets: ["latin"] })

const Main: FC = () => {
  return (
    <div className={manrope.className}>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-14 bg-transparent backdrop-blur-xl px-8">
        <Link href="/">
          <div className="font-semibold tracking-tight text-lg">untitled</div>
        </Link>

        <div className="flex justify-between gap-12">
          <Link href="/">
            <div>el 1</div>
          </Link>
          <Link href="/">
            <div>el 2</div>
          </Link>
          <Link href="/">
            <div>el 3</div>
          </Link>
        </div>
        <div className="bg-white hover:bg-white/50 text-black font-bold py-2 px-4 rounded-full transform duration-300 cursor-pointer">
          connect
        </div>
      </div>

      <div className={Style.card}>
        <Image
          src={slide1}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-6xl font-semibold tracking-tighter">
          still untitled
        </div>
      </div>
      <div className={Style.card}>
        <Image
          src={slide2}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-6xl font-semibold tracking-tighter">
          still untitled
        </div>
      </div>
      <div className={Style.card}>
        <Image
          src={slide3}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-6xl font-semibold tracking-tighter">
          still untitled
        </div>
      </div>
      <div className={Style.card}>
        <Image
          src={slide4}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-6xl font-semibold tracking-tighter">
          still untitled
        </div>
      </div>
    </div>
  )
}

export default Main
