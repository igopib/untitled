import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

// Internal Imports
import Style from "./Main.module.css"

const Main: FC = () => {
  return (
    <>
      <div className="flex justify-between items-center px-40 h-12">
        <div>untitled</div>
        <div className="flex justify-between gap-12">
          <div>el 1</div>
          <div>el 2</div>
          <div>el 3</div>
        </div>
        <div>connect</div>
      </div>
      <div className={Style.card}>Slide 1</div>
      <div className={Style.card}>Slide 2</div>
      <div className={Style.card}>Slide 3</div>
      <div className={Style.card}>Slide 4</div>
    </>
  )
}

export default Main
