import React, { useEffect, useState } from 'react'
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
  const query = messagesRef.orderBy('createdAt')
  const [messages] = useCollectionData(query, { idField: 'id' })

  useEffect(() => {
    let temp = document.getElementById('alwaysBottom')
    temp.scrollTop = temp.scrollHeight
  }, [messages])

  return (
    <div className="grid grid-cols-3 h-[85vh]">
      <div>left</div>
      <div className="text-black col-span-2 bg-white rounded-2xl px-8 py-5 flex flex-col justify-between">
        <div
          className="overflow-auto no-scrollbar h-[83vh] pb-8"
          id="alwaysBottom"
        >
          {messages &&
            messages.map((message, id, arr) => (
              <ChatMessage
                key={id}
                showImage={
                  arr[id - 1 < 0 ? 0 : id - 1].uid == message.uid ? false : true
                }
                message={message}
              />
            ))}
        </div>
        <InputMessage />
      </div>
    </div>
  )
}

const ChatMessage = ({ message, showImage }) => {
  const { uid } = auth.currentUser
  console.log(showImage)

  return (
    <div className={`flex mt-2 ${uid == message.uid ? 'justify-end' : ''}`}>
      <div className="w-10 h-10 mr-5">
        {uid != message.uid && showImage ? (
          <div>
            <img className="rounded-full" src={message.photoURL} />
            <div className="text-xs mt-1">
              {message.createdAt != null &&
                message.createdAt.toDate().toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={`max-w-[58%] px-5 py-5 rounded-b-3xl shadow-md ${
          uid == message.uid
            ? 'bg-purple text-white rounded-tl-2xl'
            : 'bg-bgSecondary rounded-tr-2xl'
        }`}
      >
        <p className="text-sm text-left">{message.text}</p>
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
    <div className="">
      <form className="w-full flex" onSubmit={sendMessage}>
        <div className="w-[90%] mr-3">
          <input
            className="bg-bgSecondary shadow-inner text-sm appearance-none rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-purple"
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
