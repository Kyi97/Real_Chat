import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import InputEmoji from 'react-input-emoji'
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
          <InputEmoji
            value={formValue}
            onChange={setFormValue}
            placeholder="Type a message..."
          />
          {/* <input
              className="bg-bgSecondary shadow-inner text-sm appearance-none rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-purple"
              id="inline-full-name"
              type="text"
              placeholder="Type a message..."
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            /> */}
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

export default InputMessage
