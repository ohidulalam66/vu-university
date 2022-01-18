import React from 'react'
import { HashLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="d-flex py-5">
      <HashLoader size={60} />
    </div>
  )
}

export default Loading
