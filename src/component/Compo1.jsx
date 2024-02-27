import React from 'react'

const Compo1 = (props) => {
  return (
    <div className='three'>
      <div className="zero">
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="alternate text" />
        </div>
        <p className='t'>{props.txt}</p>
      </div>
      <div className="one">
        <p> <span className='bold-text'>{props.para}</span> <span>{props.para1}</span> </p>
        <p className='bold-text my-2'>Main highlights</p>
        <p className='para2'>{props.para2}</p>
        <p className='text'>{props.text} <i class="fa-solid fa-angle-down" style={{ color: '#1b88f4' }}></i></p>
      </div>
      <div className="two">
        <div>

          <p className='no'>{props.no}</p>
          <p className='tx2'>{props.text2}</p>
          <p className='star'>
            <i class="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
            <i class="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
            <i class="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
            <i class="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
            <i class="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
          </p>
        </div>
          <p className='btn'>View</p>
      </div>
    </div>
  )
}

export default Compo1
