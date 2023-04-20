import Image from "next/image"
import { FC } from "react"
import { Manrope } from "next/font/google"

// Internal Imports
import Navbar from "../NavBar/Navbar"
import Style from "./Main.module.css"
import { slide1, slide2, slide3, slide4 } from "@/public/assets/index"

const manrope = Manrope({ subsets: ["latin"] })

const Main: FC = () => {
  return (
    <div className={manrope.className}>
      <Navbar />
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
