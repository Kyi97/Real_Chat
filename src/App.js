import './App.css'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {
  const [user] = useAuthState(auth)

  const SignOut = () => {
    return auth.currentUser && <NavBar />
  }

  return (
    <div className="App bg-bgPrimary h-screen">
      <SignOut />
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  )
}

export default App
