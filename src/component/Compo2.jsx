import React from 'react'
import '../style/Compo2.scss'

const Compo2 = () => {
    return (
        <div className='comp2'>
            <div className="one">
                <img src="" alt="" />
                <p>CDK</p>
            </div>
            <div className="two">
                <p>CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides</p>
                <p>26% Off</p>
                <p>Main highlights</p>
                <p>Why we love it</p>
                <div className="chkbox">
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>

            </div>
            <div className="three">
                <p className='rating'>91</p>
                <p className='a'>Very Good</p>
                <ul className='star'>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </ul>
                <button>View</button>
            </div>
        </div>
    )
}

export default Compo2
