import '@/styles/globals.css'
import Head from 'next/head'
import Header from '../../Components/Header'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Joy | dev</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    </>
  
  
  )
}
