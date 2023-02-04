import Head from "next/head"
import Image from "next/image"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"
import logo from "/public/images/logo.png"
import menu from "/public/images/menu.png"
import { Chart as ChartJS } from "chart.js/auto"
import { Chart, Bar, Line, Scatter, Bubble } from "react-chartjs-2"
import { data1, data2, options1, options2 } from "/public/chart.js";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error } = useSWR("/api/basicdata", fetcher);

  if (error) return <div>failed to load </div>
  if (!data) return <div>loading... </div>

  const parse = JSON.parse(data);
  var uID = "";
  if (typeof window !== "undefined") {
    uID = localStorage.getItem("userId");
  }

  return (
    //<Layout>
    <>
      <Head>
        <title>Mary Ward HPE</title>
      </Head>
      <div style={{backgroundColor: "rgb(241, 243, 248)"}} >
      <section className={utilStyles.navBar}>
        <ul>
          <li className={utilStyles.navBarLogo}>
            <Image src={logo} alt={"MW HPE"}
                style={{margin: 10, marginBottom: -10}}
                width={53}
                height={53}
              />
          </li>
          <li className={utilStyles.navBarDropdown}>
            <Image
                src={menu}
                alt={"Menu"}
                style={{margin: 10, marginBottom: -10}}
                width={53}
                height={53}
              />
          </li>
        </ul>
      </section>
      <section className={utilStyles.dashBox}>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "rgba(8, 178, 110, 1)"}}>
          <h3>placeholder</h3>
          <h1 id="box1">{str(parse[uID]["box1"])}</h1>
        </div>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "rgba(23, 203, 242, 1)"}}>
          <h3>placeholder</h3>
          <h1 id="box2">{str(parse[uID]["box2"])}</h1>
        </div>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "rgba(246, 172, 49, 1)"}}>
          <h3>placeholder</h3>
          <h1 id="box3">{str(parse[uID]["box3"])}</h1>
        </div>
        <div className={utilStyles.dashBoxDiv} style={{backgroundColor: "rgba(229, 98, 72, 1)"}}>
          <h3>placeholder</h3>
          <h1 id="box4">{str(parse[uID]["box4"])}</h1>
        </div>
      </section>
      <section className={utilStyles.dashGraph}>
        <div className={utilStyles.dashGraphDiv}>
          <h1>placeholder</h1>
          <div style={{margin:"1vw"}}>
            <Line data={data1} width={18} height={11} padding={5} options={options1}/>
          </div>
        </div>
        <div className={utilStyles.dashGraphDiv}>
          <h1>placeholder</h1>
          <div style={{margin:"1vw"}}>
            <Line data={data2} width={18} height={11} padding={5} options={options2}/>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export function str(string) {
  return JSON.stringify(string);
}

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}