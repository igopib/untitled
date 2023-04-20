import React from "react"
import { FC } from "react"
import Link from "next/link"

// Internal Imports
import Style from "./Navbar.module.css"

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 z-50 flex flex-col justify-between items-center h-full w-12 py-16 bg-transparent backdrop-blur-xl">
      <div className={Style.vertical}>
        <div className="w-full h-full">
          <Link href="/">
            <div className="font-semibold tracking-tight rotate-180 hover:text-white/50 transform duration-300 text-2xl">
              play
            </div>
          </Link>
        </div>
      </div>
      <div className={Style.vertical}>
        <div className="w-full">
          <Link href="/">
            <div className="font-semibold tracking-tight rotate-180 hover:text-white/50 transform duration-300 text-2xl">
              credits
            </div>
          </Link>
        </div>
      </div>
      <div className={Style.vertical}>
        <div className="w-full">
          <Link href="/">
            <div className="font-semibold tracking-tight rotate-180 hover:text-white/50 transform duration-300 text-2xl">
              docs
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
