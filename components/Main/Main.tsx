import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

// Internal Imports
import Style from "./Main.module.css"
import { slide1, slide2, slide3, slide4 } from "@/public/assets/index"

const Main: FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-12 bg-transparent backdrop-blur-xl">
        <div>untitled</div>
        <div className="flex justify-between gap-12">
          <div>el 1</div>
          <div>el 2</div>
          <div>el 3</div>
        </div>
        <div>connect</div>
      </div>

      <div className={Style.card}>
        <Image
          src={slide1}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-2xl">
          content
        </div>
      </div>
      <div className={Style.card}>
        <Image
          src={slide2}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-2xl">
          content
        </div>
      </div>
      <div className={Style.card}>
        <Image
          src={slide3}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-2xl">
          content
        </div>
      </div>
      <div className={Style.card}>
        <Image
          src={slide4}
          alt="/"
          className="absolute left-0 top-0 object-cover h-[100%] w-[100%] z-[1] brightness-75 blur-[3px]"
        ></Image>
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-[2] flex justify-center items-center text-2xl">
          content
        </div>
      </div>
    </>
  )
}

export default Main
