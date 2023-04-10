import Image from "next/image"
import Link from "next/link"

// Internal Imports
import Style from "./Main.module.css"

const Main = () => {
  return (
    <>
      <div>Navigation</div>
      <div className={Style.card}>Slide 1</div>
      <div className={Style.card}>Slide 2</div>
      <div className={Style.card}>Slide 3</div>
      <div className={Style.card}>Slide 4</div>
    </>
  )
}

export default Main
