import React from 'react'
import '../style/AllDeals.scss'
import './Deals.jsx'
import Deals from './Deals.jsx'
import img from '../assets/image.png';
import '../style/deals.scss'

const AllDeals = () => {
  const response = [
    {
      image: img,
      discount: '20%OFF',
      time: 'Limited time',
      text: 'Webbuilder 1',
      text2: 'Computer  Modern clasic with wix support',
      price: 39.96,
      price2: '$49.96',
      off: '(20% Off)',
      btnTxt: ''
    },
    {
      image: img,
      discount: '20% OFF',
      time: 'Limited time',
      text: 'Webbuilder 1',
      text2: 'Computer  Modern clasic with wix support',
      price: 39.96,
      price2: '$49.96',
      off: '(20% Off)',
      btnTxt: 'View Deal'

    },
    {
      image: img,
      discount: '20% OFF',
      time: 'Limited time',
      text: 'Webbuilder 1',
      text2: 'Computer  Modern clasic with wix  support',
      price: 39.96,
      price2: '$49.96',
      off: '(20% Off)',
      btnTxt: 'View Deal'

    }
  ];
  return (
  
    <div className='deal'>

      {
        
        response.map((elem) => (
          <Deals
          
            image={elem.image}
            discount={elem.discount}
            time={elem.time}
            text={elem.text}
            text2={elem.text2}
            price={elem.price}
            price2={elem.price2}
            off={elem.off}
            btnTxt={elem.btnTxt}
          />
        ))}
    </div>
  )
}

export default AllDeals
