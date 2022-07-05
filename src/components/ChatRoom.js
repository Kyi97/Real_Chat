import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { IoIosSend } from 'react-icons/io'

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
    <div className="grid grid-cols-3 h-[85vh]">
      <div>left</div>
      <div className="text-black col-span-2 bg-white rounded-2xl px-8 py-5 flex flex-col justify-between">
        <div className="overflow-auto h-[83vh] pb-8">
          {messages &&
            messages.map((message, id) => (
              <ChatMessage key={id} message={message} />
            ))}
        </div>
        <InputMessage />
      </div>
    </div>
  )
}

const ChatMessage = ({ message }) => {
  return (
    <div className="flex mt-3">
      <div className="w-10 h-10 mr-5">
        <img className="rounded-full" src={message.photoURL} />
        <div className="text-xs mt-1">
          {message.createdAt != null &&
            message.createdAt.toDate().toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
        </div>
      </div>
      <div className="max-w-[58%] text-left px-5 py-5 bg-bgSecondary rounded-b-3xl rounded-tr-2xl shadow-md">
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  )
}

const InputMessage = () => {
  const messagesRef = firestore.collection('messages')

  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()
    if (formValue !== '') {
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
  }

  return (
    // <form onSubmit={sendMessage}>
    //   <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
    //   <button type="submit">Send</button>
    // </form>
    <div className="">
      <form className="w-full flex" onSubmit={sendMessage}>
        <div className="w-[90%] mr-3">
          <input
            className="bg-bgSecondary text-sm appearance-none rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-purple"
            id="inline-full-name"
            type="text"
            placeholder="Type a message..."
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-green text-white w-11 h-11 flex justify-center items-center rounded-full"
          >
            <IoIosSend size={'23px'} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatRoom
