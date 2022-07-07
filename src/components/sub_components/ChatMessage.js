import React from 'react'
import firebase from 'firebase/compat/app'

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

const ChatMessage = ({ message, showImage }) => {
  const { uid } = auth.currentUser
  console.log(showImage)

  return (
    <div className={`flex mt-2 ${uid === message.uid ? 'justify-end' : ''}`}>
      <div className="w-10 h-10 mr-5">
        {uid !== message.uid && showImage ? (
          <div>
            <img className="rounded-full" src={message.photoURL} />
            <div className="text-xs mt-1">
              {message.createdAt !== null &&
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
          uid === message.uid
            ? 'bg-purple text-white rounded-tl-2xl'
            : 'bg-bgSecondary rounded-tr-2xl'
        }`}
      >
        <p className="text-sm text-left">{message.text}</p>
      </div>
    </div>
  )
}

export default ChatMessage
