import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FrontCard from '../components/FrontCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Card App</title>
        <meta name="description" content="Credit Card app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FrontCard />

    </div>
  )
}
