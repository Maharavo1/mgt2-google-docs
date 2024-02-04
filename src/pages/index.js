import Link from "next/link"
import Head from "next/head";
import Login from "./login/login";
export default function Home() {
  return (
    <div>
    <Head>
      <title>Google Docs</title>
    </Head>
    <Login/>
    </div>
  )
}
