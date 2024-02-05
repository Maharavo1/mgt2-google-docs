import Link from "next/link"
import Head from "next/head";
import Login from "./login";
import Accueil from "./accueil/accueil";
export default function Home() {
  return (
    <div>
    <Head>
      <title>Google Docs</title>
    </Head>
    <Accueil/>
    </div>
  )
}
