import CryptoJS from 'crypto-js';
import { Credentials } from '/components/data/creds';
import { useEffect } from 'react';

export default function login(req, res) {
    const b = req.body;

    const user = Credentials.find((user) => user.username === b.username && user.password === b.password);

    if (user) {
      console.log("good");
      //return res.redirect("/dash");
      return res.status(200);
    } else {
      console.log("bad")
      //return res.redirect("/login");
      return res.status(401);
    }
    
  }
  
const encrypt = (text) => {
  const key = CryptoJS.AES.encrypt(text, "ics_quest").toString();
  return key;
};

const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};