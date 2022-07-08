import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import InputMessage from './sub_components/InputMessage'
import ChatMessage from './sub_components/ChatMessage'
import SideBar from './sub_components/SideBar'
import { firestore } from '../firebase'

const ChatRoom = () => {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt')
  const [messages] = useCollectionData(query, { idField: 'id' })

  useEffect(() => {
    let temp = document.getElementById('alwaysBottom')
    temp.scrollTop = temp.scrollHeight
  }, [messages])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 pr-7">
      <SideBar />
      <div className="text-black col-span-2 h-[80vh] bg-white rounded-2xl px-8 py-5 flex flex-col justify-between">
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
