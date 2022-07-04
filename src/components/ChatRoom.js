import React from 'react'
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

const ChatRoom = () => {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, { idField: 'id' })

  return (
    <div>
      {messages &&
        messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
    </div>
  )
}

const ChatMessage = ({ message }) => {
  return (
    <div>
      <div>{message.text}</div>
      <div>{message.createdAt.toDate().toLocaleString()}</div>
    </div>
  )
}

export default ChatRoom
