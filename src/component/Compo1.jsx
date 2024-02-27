import React from 'react'

const Compo1 = (props) => {
  return (
    <div className='three'>
      <div className="zero">
      <p className=''>{props.txt}</p>
      </div>
      <div className="one">
      <p className=''>{props.para1}</p>
      <p className=''>{props.para2}</p>
      <p className='text'>{props.text}</p>
      <p className=''>{props.icon}</p>
      </div>
      <div className="two">
      <p className='no'>{props.no}</p>
      <p className='tx2'>{props.text2}</p>
      <p className=''>{props.stars}</p>
      <p className='btn'>{props.btn}</p>
      </div>
    </div>
  )
}

export default Compo1
