import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import logo from '/public/images/logo.png'
import longlogo from '/public/images/long_logo.png'
import menu from '/public/images/menu.png'

export default function Home() {
  return (
    //<Layout>
    <>
        <Head>
            <title>Mary Ward HPE</title>
        </Head>
        <section className={utilStyles.loginLogo}>
            <Image
                src={longlogo}
                alt="Mary Ward Wolverines"
            />
        </section>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}