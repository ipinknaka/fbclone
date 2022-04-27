import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { getSession } from 'next-auth/react'

export default function Home({session}) {
  if (!session) return <Login />;
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
  const session = await getSession(context);
  console.log("index-getServerSideProps");
  console.log(`session: ${session}`);
  return {
    props: { session },
  }
}
