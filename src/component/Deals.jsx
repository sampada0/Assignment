import React from 'react'


const Deals = (props) => {
  return (

    <div className='sa'>
      <div>
        <img src={props.image} alt="alternate text" />
      </div>
      {/* <p>{props.image}</p> */}
      <div className='oftxt'>
        <p className='dis'>{props.discount}</p>
        <p>{props.time}</p>
      </div>
      <h6 className='cen'>{props.text}</h6>
      <p>{props.text2}</p>
      <div className='num'>
        <p className='p1'>{props.price}</p>
        <p className='p2'>{props.price2}</p>
        <p className='of'>{props.off}</p>
      </div>
      <button>{props.btnTxt}</button>
    </div>
  )
}

export default Deals
