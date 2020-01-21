import React from 'react'

function Modal({ children }) {
  return(
    <>
      <div>Overlay</div>
      {/* <div>{children("test")}</div> */}
      <div>{children}</div>
    </>
  )
}

export default Modal;
