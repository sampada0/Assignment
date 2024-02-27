import React from 'react'
import Compo1 from './Compo1.jsx'
import '../style/Compo1.scss'
import myimg from '../assets/image.png';

const AllCompo1 = () => {
    const response = [
        {
            image: myimg,
            txt: 'Builder 1',
            para:'WixPro 72-Inch Responsive Website Builder-',
            para1: ' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            para2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            text: 'Show more',
            no: 9.8,
            text2: 'Exceptional',
            stars: '',
            btn: 'View'
        },
        {
            image: '',
            txt: 'Biulder',
            para:'WixPro 72-Inch Responsive Website Builder-',

            para1: ' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            para2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            text: 'Show more',
            no: 9.8,
            text2: 'Excellent',
            stars: '',
            btn: 'View'
        },
        {
            image: '',
            txt: 'Builder 1',
            para:'WixPro 72-Inch Responsive Website Builder-',

            para1: ' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            para2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            text: 'Show more',
            no: 9.5,
            text2: 'Excellent',
            stars: '',
            btn: 'View'
        }
    ]
    return (
        <div className='all-comp-container'>

            <div className="courses">
                {
                    response.map((elem) => (
                        <Compo1
                            txt={elem.txt}
                            para={elem.para}
                            para1={elem.para1}
                            para2={elem.para2}
                            text={elem.text}
                            no={elem.no}
                            text2={elem.text2}
                            btn={elem.btn}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default AllCompo1
