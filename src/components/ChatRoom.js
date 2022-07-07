import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import InputMessage from './sub_components/InputMessage'
import ChatMessage from './sub_components/ChatMessage'

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
    <div className="grid grid-cols-3">
      <div>left</div>
      <div className="text-black col-span-2 h-[70vh] bg-white rounded-2xl px-8 py-5 flex flex-col justify-between">
        <div className="overflow-auto no-scrollbar pb-8" id="alwaysBottom">
          {messages &&
            messages.map((message, id, arr) => (
              <ChatMessage
                key={id}
                showImage={
                  arr[id - 1 < 0 ? 0 : id - 1].uid === message.uid
                    ? false
                    : true
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

export default ChatRoom
