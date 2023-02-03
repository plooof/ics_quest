import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import logo from '/public/images/logo.png'
import menu from '/public/images/menu.png'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Bar, Line, Scatter, Bubble } from 'react-chartjs-2'

export default function Home() {
  const data1 = {
    labels: ["test1", "test2", "test3"],
    datasets: [
      {
        data: [0.1,0.5,1.0]
      },
    ],
  };
  const data2 = {
    labels: ["test1", "test2", "test3"],
    datasets: [
      {
        data: [1.0,0.5,0.1]
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgroundColor: "rgba(47,97,68,0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
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
      <section className={utilStyles.dashBox}>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "red"}}>
          <h1>Visits This Week</h1>
        </div>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "blue"}}>
          <h1>placeholder</h1>
        </div>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "green"}}>
          <h1>placeholder</h1>
        </div>
      </section>
      <section className={utilStyles.dashGraph}>
        <div className={utilStyles.dashGraphDiv} style={{backgroundColor: "grey"}}>
          <h1>placeholder</h1>
          <div style={{margin:"1vw"}}>
            <Line data={data1} width={18} height={11} padding={5} options={options}/>
          </div>
        </div>
        <div className={utilStyles.dashGraphDiv} style={{backgroundColor: "grey"}}>
          <h1>placeholder</h1>
          <div style={{margin:"1vw"}}>
            <Line data={data} width={18} height={11} padding={5} options={options}/>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}