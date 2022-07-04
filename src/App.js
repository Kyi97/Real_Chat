import './App.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCWr4slB3wOzFn8VEyDUUEF4xQS0joDepY',
  authDomain: 'realchat-fa332.firebaseapp.com',
  projectId: 'realchat-fa332',
  storageBucket: 'realchat-fa332.appspot.com',
  messagingSenderId: '66160741885',
  appId: '1:66160741885:web:6ef3678a469c1747191d94',
  measurementId: 'G-B62ETC7VGK',
})
const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)

  const SignOut = () => {
    return (
      auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
    )
  }

  return (
    <div className="App bg-bgPrimary h-screen">
      <SignOut />
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  )
}

export default App
