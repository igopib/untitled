import Head from "next/head"
import Main from "@/components/Main/Main"

export default function Home() {
  return (
    <>
      <Head>
        <title>untitled</title>
        <meta name="description" content="It is starting soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Main />
    </>
  )
}
