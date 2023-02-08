import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import loginStyles from '../styles/login.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import logo from '/public/images/logo.png'
import longlogo from '/public/images/long_logo.png'
import menu from '/public/images/menu.png'
import CryptoJS from 'crypto-js';
import React, {useEffect} from "react";

export default function Home() {
  return (
    //<Layout>
    <>
        <Head>
            <title>Mary Ward HPE</title>
        </Head>
        <section className={loginStyles.loginLogo}>
          <div className={loginStyles.logoParent}>
            <div className={loginStyles.logoChild}>
              <Image src={longlogo} alt="Mary Ward Wolverines" layout='responsive'/>
            </div>
          </div>
        </section>
        <section className={loginStyles.loginFormParent}>
            <form action="#" onSubmit={authCheck} id="loginForm" className={loginStyles.loginForm}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username"/><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"/><br/>
                <button type="submit">Login</button>
            </form>
            {/*{
              useEffect(() => {
              document.getElementById("loginForm").onSubmit = function() {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value; 
                authCheck(username, password);
              }
            })
            }*/}
        </section>
    </>
  )
}

export async function authCheck(username, password) {
  console.log("good9");
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.parse({
        username,
        password,
    }),
  });
  const user = await res.json();
  if (res.ok && user) {
    console.log("good10");
    return user;
  } else return null;
  
}

export function tokenSet() {
  if (typeof window !== 'undefined') {
    localStorage.setItem("token", encrypt(`"${user.value}":"${pass.value}"`));
    console.log("goodish");
  } else {
    console.log("badish"); 
  }
}

const encrypt = (text) => {
  const key = CryptoJS.AES.encrypt(text, "ics_quest").toString();
  return key;
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}