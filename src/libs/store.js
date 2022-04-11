import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import localforage from "localforage";
import { tick } from "svelte";
import { writable } from "svelte/store";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIm4XpPsAGtAcyqDaOi2zVcYQ2h9sQaKQ",
    authDomain: "mtl-pay.firebaseapp.com",
    projectId: "mtl-pay",
    storageBucket: "mtl-pay.appspot.com",
    messagingSenderId: "292963223708",
    appId: "1:292963223708:web:e0b247970daa2875fa0559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const LFbalance = localforage.createInstance({
    name:"MTLPAY",
    storeName:"balance"
})
const LFtransactions = localforage.createInstance({
    name:"MTLPAY",
    storeName:"transaction"
})

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export let authloaded = writable(false)
export const user = writable(auth.currentUser)

auth.onAuthStateChanged(async auser=>{
    if (auser) {
        user.set(auser)
    }else{
        user.set(null)
    }
    authloaded.set(true)
    await tick()
})

export async function loginpopup(){
    const provider = new GoogleAuthProvider();
    return new Promise((rs)=>{
        signInWithPopup(auth,provider).then(auser=>{
            rs(true)
        }).catch(e=>{
            rs(e)
        })
    })
}

export async function logout(){
    return auth.signOut()
}

window.logout=()=>{
    return auth.signOut()
}