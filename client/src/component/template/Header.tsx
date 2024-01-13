import React, { useState } from 'react'

export default function Header() {
  const [message, setMessage] = useState<String>('ㅇㅇ');
  const onClickEvent = ()=> {setMessage('안녕하세요')};

  return (
    <>
    <main>
        <div onClick={onClickEvent}>{message}</div>
    </main>
    </>
  )
}
