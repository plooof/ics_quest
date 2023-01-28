import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import logo from '/public/images/logo.png'
import menu from '/public/images/menu.png'

export default function Home() {
  return (
    //<Layout>
    <>
      <Head>
        <title>Mary Ward HPE</title>
      </Head>
      <section className={utilStyles.navBar}>
        <ul>
          <li className={utilStyles.navBarLogo}>
            <Image
                src={logo}
                alt={'MW HPE'}
                style={{padding:5}}
                width={52}
                height={52}
              />
          </li>
          <li className={utilStyles.navBarDropdown}>
            <Image
                src={menu}
                alt={'Menu'}
                style={{padding:5}}
                width={52}
                height={52}
              />
          </li>
        </ul>
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