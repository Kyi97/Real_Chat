import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
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
const firestore = firebase.firestore()
const auth = firebase.auth()

const ChatRoom = () => {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, { idField: 'id' })
  console.log(messages)

  return (
    // <div className="grid grid-cols-3">
    //   <div>left</div>
    //   <div className="col-span-2 bg-white rounded-xl">
    //     <div></div>
    //   </div>
    // </div>
    <div>
      {messages &&
        messages.map((message, id) => (
          <ChatMessage key={id} message={message} />
        ))}
      <InputMessage />
    </div>
  )
}

const ChatMessage = ({ message }) => {
  return (
    <div>
      <div>
        <img src={message.photoURL} />
      </div>
      <div>{message.text}</div>
      <div>
        {message.createdAt != null &&
          message.createdAt.toDate().toLocaleString()}
      </div>
    </div>
  )
}

const InputMessage = () => {
  const messagesRef = firestore.collection('messages')

  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    const { uid, photoURL } = auth.currentUser
    console.log(uid)

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    })

    setFormValue('')
  }

  return (
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  )
}

export default ChatRoom
