/* eslint-disable react-hooks/rules-of-hooks */
import CryptoJS from 'crypto-js';
import data from '/components/data/login.json'
import { useRouter } from "next/router"

const passphrase = 'ics_quest';
const loginjson = JSON.stringify(data)

export default function tokenCheck() {
    if (typeof window !== 'undefined') {
        localStorage.setItem("token", "test")
        if (localStorage.token) {
            const key = localStorage.token
            const decon = decrypt(key)
            console.log(key)
            console.log(decon)
            if (loginjson.includes(decon) && decon !== "") {
                console.log("true");
                toDash();
            } else {
                console.log("false2");
                toLogin();
            }
        // headers = { 'Authorization': localStorage.token }
        } else {
            console.log("false1");
            toLogin();
        }
      }
}

const encrypt = (text) => {
    const key = CryptoJS.AES.encrypt(text, passphrase).toString()
    return key;
};

const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const toDash = () => {
    console.log("true2");
    useRouter().replace("/dash");
};
  
export const toLogin = () => {
    console.log("false3");
    useRouter().replace("/login");
};

//function login() {
//    fetch("/api/login")
//        .then((res) => {
//            if (res.status == 200) {
//                return res.json()
//            } else {
//                throw Error(res.statusText)
//            }
//        })
//        .then(data => {
//            localStorage.setItem("token", data.token)
//            logResponse("loginResponse", `localStorage set with token value: ${data.token}`)
//        })
//        .catch(console.error)
//}

//function makeRequest() {
//    let headers = {}
//    if (localStorage.token) {
//        headers = { 'Authorization': localStorage.token }
//    }
//    fetch("/api/echo", { headers: headers })
//       .then((res) => {
//            if (res.status == 200) {
//                return res.text()
//            } else {
//                throw Error(res.statusText)
//            }
//        }).then(responseText => logResponse("requestResponse", responseText))
//        .catch(console.error)
//    }