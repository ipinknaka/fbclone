import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>fbclone</title>
        <meta name="description" content="fbclone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>

      </main>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log("index-getServerSideProps")
  return {
    props: {},
  }
}
