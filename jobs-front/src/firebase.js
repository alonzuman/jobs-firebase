import * as firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlwYofd1KpSUEAaNBW50ZrBMSi-FBcCuM",
  authDomain: "jobs-51.firebaseapp.com",
  databaseURL: "https://jobs-51.firebaseio.com",
  projectId: "jobs-51",
  storageBucket: "jobs-51.appspot.com",
  messagingSenderId: "275815227889",
  appId: "1:275815227889:web:5acc97bb80f2b82e17e450",
  measurementId: "G-5ZFDZB092K"
})

export const db = firebase.firestore()
export default app;

export const signIn = async (user) => {
  const { email, password } = user
  await app.auth().signInWithEmailAndPassword(email, password)
}

export const signUp = async (user) => {
  const { email, password, firstName, lastName } = user
  const res = await app.auth().createUserWithEmailAndPassword(email, password)
  await db.collection('users').doc(res.user.uid).set({
    email,
    firstName,
    lastName,
    role: 1
  })
}

export const signOut = () => {
  app.auth().signOut()
}
